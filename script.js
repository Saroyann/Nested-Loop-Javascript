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

let s= '';

for (let i = 0 ; i < 10 ; i++) {
    for(let j = 0 ; j <= i ; j++) {
        s+= '*';
    }
    s+= '\n';
}

console.log(s);

console.log('');

// result
/* 

*/

let s2 = ''

for(let i = 0 ; i < 5 ; i++) {
    s2 += '*'
}

console.log(s2)

