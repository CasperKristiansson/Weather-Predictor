/* inmatnin.c */
#include ".\Include-Inmatning\inmatnin.h"

void Inmatning( double* kapitalPek, int* antalArPek ){
	/* clrscr();   /* finns ej i ANSI-C */  
	printf("\nBer„knar kapitaltillv„xt vid %0.1f%% r„nta",RANTESATS);
	printf("\n=============================================");
	printf("\nPositivt kapital r„knar fram†t i tiden.");
	printf("\nNegativt kapital r„knar bak†t i tiden.");
	printf("\n\nInsatt kapital och antal †r ?(-->(+/-)1000 10)--> ");
	scanf("%lf%d", kapitalPek, antalArPek);

	return;
}
