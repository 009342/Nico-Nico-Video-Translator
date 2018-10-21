@echo off
pushd %~dp0
echo ������ �������� �����ؾ� �������� ��ġ�˴ϴ�!
pause
echo ����Ű�� �����ϴ� ���Դϴ�...
openssl genrsa -out private.key 2048
echo ������ ���� ��û ������ �����ϴ� ���Դϴ�...
openssl req -new -out csr.csr -key private.key -config config.cnf
echo �������� �����ϴ� ���Դϴ�...
openssl x509 -req -days 25000 -in csr.csr -signkey private.key -out cert.crt -extensions v3_req -extfile config.cnf
certutil -addstore "Root" cert.crt
pause