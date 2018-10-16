@echo off
pushd %~dp0
openssl genrsa -out private.key 2048
openssl req -new -out csr.csr -key private.key -config config.cnf
openssl x509 -req -days 25000 -in csr.csr -signkey private.key -out cert.crt -extensions v3_req -extfile config.cnf
pause