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
        if(typeof obj[key] === 'object'){
            obj2[key] = obj[key]
        }else{
            let key2 = key

            deepCop(key[key], obj2[key]);
        }
    }
}
deepCop(car, car2);

alert(car2.doors.side);


