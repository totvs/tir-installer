@echo off
set arglist=%1 %2 %3 %4

powershell -Command "Start-Process cmd -ArgumentList '/k %cd%\\batches\\chocolatey.cmd %arglist%' -Verb RunAs -Wait"
echo success
exit