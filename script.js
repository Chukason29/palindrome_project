"use strict"
//collect DOM values
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn")
const result = document.getElementById("result")


const specialXtersRemover = (input) =>{
    //
    const finalArray = []

    // split 
    const inputArray = input.split("")
    const newInputArray = inputArray.filter((item) => {
        return /[A-Za-z0-9]/.test(item)
    }).forEach(element => {
        return finalArray.push(element.toLowerCase())
    });
    return finalArray;
  }
  //console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  const reversePalindromeChecker = (theArray)=>{
    let trueFlag
    let splittedArray
    if (theArray.length % 2 === 0) {
      const arrayNum = theArray.length / 2
      splittedArray = theArray.splice(0, arrayNum)
      theArray.reverse()
    }else{
      const arrayNum = Math.floor(theArray.length / 2)
      splittedArray = theArray.splice(0, arrayNum)
      theArray.shift()
      theArray.reverse()
    }
    
    for (let i = 0; i < theArray.length; i++) {
      trueFlag = theArray[i] === splittedArray[i] ? true : false
      if (trueFlag === false) {
        break
      }
    }
    return trueFlag
}
checkButton.addEventListener("click", ()=>{
    if (textInput.value === "") {
        alert("Please input a value")
    }else{
        if (textInput.value.length === 1) {
            result.textContent = `${textInput.value} is a palindrome`
        }else{
            if (reversePalindromeChecker(specialXtersRemover(textInput.value))) {
                result.textContent = `${textInput.value} is a palindrome`
            }else{
                result.textContent = `${textInput.value} is not a palindrome`
            }
        }
    }
    
})
