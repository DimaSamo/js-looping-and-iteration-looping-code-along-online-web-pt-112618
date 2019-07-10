// Code your solutions in this file
function writeCards(array, eventName){
  let retArray=[]
 for (let i = 0; i < array.length; i++) {
   retArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
 }
 return retArray
}
