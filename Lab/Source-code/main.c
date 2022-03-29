/* main.c */
/* Developer MrsRead */

#include "main.h" 

int main( void ) {

	char	kalkylera, upprepa = 'j' ;
	int		antalAr;
	double  kapital;

	while ( upprepa == 'j' || upprepa == 'J' ) {
		Inmatning( &kapital, &antalAr );
		TabellPaSkarmen( kapital, antalAr );

		printf("\n™nskas kalkylator? ( j/n ) --> ");
		scanf(" %c", &kalkylera );
		if ( kalkylera == 'j' || kalkylera == 'J' )
			Kalkylator();

		printf("\nUpprepa programmet? (j/n) --> ");
		scanf(" %c", &upprepa);
 	} 
	printf("\nSLUT");

	return 0;
}