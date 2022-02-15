upstream ipfs {
  server localhost:8080;
}

server {
    server_name dapp.avaldao.com;

    index index.html index.htm;
    root /var/www/html/dapp;

    location /ipfs/ { 
       proxy_pass http://ipfs;
    }

    location / {
      try_files $uri /index.html;
    }
     
}


