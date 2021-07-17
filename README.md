# Avaldao - Instructivo de despliegue

El despliegue de Avaldao se realiza a través de contenedores Docker y Docker Compose. 

## Requerimientos

Para instalar la aplicación se requiere:

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker compose](https://docs.docker.com/compose/install/)

> Las pruebas se han realizado sobre Ubuntu `20.04`, con Docker `19.03.8` y Docker Compose `1.25.0`.

## Procedimiento

### 1. Descargar proyectos desde Github

Para la construcción de las imágenes de *avaldao-dapp* y de *avaldao-feathers*, se requiere descargar el código fuente desde los repositorios en Github. Los siguientes scrtips son de utilidad para este paso.

```bash
./scripts/clone-avaldao-dapp.sh
./scripts/clone-avaldao-feathers.sh
```

> Este paso solo es necesario en el caso de que se trabaje en un entorno de desarrollo. Para los demás ambiente, las imagenes de los contenedores se pueden obtener directamente directamente desde [ACDI Dockerhub](https://hub.docker.com/u/acdi).

### 2. Configuración

Los archivos de configuración se encuentran montados en los contenedores en forma de [bind mount](https://docs.docker.com/storage/bind-mounts/). De esta forma es posible cambiar la configuración sin reconstruir las imágenes.

Adicional a los archivos de configuración, puede parametrizarse el archivo de ambiente `.env` para establecer el valor de variables de ambiente.

**Avalado Dapp**

Configurar el archivo `dapp/config/configuration.js`.

En el caso de la dapp, se inicia en modo `development`, por lo que los cambios son tomados tan pronto se modifique el archivo sin reiniciar el contenedor.

**Avalado Feathers**

Configurar el archivo `feathers/config/default.json`.

### 3. Ejecución

Al momento de ejecutar los contenedores, debe elegirse cual es el ambiente (`development`|`staging`|`production`) que se desea utilizar.

Por ejemplo, para iniciar el ambiente de `development`, el cual es utilizado para el desarrollo local, se debe ejecutar lo siguiente:

```bash
docker-compose -f docker-compose.yml up
# Workaround por problema de configuración de CORS en IPFS.
./ipfs/update.sh
```

Esto inicia los contenedores en el orden adecuado.
En el caso de aquellos contenedores para los cuales no tenga una imágen en el registro local, se crearán utilizando los archivo `Dockerfiles` que se encuentran en los directorios especificados en la directiva `build` del servicio.

## Docker compose

### Contenedores

La solución está compuesta por los siguientes contenedores:
* avaldao-dapp
* avaldao-feathers
* avaldao-ipfs
* avaldao-mongodb 
* avaldao-rsk (solo disponible en el environment development)

Las imágenes a partir de las cuales se crean estos contenedores, se indican en el diagrama a continuación.
![EFEM Despliegue](despliegue.svg)

#### Volúmenes

Tanto **avaldao-ipfs** como **avaldao-mongodb** necesitan persistir datos más allá del ciclo de vida del contenedor. Es decir, si el contenedor se detiene por algún motivo, sería deseable no perder los datos almacenados hasta el momento. Se utilizan tres vólumenes, dos para ipfs, y uno para mongodb. Es posible administrarlos utilizando ``docker volume``. En el caso de querer borrarlos, simplemente usamos ``docker-compose down -v``.

#### Redes

Por defecto, docker-compose crea una red virtual y conecta a todos los contenedores especificados en el mismo archivo. Gracias a esto los contenedores pueden referirse entre si utilizando un esquema de nombres. A modo de ejemplo efem-feathers, puede configurar la conexión a la base datos, utilizando la url ``mongodb://efem-mongodb:27017/``
donde *efem-mongodb* es el nombre del contenedor, y docker se encargará de resolverlo automáticamente.

## Configuración del ambiente

Por workaround al problema de resolución de nombres, se deben agregar las siguientes entradas en el archivo */etc/hosts*.

```
127.0.0.1     avaldao-mongodb
127.0.0.1     avaldao-ipfs
127.0.0.1     avaldao-feathers
```




#### IPFS Pinning

Para utilizar el servicio de IPFS Pinning de Pinata es necesario configurar las siguientes variables de entorno en el archivo *.env*:

```
PINATA_API_KEY="your pinata api key"
PINATA_SECRET_API_KEY="your pinata secret api key"
```
Estas datos deben ser mantenidos fuera del versionado en Github.



## Despliegue de smart contracts

Una vez que los servicios se encuentren levantados, es necesario desplegar el smart contract de Crowdfunding según sus instrucciones de [despliegue](https://github.com/ACDI-Argentina/avaldao-contract/blob/master/README.md#despliegue).

Una vez completado el despliegue, debe tomarse la dirección de la App Crowdfunding:

```
Aragon deploy
 . . .
Crowdfunding deploy
 - Libraries
   . . .
 - Crowdfunding: 0x05A55E87d40572ea0F9e9D37079FB9cA11bdCc67
 . . .
 - Initialized
```

Y configurar la siguiente variable según el ambiente:

- *dapp/config/configuration.js#crowdfundingAddress*

En el caso de desarrollo, el cambio será reflejado en la dapp sin necesidad de reiniciar su contenedor.



## Problemas conocidos
### CORS en ipfs
La primera vez que se inicia el contenedor efem-ipfs, no tiene CORS habilitado. Si bien se han ejecutado los comandos para configurar las opciones, no toman efecto hasta que el contenedor es reiniciado. Por este motivo, es necesario ejecutar el comando update.sh que se encuentra en el directorio ipfs.
```bash
./ipfs/update.sh
```
### Resolución de nombres de contenedores en host
Si bien los contenedores al estar conectados a la misma red, pueden comunicarse a través de sus nombres, esto no es válido para el host sobre el cúal se ejecutan los contenedores.
La solución temporal fue agregar asociaciones en /etc/hosts los nombres de los contenedores hacia localhost. 

```
127.0.0.1     efem-ipfs
127.0.0.1     efem-feathers

```
Este esquema se usa **solo de forma local con fines de desarrollo**. En el ambiente productivo, se ejecutarán los contenedores en distintos servidores, los cuales tendrán asociados nombres de dominio.

### El contenedor efem-rsk no responde
Algunas veces el contenedor efem-rsk queda en un estado inconsistente. Al ejecutar ``docker ps``  dicho contenedor se mostrará en estado unhealty. 
Esto sucede cuando no es la primera vez que ejecutamos el entorno, ya que docker tratará de reutilizar el contenedor de efem-rsk creado anteriormente.
Esto se soluciona fácilmente eliminando dicho contenedor con `docker rm efem-rsk` antes de hacer ``docker-compose up``

