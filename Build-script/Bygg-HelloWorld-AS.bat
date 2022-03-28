Rem fil Bygg-proj-AS.bat Anders S. bygg-skript
REM Kompilering Hello World till objektfiler
gcc -c %MY_C_PATH%Module-Main\helloworld.c -o %MY_PRJ_PATH%Compiled-output\helloworld.o
REM
REM Linking Hello World till exe-fil
gcc -o %MY_PRJ_PATH%Compiled-output\helloworld.exe 	%MY_PRJ_PATH%Compiled-output\helloworld.o  

