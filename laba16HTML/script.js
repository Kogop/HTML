let mas = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST","EAST", "NORTH", "WEST","WEST","EAST"];

function Sokrawenie_Puti(mass) {
for (let j = 0; j < mass.length; j++) {
  
    for (let i = 0; i < mass.length; i++) {
        if ((mass[j] == "NORTH" && mass[i] == "SOUTH")||(mass[i] == "NORTH" && mass[j] == "SOUTH")) {
            mass.splice(i,1);
            mass.splice(j,1);
        };
        if ((mass[j] == "EAST" && mass[i] == "WEST")||(mass[i] == "EAST" && mass[j] == "WEST")) {
            mass.splice(i,1);
            mass.splice(j,1);
        };
        
    }
}


    return mass;
}
console.log(Sokrawenie_Puti(mas));