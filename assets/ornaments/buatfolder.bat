@echo off
for /f "delims=" %%a in (folder.txt) do (
    mkdir "%%a"
)
echo.
echo Semua folder berhasil dibuat.
pause