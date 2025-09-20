const checkPower = require('./myAc');


describe('test for power on and off on my Ac',() =>{

    test('test if my ac is off', () => {

        expect(checkPower()).toBe(false);
    });

    // test('test if my ac has turn on',()=>{
    //     toogleButton()
    //     expect(checkPower()).toBe(true);
    //     toogleButton()


    // })

//     test('test if i can turn off my ac',() =>{
//         toogleButton()
//         toogleButton()
//         expect(checkPower()).toBe(false);
//     });
// });

// describe('Test for my temperature increament and decrement',()=>{

//     test('test for the default temperature',() =>{
//         expect(checkTemperature()).toBe(24);
 
//     });

//     test('test for the increment of the ac when on ',()=>{
//         toogleButton()
//         increaseTemperature();
//         expect(checkTemperature()).toBe(23)
//         toogleButton()
//     })

//     test('test if the temperature can increase more than 16 degrees',()=>{
//         toogleButton()
//         for (let count = 0; count < 1000; count++){
//             increaseTemperature();
//         }
//         expect(checkTemperature()).toBe(16);
//         toogleButton();

//     });

//     test('test if temperature can decrease more than 30',()=>{
//         toogleButton();
//         for (let count = 0; count < 50; count++){
//             decreaseTemperature();
//         }
//         expect(checkPower()).toBe(true);
//         expect(checkTemperature()).toBe(30);
//         toogleButton()

//     });

//     test('test if the ac temperature will increase when off',()=>{
//         for (let count = 0; count < 50; count++){
//             increaseTemperature();
//         }
//         expect(checkPower()).toBe(false)
//         expect(checkTemperature()).toBe(30)

//     });

//     test('test if the ac temperature will decrease when off',()=>{
//        for (let count = 0; count < 50; count++){
//             decreaseTemperature();
//         }
//         expect(checkPower()).toBe(false)
//         expect(checkTemperature()).toBe(30) 
//    })


});