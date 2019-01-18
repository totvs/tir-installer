@echo off
title Environment Setup
if defined ChocolateyInstall (goto install-packages) ELSE (goto install-choco)

:install-choco
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
goto install-packages

:install-packages
choco upgrade python --version 3.7.1 -y
choco upgrade firefox -y
choco upgrade git -y

exit
