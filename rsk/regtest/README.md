# RSK Regtest

Configuración de nodo local RSK Regtest.

*Especificaciones*

- Nombre: RSK Regtest
- Nodo público: -
- Explorer: -
- ID de red: 33
- Sínbolo: RBTC

[Más información](https://developers.rsk.co/rsk/node/install/docker)

## Build

```
docker build -t rsk-node-regtest -f Dockerfile.RegTest .
```

## Run

```
docker run -d --name rsk-node-regtest -p 4444:4444 -p 4445:4445 -p 30305:30305 rsk-node-regtest
```

## Test

```
curl http://localhost:4444/ \
  -s \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

