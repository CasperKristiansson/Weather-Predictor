/* kalkylat.c */
/* Developer MissGul */

#include "kalkylat.h"

void Kalkylator( void )         /* Enkel kalkylator */
{
   float x, y;
	char c;

	printf( "\nKalkylator som klarar de fyra r„knes„tten t ex 3+2\n");
	printf( "A, avslutar\n");
	while (printf("-->"), scanf("%f%c%f", &x, &c, &y ) == 3) {
      switch(c) {
         case '+':
				printf("%f\n", x + y);
            break;
         case '-':
            printf("%f\n", x - y);
            break;
         case '*':
            printf("%f\n", x * y);
            break;
         case '/':
            if (y != 0)
               printf("%f\n", x / y);
            else
                printf("Division med noll\n");
            break;
         default:
            printf("Felaktig operator\n");
            break;
      }
	}
	scanf("%*s");
	return;
}
