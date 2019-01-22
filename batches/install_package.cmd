start /wait powershell -Command "Start-Process cmd -ArgumentList '/k %1\\batches\\package.cmd' -Wait"
echo success
exit