@echo off
title Mi Proyecto

echo ========================================
echo     INICIANDO SERVIDORES
echo ========================================

REM ============================
REM BACKEND
REM ============================
cd /d "%~dp0backend"

REM npm install
start "Backend" cmd /k "npm start"

REM ============================
REM FRONTEND
REM ============================
cd /d "%~dp0frontend"

REM npm install
start "Frontend" cmd /k "npm run dev"

REM ============================
REM ESPERAR Y ABRIR FIREFOX
REM ============================
timeout /t 3 /nobreak >nul

start "" "C:\Program Files\Mozilla Firefox\firefox.exe" "http://localhost:5173"

echo.
echo ========================================
echo   SERVIDORES INICIADOS
echo ========================================
echo Backend:  npm start
echo Frontend: npm run dev
echo ========================================

exit