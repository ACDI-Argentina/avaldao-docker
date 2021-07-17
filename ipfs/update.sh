#!/bin/bash
docker exec avaldao-ipfs ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
docker exec avaldao-ipfs ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
docker exec avaldao-ipfs ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
docker exec avaldao-ipfs ipfs config --json Gateway.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
docker exec avaldao-ipfs ipfs config --json Gateway.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
docker exec avaldao-ipfs ipfs config --json Gateway.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST", "OPTIONS"]'
docker exec avaldao-ipfs ipfs config --json Gateway.HTTPHeaders.Access-Control-Expose-Headers '["Ipfs-Hash"]'
docker exec avaldao-ipfs ipfs config --json Gateway.Writable true
docker restart avaldao-ipfs
docker exec avaldao-ipfs ipfs config show
