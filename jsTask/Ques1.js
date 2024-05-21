const nums = [3, 2, 3]

const majority = (arr) => {

     const myMap = {}

     for (const num of arr) {

          myMap[num] = (!myMap[num] ? 0 : myMap[num]) + 1

     }
     console.log(myMap);

     let maxNum
     let maxCount = 0

     for (const num in myMap) {
          if (myMap[num] > maxCount) {
               maxCount = myMap[num]
               maxNum = num
          }

     }

     console.log(maxNum);

}

majority(nums)