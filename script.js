// javascript nested loop

// left triangle star pattern
let s = '';

for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
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

for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
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

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
        s3 += ' ';
    }
    for (let k = 0; k <= i; k++) {
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

for (let i = n2; i > 0; i--) {
    for (let j = 0; j < n2 - i; j++) {
        s4 += ' ';
    }
    for (let k = 0; k < i; k++) {
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

for (let i = 1; i <= n3; i++) {
    for (let j = 0; j < i; j++) {
        if (i === n3) {
            s5 += '*'
        } else {
            if (j == 0 || j == i - 1) {
                s5 += '*';
            } else {
                s5 += ' ';
            }
        }
    }

    s5 += '\n'
}

console.log(s5);

/* 

result:

*
**
* *
*  *
*   *
*    *
*     *
*      *
*       *
**********

*/

// hollow right star triangle pattern

console.log('');

let s10 = '';
let n6 = 10;

for (let i = 0; i < n6; i++) {
    for (let j = i; j < n6 - 1; j++) {
        s10 += ' ';
    }
    for (let k = 0; k <= i; k++) {
        if (k === 0 || k === i || i === n6 - 1) {
            s10 += '*';
        } else {
            s10 += ' ';
        }
    }
    s10 += '\n';
}

console.log(s10.split("").reverse().join(""));

/*

result:

**********
*       * 
*      *  
*     *   
*    *    
*   *     
*  *      
* *       
**        
*         

*/

console.log('');

let s9 = '';
let n4 = 10;

for (let i = 0; i < n4; i++) {
    for (let j = 0; j < n4 - i - 1; j++) {
        s9 += ' ';
    }
    for (let k = 0; k <= i; k++) {
        if (k === 0 || k === i || i === n4 - 1) {
            s9 += '*';
        } else {
            s9 += ' ';
        }
    }
    s9 += '\n';
}

console.log(s9);

/* 

result:

         *
        **
       * *
      *  *
     *   *
    *    *
   *     *
  *      *
 *       *
**********


*/

console.log('');

let s7 = '';
let n5 = 10;

for (let i = n5 - 1; i >= 0; i--) {
    for (let j = 0; j < n5 - i - 1; j++) {
        s7 += ' ';
    }
    for (let k = 0; k <= i; k++) {
        if (k === 0 || k === i || i === n5 - 1) {
            s7 += '*';
        } else {
            s7 += ' ';
        }
    }
    s7 += '\n';
}

console.log(s7);

/* 

result:

**********
 *       *
  *      *
   *     *
    *    *
     *   *
      *  *
       * *
        **
         *

*/

console.log('');

// pascal rectangle

function pascals(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row - 2][col - 1] + result[row - 2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}

console.log(pascals(10));

/* 

result:

0
: 
[1]
1
: 
(2) [1, 1]
2
: 
(3) [1, 2, 1]
3
: 
(4) [1, 3, 3, 1]
4
: 
(5) [1, 4, 6, 4, 1]
5
: 
(6) [1, 5, 10, 10, 5, 1]
6
: 
(7) [1, 6, 15, 20, 15, 6, 1]
7
: 
(8) [1, 7, 21, 35, 35, 21, 7, 1]
8
: 
(9) [1, 8, 28, 56, 70, 56, 28, 8, 1]
9
: 
(10) [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]

*/

console.log('');











