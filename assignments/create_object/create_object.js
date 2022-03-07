function CreateObject(arr) {
    // Write your code here
    let i = 0;
     let dict = {}
     while (i<arr.length) {
         dict[arr[i]] = arr[i+1]
         i += 2
     }
     return dict
}

module.exports = CreateObject;
