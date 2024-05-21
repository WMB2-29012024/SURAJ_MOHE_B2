let nums = [1, 2, 3, 1, 2, 3], k = 2;

function Arrayyy(num, tar) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] == tar) {
            count++;
        }
    }
    return count % 2 == 0 ? true : false;
}

console.log(Arrayyy(nums, k));