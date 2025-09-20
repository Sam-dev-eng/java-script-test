function MyCar() {

    return { 
    name: null,
    isOn: false,
    acceleration : 0,
    totalSpeed : 0,
    gear: 0,
    fuelLevel: 0,
    currentState: function(){if (this.isOn && this.gear > 0 && this.acceleration > 0) return "Your car is moving"
        else if (this.isOn && this.gear == 0 && this.acceleration == 0) return "Your car is on but not moving"
        else return "Your car is off"
    },
    setGear : function(gear){ if(this.isOn == true && gear > 0 && gear < 6 && gear + this.gear < 6)this.gear = gear;},
    stopCar : function(){this.isOn = false;},
    startCar : function() {if (this.fuelLevel < 1) return "Your fuel is low"
        else this.isOn = true;
    },
    addFuel: function(liters){
        if (liters < 51 && this.fuelLevel < 51 && liters + this.fuelLevel < 51) this.fuelLevel += liters; 
        else
            if(liters + this.fuelLevel > 50) this.fuelLevel = 50;
    },
    accelerate : function (){ 
        if (this.isOn == true && this.fuelLevel > 0 && this.gear > 0){
        this.acceleration+= this.gear;
        this.totalSpeed += this.gear;
          if (this.totalSpeed >= 50){
              this.fuelLevel -= 1;
              this.totalSpeed = 0; 
          }
    
}else 
    if (this.fuelLevel < 1) this.isOn = false;
    }
    }
}
module.exports = MyCar;



