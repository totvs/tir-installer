@echo off
set arglist=%1

start /wait powershell -Command "Start-Process cmd -ArgumentList '/k %1\\batches\\chocolatey.cmd %arglist%' -Verb RunAs -Wait"
echo success
exit