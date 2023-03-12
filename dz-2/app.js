// console.log('Hello World');
// 1) 
 var arr = [10, 250, 777, 866, 200, 288, 556, 218, 22]
   
 for (let i = 0; i < arr.length; i++) {
   var num = String(arr[i]);
   var suu = num[0];
   if (suu == 1 || suu == 2 || suu == 5) {
      console.log(num);
 }
}


// 2)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
arr.reverse()
console.log(arr)


for (var count = 0; count > 20; count + 1) {
    console.log(count)
}

// 3)

// var insert = prompt('Red or Yellow or Green').toLowerCase().trim()
var red = ['Стоп красный']
var yellow = ['Жёлтый приготовься']
var green = ['Зелёный иезжай']

switch (insert) {
    case 'red':
        console.log(red)
        break
    case 'yellow':
        console.log(yellow);
        break  
    case 'green':
        console.log(green); 
        break
    default:
        alert('ERROR')  
        break       
}
