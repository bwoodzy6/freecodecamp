/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/


function checkCashRegister(price, cash, cid) {
    let sortedCID = [];
    sortedCID = sortCID(cid);

    return getResult(price, cash, sortedCID);
  }

function sortCID(cid) {
    return cid.reverse();
}

function convertMoney(money) {
    return Math.ceil(money * 100);
}

function getCIDTotal(cid) {
   let total = 0;
   cid.forEach(item => total += convertMoney(item[1]));
   // console.log(`total ${total}`);
   return total;
}

  function getResult(price, cash, cid) {
    let result = {status:"OPEN", change:[]};
    let change = convertMoney(cash) - convertMoney(price);
    const cidTotal = getCIDTotal(cid);
    // console.log("Change: " + change);
    // console.log("CIDTotal: " + cidTotal);  
    
    if (change === cidTotal) {
        result.status = "CLOSED";
        let cidOriginalOrder = cid.slice();
        result.change = cidOriginalOrder.reverse();
    } else if (change > cidTotal ) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    } else {
        result.status = "OPEN";
        result.change = getChangeDueArray(change, cid);
    }

    if (result.change.length === 0) {
        result.status = "INSUFFICIENT_FUNDS";
    }

    console.log("result: " + result);
    return result;
  }

    function getChangeDueArray(change, cid) {
        let changeDue = [];
        // change = 1674;
        // console.log(cid);
        for (let i = 0; i < cid.length; i++) {
            let convertedMoney = convertMoney(cid[i][1]);
            let type = cid[i][0];
            let numOfCurrency = 0;
            let convertedBaseMoney = 0;
            let baseMoney = 0;

            switch(type) {
                case "ONE HUNDRED":
                    baseMoney = 100;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "TWENTY":
                    baseMoney = 20;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "TEN":
                    baseMoney = 10;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "FIVE":
                    baseMoney = 5;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "ONE":
                    baseMoney = 1;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "QUARTER":
                    baseMoney = .25;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "DIME":
                    baseMoney = .10;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "NICKEL":
                    baseMoney = .05;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                case "PENNY":
                    baseMoney = .01;
                    convertedBaseMoney = convertMoney(baseMoney);
                    break;
                default:
                    break;
            }
            
            
            numOfCurrency = convertedMoney / convertedBaseMoney;
            if (change / convertedBaseMoney >= 1) {
                let divisNum = Math.floor(change / convertedBaseMoney);
                let availChangeForCurr = numOfCurrency > divisNum ? (numOfCurrency - divisNum) : numOfCurrency;
                console.log(`change:${change} type:${type} divisNum:${divisNum} availChangeForCurr:${availChangeForCurr}`);
                let result = change - (availChangeForCurr * convertedBaseMoney);
                if (result < 0) {
                    changeDue.push([type, (divisNum * convertedBaseMoney)/100]);
                    change = change - (divisNum * convertedBaseMoney);
                } else {
                    change = result;
                    changeDue.push([type, availChangeForCurr * baseMoney]);
                }
                // changeDue.push([type, availChangeForCurr * baseMoney]);
            }

            
        }
        console.log("final change " + change)
        console.log(changeDue);
        return change > 0 ? [] : changeDue;
    }

  
//   const result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
const result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);  
console.log(result);