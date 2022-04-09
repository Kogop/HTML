let car = {
    wheels : 4,
    doors : 5
}
let sum = 0
function Sum(obj){
    for(let key in obj){
        if(typeof obj[key] === "undefined"){

        }
         else
        {
            sum += obj[key]
        }
    }

}

Sum(car);


alert(sum);