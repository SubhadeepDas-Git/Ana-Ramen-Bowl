@echo off
set PATH=C:\Program Files\nodejs;%PATH%
echo Starting The Last Bowl (Dev Mode with HMR)...
npm run dev -- --port 5173 --host
pause
