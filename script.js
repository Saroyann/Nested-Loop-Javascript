// javascript nested loop
let s= '';

for (let i = 0 ; i < 10 ; i++) {
    for(let j = 0 ; j <= i ; j++) {
        s+= '*';
    }
    s+= '\n';
}

console.log(s);

// result 

/* 
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



let s2 = ''

for (let i = 10 ; i > 0 ; i--) {
    for(let j = 0 ; j < i ; j++) {
        s2 += '*'
    }
    s2 += '\n'
}
console.log(s2)

// result
/* 
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

let s3 = '';

for (let i = 0 )

