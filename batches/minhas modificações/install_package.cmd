@echo off
powershell -Command "Start-Process cmd -ArgumentList '/k %cd%\\batches\\package.cmd' -Wait"
echo success
exit