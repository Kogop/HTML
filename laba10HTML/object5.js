let car = {
    make : "Ford",
    wheels : 4,
    doors : {
        side : 3,
        back : 1
    }
}
let car2 = {}


function deepCop(obj, obj2){
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            deepCop(key[key], obj2[key]); 
        }else{
            obj2[key] = obj[key]
        }
    }
}
deepCop(car, car2);

alert(car2.doors == car.doors);


