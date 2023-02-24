// let arr = [4,16,27,12,3,8]

// let odd_arr =[]
// // for (let element of arr) {
// //     if(element % 2 != 0){
// //         odd_arr.push(element)
// //     }
// // }
// // console.log(odd_arr);

// let a = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 != 0){
//         odd_arr[a] = arr[i]
//         a++
//     }
    
// }
// console.log(odd_arr);

// let even_arr = []
// // for (let element of arr){
// //     if(element % 2 == 0){
// //         even_arr.push(element)
// //     }
// // }
// // console.log(even_arr);

// let b = 0;
// for(let j = 0; j < arr.length; j++){
//     if(arr[j] % 2 == 0){
//         even_arr[b] = arr[j]
//         b++
//     }
// }
// console.log(even_arr);

// let arr2 = [1,2,3,4,5,6]

// let min = arr2[0]
// for(let i = 1; i < arr2.length; i++){
//     if(min > arr2[i]){
//         min = arr2[i]
//     }
// }
// console.log(min);

// let max = arr2[0]
// for(let i = 1; i < arr2.length; i++){
//     if(max < arr2[i]){
//         max = arr2[i]
//     }
// }
// console.log(max);

// let inp = document.querySelector('.input')
// console.log(inp);

// let name = 'Kamil'
// let newname = ''

// function myFunction(){
//     for(let i = 0; i < name.length; i++){
          
//     }
// }
// myFunction()


let name = 'Kamil'
let reverse_name = ''
for(let i = name.length-1; i >= 0; i--){
    reverse_name += name[i]
}
console.log(reverse_name);