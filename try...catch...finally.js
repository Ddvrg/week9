// const numerator = 100, denominator = 'a'
// try{
//     console.log(numerator/denominator)
//     console.log(a)
// }
// catch(error){
//     console.log('An error caught')
//     console.log('Error message:' + error)
// }
// finally{
//     console.log('Finally will execute every time')
// }

// try{
//     setTimeout(function(){
//         // error in the code
//     }, 3000)
// }catch(e){
//     console.log("won't work")
// }

setTimeout(function(){
    try{
        // error in the code
    }catch{
        console.log("error is caught");
    }
}, 3000);