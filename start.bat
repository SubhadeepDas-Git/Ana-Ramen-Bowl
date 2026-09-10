@echo off
set PATH=C:\Program Files\nodejs;%PATH%
echo Starting The Last Bowl...
npm run preview -- --port 5173 --host
pause
