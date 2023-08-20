// javascript nested loop

// left triangle star pattern
let s= '';

for (let i = 0 ; i < 10 ; i++) {
    for(let j = 0 ; j <= i ; j++) {
        s+= '*';
    }
    s+= '\n';
}

console.log(s);



/* 

result 
*
**
***
****
*****
******
*******
********
*********
**********

*/

console.log('');

// downward left star triangle pattern

let s2 = ''

for (let i = 10 ; i > 0 ; i--) {
    for(let j = 0 ; j < i ; j++) {
        s2 += '*'
    }
    s2 += '\n'
}
console.log(s2)


/* 

result:

**********
*********
********
*******
******
*****
****
***
**
*

*/

console.log('');

// right star triangle pattern

let s3 = '';
let n = 10;

for (let i = 0 ; i < n ; i++ ) {
    for(let j = 0 ; j < n - i ; j++) {
        s3 += ' ';
    } 
    for (let k = 0 ; k <= i ; k++) {
        s3 += '*';
    }
    s3 += '\n';
}

console.log(s3);

/* 

result :

          * 
         **
        ***
       ****
      *****
     ******
    *******
   ********
  *********
 **********

*/

console.log('')

// downward right star triangle pattern

let s4 = '';
let n2 = 10;

for (let i = n2 ; i > 0 ; i--) {
    for (let j = 0 ; j < n2 - i ; j++) {
        s4 += ' ';
    }
    for(let k = 0 ; k < i ; k++) {
        s4 += '*';
    }
    s4 += '\n';
}

console.log(s4);

/* 

result:

**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *

*/

console.log('');

// hollow left star triangle pattern

let s5 = '';
let n3 = 10;


