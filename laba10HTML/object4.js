let car = {
    wheels : 4,
    doors : 5,
    make: "Ford"
}

function multiply2(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *=2
        }
    }
}

multiply2(car);


alert(car.wheels);
alert(car.doors);
alert(car.make);