function testFunction() {
    // return "Hello!";
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello!");
        // reject("Some error!");
 
    }, 5000);
    });
}
console.log("App Started!");

    // const testValue = testFunction();


//     testValue.then((testValue) => {
//      console.log("Res = ", testValue);
//     }).catch((err) => {
//       console.log("Err = ", err);   
//     }).finally(()=>{
//         console.log("Finally detected!");
//     })

    // console.log("Res = ", testValue);

    // async function start() {

    //     try {
    //         const testValue = await testFunction();
    //         console.log("Res=", testValue);
    //     } catch (err) {
    //       console.log("Err = ", err); 
    //     }
    //     console.log("Finally detected!");  
    // }

    // start();

    // Вариант - 2 эта же функция без названия (см. ниже)

    //  (async function () {

    //     try {
    //         const testValue = await testFunction();
    //         console.log("Res=", testValue);
    //     } catch (err) {
    //       console.log("Err = ", err); 
    //     }
    //     console.log("Finally detected!");  
    // })();

    // Вариант 3 - ассинхронная безимянная стрелочная функция

    (async  () => {

        try {
            const testValue = await testFunction();
            console.log("Res=", testValue);
        } catch (err) {
          console.log("Err = ", err); 
        }
        console.log("Finally detected!");  
    })();