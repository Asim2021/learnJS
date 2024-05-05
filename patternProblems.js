/*//// OUTER LOOP FOR ROWS AND INNER FOR COLUMN///
 1. *****
    *****
    *****
    *****
    *****
*/
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= n; j++) {
      str += "*";
    }
    console.log(str);
  }
}

/*
2.  *
    **
    ***
    ****
    *****
*/
function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

/*
3.  *****
    ****
    ***
    **
    *
*/
function pattern3(n) {
    for (let i = 1; i <= n; i++) {
      str = "";
      for (let j = n; j >=i; j--) {
        str += "*";
      }
      console.log(str);
    }
  }


/*
4.  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/
function pattern4(n) {
    for (let i = 1; i <= n; i++) {
      str = "";
      for (let j = 1; j <= i; j++) {
        str += j+" ";
      }
      console.log(str);
    }
  }

/*
5.  *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *
*/
function pattern5(n) {
    for (let i = 1; i <= 2*n-1; i++) {
      str = "";
      if(i<=5){
        for (let j=1; j<=i; j++) {
            str += "*";
          }
      }else{
        for (let j=10; j>i; j--) {
            str += "*";
          }
      }
      console.log(str);
    }
  }

/*
6.       *
        **
       ***
      ****
     *****
*/
function pattern6(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= 1; j++) {
      str =str + " ".repeat(n-i) + "*".repeat(i);
    }
    console.log(str);
  }
}

/*
7.   *****
      ****
       ***
        **
         *


8.      *
       ***
      *****
     *******
    *********


9.  *********
     *******
      *****
       ***
        *


10.      *
        * *
       * * *
      * * * *
     * * * * *


11.  * * * * *
      * * * *
       * * *
        * *
         *


12.  * * * * *
      * * * *
       * * *
        * *
         *
         *
        * *
       * * *
      * * * *
     * * * * *


13.      *
        * *
       *   *
      *     *
     *********


14.  *********
      *     *
       *   *
        * *
         *


15.      *
        * *
       *   *
      *     *
     *       *
      *     *
       *   *
        * *
         *


16.           1
            1   1
          1   2   1
        1   3   3   1
      1   4   6   4   1
*/
function pattern16(n) {
  for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= 1; j++) {
      str = " ".repeat(2*n-2*i) + j + " ".repeat(3)+j;
    }
    console.log(str);
  }
}

/*
17.      1
        212
       32123
      4321234
       32123
        212
         1
*/
function pattern17(n){
  for (let i = 1; i <=2*n-1; i++) {
    str = " ".repeat(Math.abs(n-i))
    let col = i>n ? 2*n-i : i;
    for (let j = col; j >= 1; j--) {
     str += j
    }
    for (let j = 2; j <= col; j++) {
     str += j
    }
    console.log(str);
  }
}
// pattern17(5)
/*
18.   **********
      ****  ****
      ***    ***
      **      **
      *        *
      *        *
      **      **
      ***    ***
      ****  ****
      **********


19.    *        *
       **      **
       ***    ***
       ****  ****
       **********
       ****  ****
       ***    ***
       **      **
       *        *


20.    ****
       *  *
       *  *
       *  *
       ****

21.    1
       2  3
       4  5  6
       7  8  9  10
       11 12 13 14 15

22.    1
       0 1
       1 0 1
       0 1 0 1
       1 0 1 0 1
*/
// function pattern22(n){
//   for (let i = 1; i <= n; i++) {
//     str = "";
//     for (let j = 1; j <= i; j++) {
//       if(i%2===0){
//         str +=0 
//       }
//       if(){
//         str+=1
//       }
//     }
//     console.log(str);
//   }
// }
pattern22(5)
/*
23.        *      *
         *   *  *   *
       *      *      *

24.    *        *
       **      **
       * *    * *
       *  *  *  *
       *   **   *
       *   **   *
       *  *  *  *
       * *    * *
       **      **
       *        *

25.       *****
         *   *
        *   *
       *   *
      *****

26.   1 1 1 1 1 1
      2 2 2 2 2
      3 3 3 3
      4 4 4
      5 5
      6

27.   1 2 3 4  17 18 19 20
        5 6 7  14 15 16
          8 9  12 13
            10 11

28.      *
        * *
       * * *
      * * * *
     * * * * *
      * * * *
       * * *
        * *
         *
*/
function pattern28(n) {
  for (let i = 1; i <= 2*n-1; i++) {
    let str = "";
    let col = i>n ? 2*n-i : i;
    for (let j = 1; j <= col; j++) {
      str = " ".repeat(Math.abs(n-i)) + "* ".repeat(j);
    }
    console.log(str);
  }
}

/*
29.      
       *        *
       **      **
       ***    ***
       ****  ****
       **********
       ****  ****
       ***    ***
       **      **
       *        *

30.         1
          2 1 2
        3 2 1 2 3
      4 3 2 1 2 3 4
    5 4 3 2 1 2 3 4 5
*/
function pattern30(n){
  for (let i = 1; i <= n; i++) {
    str = " ".repeat(2*n-2*i)
    for (let j = i; j >= 1; j--) {
     str += j + " "
    }
    for (let j = 2; j <= i; j++) {
     str += j + " "
    }
    console.log(str);
  }
}
// pattern30(10)

/*
31.      4 4 4 4 4 4 4  
         4 3 3 3 3 3 4   
         4 3 2 2 2 3 4   
         4 3 2 1 2 3 4   
         4 3 2 2 2 3 4   
         4 3 3 3 3 3 4   
         4 4 4 4 4 4 4   
*/
function pattern31(n){
  for (let i = 0; i<=n; i++) {
    str = ""
    for (let j = 0; j <=n; j++) {
      let num = n - Math.min(Math.min(i,j),Math.min(n-i,n-j))
     str +=num +" "
    }
    console.log(str);
  }
}

/*
32.    E
       D E
       C D E
       B C D E
       A B C D E

33.    a
       B c
       D e F
       g H i J
       k L m N o
     
34.    E D C B A
       D C B A
       C B A
       B A
       A
       
35.    1      1
       12    21
       123  321
       12344321
 */
