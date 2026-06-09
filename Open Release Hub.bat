@echo off
echo Starting Release Hub...
cd /d "%~dp0"
start /b python -m http.server 8765
timeout /t 2 /nobreak > nul
start http://localhost:8765/index.html
echo Release Hub is running at http://localhost:8765/index.html
echo Close this window to stop the server
pause
