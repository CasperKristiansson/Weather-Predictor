/* tabell.c */
/* Developer MissPink */

#include "tabell.h"

static double NastaAr( double kapital );

void TabellPaSkarmen( double kapital, int antalAr   )
{
	int ar ;

	printf("\n èr     Saldo\n ==     =====\n");
	for ( ar = 1; ar <= antalAr; ar++ ) {
		kapital = NastaAr( kapital );
		
		/* enheter i tabellen */
		if ( -10 < kapital && kapital < 10 )
			printf("%3d%11.2f kr\n", ar, ABS( kapital ));
		else if ( -100 < kapital && kapital < 100 )
			printf("%3d%11.2f da(deka)kr\n", ar, (ABS( kapital ))/10);
		else if ( -1000 < kapital && kapital < 1000 )
			printf("%3d%11.2f h(hekto)kr\n", ar, (ABS( kapital ))/100);
		else  
			printf("%3d%11.2f kkr\n", ar, (ABS( kapital ))/1000);

	}
	
	return;
}


static double NastaAr( double x ) {

	if ( x > 0 )
		x = x * ( 1 + ranteFaktor );          /* denna */
	else 	x = x * 1/( 1 + RANTESATS/100 );   /* eller denna */

	return x ;
}