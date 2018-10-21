@echo off
pushd %~dp0
echo 관리자 권한으로 실행해야 인증서가 설치됩니다!
pause
echo 개인키를 생성하는 중입니다...
openssl genrsa -out private.key 2048
echo 인증서 서명 요청 파일을 생성하는 중입니다...
openssl req -new -out csr.csr -key private.key -config config.cnf
echo 인증서를 서명하는 중입니다...
openssl x509 -req -days 25000 -in csr.csr -signkey private.key -out cert.crt -extensions v3_req -extfile config.cnf
certutil -addstore "Root" cert.crt
pause