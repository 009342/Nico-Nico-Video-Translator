#!/usr/bin/env bash
if [[ "$EUID" -ne 0 ]]
then
  echo "sudo로 실행 해주세요."
  exit
fi

echo "개인키를 생성하는 중입니다..."
openssl genrsa -out private.key 2048
echo "인증서 서명 요청 파일을 생성하는 중입니다..."
openssl req -new -out csr.csr -key private.key -config config.cnf
echo "인증서를 서명하는 중입니다..."
openssl x509 -req -days 25000 -in csr.csr -signkey private.key -out cert.crt -extensions v3_req -extfile config.cnf

echo "CA 인증서를 설치하는중"
# Mac OS X platform
if [[ "$(uname)" == "Darwin" ]]
then
  security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain cert.crt
  echo "설치완료"
  exit
elif [[ "$(expr substr $(uname -s) 1 5)" == "Linux" ]]
then
  if [[ "$(grep -Ei 'debian|buntu|mint' /etc/*release)" ]]
  then
     cp cert.crt /usr/local/share/ca-certificates/nico-nico-cert.crt
     update-ca-certificates
     echo "설치완료"
     exit
  fi
fi

echo "CA 인증서를 설치하지 못했습니다"
echo "\"`pwd`/cert.crt\" 인증서를 설치해주시기 바랍니다."