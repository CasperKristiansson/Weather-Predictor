REM Fil Setup-mingw32-as.bat  Anders S skript för att sätta upp sökvägar (path)
REM
REM Denna fil sätter tre egna environmentvariabler MY_PRJ_PATH , MY_C_PATH
REM och ändrar två PATH och CPATH
REM
REM replace c:\egcs-1.1.2 with whatever your installation root may be.
REM GCC_EXEC_PREFIX is optional, but having it here doesn't hurt.
REM
REM - Compiler settings on this computer -
PATH=%PATH%;C:\TPFAPPS\egcs\bin\egcs\bin
PATH=%PATH%;C:\TPFAPPS\egcs\lib\gcc-lib\i386-mingw32\egcs-2.91.66
SET GCC_EXEC_PREFIX=c:\TPFAPPS\egcs\lib\gcc-lib\
SET CPATH=C:\TPFAPPS\egcs\i386-mingw32\include\
SET LIBRARY_PATH=C:\TPFAPPS\egcs\i386-mingw32\lib\
REM 
REM ------- Project settings and setup --------
REM
REM ----- Set path to project root directory -----
SET MY_PRJ_PATH=H:\as\RantaPaRanta\
REM
REM --- Set root path for all C-code in the project ---
SET MY_C_PATH=%MY_PRJ_PATH%\RantaPaRanta\Source-Code\

REM --- Set CPATH to all necessary source code directorys ---
REM ---    CPATH används av MinGW för att bl a hitta header-filer  ---
SET CPATH=%CPATH%;%MY_C_PATH%Include-common\;%MY_C_PATH%Module-Main\Include-main\;%MY_C_PATH%Module-Tabell\Include-tabell\;%MY_C_PATH%Module-Inmatning\Include-inmatning\;%MY_C_PATH%Module-Kalkylator\Include-kalkylator\
REM
REM --- TEST----------
REM --- Setting path to testing framework so it can be used in all C-code subdiretories ---
SET CPATH=%CPATH%;%MY_C_PATH%Module-CuTest\
