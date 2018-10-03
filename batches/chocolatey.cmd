@echo off
title Environment Setup
if defined ChocolateyInstall (goto install-packages) ELSE (goto install-choco)

:install-choco
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
goto install-packages

:install-packages
if /I "%1" EQU "Y" choco upgrade python --version 3.6.5 -y
if /I "%2" EQU "Y" choco upgrade firefox -y
if /I "%3" EQU "Y" choco upgrade git -y
if /I "%4" EQU "Y" choco upgrade vscode -y

exit