server {
    server_name feathers.avaldao.com;

    location / {
      proxy_pass http://localhost:3030;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "Upgrade";
      proxy_set_header Host $host;
    }
}


