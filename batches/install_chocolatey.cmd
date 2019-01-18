@echo off
start /wait %1\python-3.7.1.exe /quiet InstallAllUsers=1 PrependPath=1 Include_test=0 TargetDir=C:\Python37
echo success
exit