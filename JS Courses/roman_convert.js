function convertToRoman(num) {
    
    let resultStr = "";

    const romanNumMap = {
       M: 1000,
       CM: 900,
       D: 500,
       CD: 400,
       C: 100,
       XC: 90,
       L: 50,
       XL: 40,
       X: 10,
       IX: 9,
       V: 5,
       IV: 4,
       I: 1
     };
     
   console.log(Object.keys(romanNumMap));
   let keysArr = Object.keys(romanNumMap);
     for (let i = 0; i < keysArr.length; i++) {
       
       let quotient = Math.floor(num / romanNumMap[keysArr[i]]);
       console.log(romanNumMap[keysArr[i]]);
       
       num -= quotient * romanNumMap[keysArr[i]];
       for (let j = 0; j < quotient; j++) {
        resultStr += keysArr[i];
       }
       
     }
     console.log(resultStr);
     return resultStr;
   }
   
   convertToRoman(36);