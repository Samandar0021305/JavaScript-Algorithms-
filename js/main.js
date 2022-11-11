
// function foo(n){
//   let summa =0;
//   for(let i=0 ;i < n;i++){
//     summa +=i
//   }
//   return summa

// return (n*(n+1)) / 2
// }



// console.log(foo(9));



// const person  ={
//     firstName:'Bruce',
//     lastName:'Wayne'
// }



// let desc = Object.entries(person)

// console.log(typeof desc);



// fibonachi number



// function fibonachi(n){
//     const fib = [0,1]
//    for(let i=2;i<n;i++){
//     fib[i] = fib[i-1] + fib[i-2]
//    }
//    return fib
// }

// console.log(fibonachi(51));



// function faktarial(n){
//     let result = 1
    
// }



// function daraja(x){
//     var k=0
//   for(let i=0;i<x;i++){
//     if(x == 2**i){
//         k= i
//     }
//     // }else{
//     //     return false
//     // }
//   }
//   if(k){
//     return true
//   }
//   return false
// }

// console.log(daraja(81));


// var x = 2
// while(x>=2){
//   x /=2
// }
// console.log(x);



function ofPowerOfTwo(x){
    if(x<1){
        return false
    }
    while(x>1){
        if(x%2 !==0 ){
            return false
        }
        x = x / 2
    }

    return true
}
console.log(ofPowerOfTwo(12));