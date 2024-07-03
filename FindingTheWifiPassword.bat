@echo off
set "wifiName=Yazici_Wifi"
set "password="

for /f "tokens=2 delims=: " %%A in ('netsh wlan show profile name="%wifiName%" key=clear ^| findstr "Key Content"') do (
    set "password=%%A"
)

if defined password (
    echo The password for WiFi network "%wifiName%" is: %password%
) else (
    echo WiFi network "%wifiName%" not found or password not available.
)

pause