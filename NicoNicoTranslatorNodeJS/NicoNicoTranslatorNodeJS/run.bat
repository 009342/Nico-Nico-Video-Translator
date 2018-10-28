@echo off
pushd %~dp0
cmd /c npm install
node app.js
pause