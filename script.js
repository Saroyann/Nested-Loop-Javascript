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

for (let k = 10 ; k > 0 ; k--) {
    for(let l = 0 ; l < k ; l++) {
        s2 += '*'
    }
    s2 += '\n'
}
console.log(s2)

