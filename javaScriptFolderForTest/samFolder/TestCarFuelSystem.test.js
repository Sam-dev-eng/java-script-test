const MyCar = require('./CarFuelSystem');


describe('car on and of testing', () => {
test('test the default state of the car', () => {
    let newCar = MyCar();
  expect(newCar.isOn).toBe(false);
});

test('Car fuel system can turn on', () => {
    let newCar = MyCar();
    newCar.addFuel(3)
    newCar.startCar();
  expect(newCar.isOn).toBe(true);

    });
    test('test if i can on my car and off it again',()=>{
        let newCar = MyCar();
        newCar.startCar();
        newCar.addFuel(3);
        newCar.stopCar();
        expect(newCar.isOn).toBe(false)

    });
});

describe('test the fuel availablility on my car',()=>{

    test('test for the default capacityof the fuel', ()=> {
        let myCar = MyCar();
        expect(myCar.fuelLevel).toBe(0);
    })

    test('test if i can refuel when my fuel is low',()=>{
        let myCar = MyCar();
        myCar.addFuel(20);
        expect(myCar.fuelLevel).toBe(20);

    })

    test('test if i can add fuel liters more than 50',()=>{

        let myCar = MyCar();
        myCar.addFuel(50)
        myCar.addFuel(1);
        expect(myCar.fuelLevel).toBe(50);

    });
    test("test if the car will will turn on while the fuel is zero", ()=> {
        let myCar = MyCar();
        expect(myCar.startCar()).toBe("Your fuel is low");
        
    });
    });

describe('test driving function',()=>{

    test('test the default accerelation of the car',()=>{
        let myCar = MyCar();
        myCar.addFuel(3);
        myCar.startCar();
        myCar.accelerate();
        expect(myCar.isOn).toBe(true);
        expect(myCar.acceleration).toBe(0);

    });

    test("test if the car can move when the car is off",()=> {
        let myCar = MyCar();
        myCar.addFuel(3);
        myCar.setGear(1);
        myCar.accelerate();
        myCar.accelerate();
        expect(myCar.acceleration).toBe(0);
    });

    test('test if i can accelerate multiple times', ()=>{
        let myCar = MyCar()
        myCar.addFuel(3);
        myCar.startCar();
        myCar.setGear(1);
        for (let count = 1; count <= 20; count++) myCar.accelerate();
        expect(myCar.acceleration).toBe(20);


    })
});


describe('test for gear system',()=>{

    test("test the default gear of my car",()=>{
        let myCar = MyCar();
        expect(myCar.gear).toBe(0);

    });
    test("test when i changed the gear",() => {
        let myCar = MyCar();
        myCar.addFuel(3);
        myCar.startCar();
        myCar.setGear(3);
        expect(myCar.gear).toBe(3);

    });
    test("test if i can change the gear when the car is off",()=>{
        let myCar = MyCar();
        myCar.setGear(3);
        expect(myCar.gear).toBe(0);

    })
});



describe('Test for distance and fuel efficiency',()=>{

    test('test if the car reduces fuel after reaching a speed of 50km',()=>{
        let myCar = MyCar();
        myCar.addFuel(3);
        myCar.startCar();
        myCar.setGear(1);
        expect(myCar.fuelLevel).toBe(3);
        for (let count = 1; count <= 51; count++) myCar.accelerate();
        expect(myCar.fuelLevel).toBe(2);
        expect(myCar.acceleration).toBe(51);
    });

    test('test if the car stops when fuel is exhausted',()=>{
        let myCar = MyCar();
        myCar.addFuel(2);
        myCar.startCar();
        myCar.setGear(1);
        for (let count = 1; count <= 101; count++) myCar.accelerate();
        expect(myCar.isOn).toBe(false);
        expect(myCar.fuelLevel).toBe(0);
    });

})

describe('test for the current stste of the car',()=> {
    test('test the current state when it is on and moving',()=>{
        let myCar = MyCar();
        myCar.addFuel(3);
        myCar.startCar();
        myCar.setGear(1);
        myCar.accelerate();
        expect(myCar.currentState()).toBe("Your car is moving");
    });

    test('test the current status when the car is on but not moving ', ()=>{
        let myCar = MyCar();
        myCar.addFuel(3);
        myCar.startCar();
        myCar.setGear(0);
        expect(myCar.currentState()).toBe("Your car is on but not moving");
    })

        test('test the current status when the car is off',()=>{
            let myCar = MyCar();
            expect(myCar.currentState()).toBe("Your car is off");

})
})