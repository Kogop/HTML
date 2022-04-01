let car = {
    wheels : 4,
    doors : 5
}
let sum = 0
for(let key in car){

sum += car[key]
}
alert(sum);