let arr = [1,1,1,2,2,3,1,2,3,1,3];
let maxx = 0;
let used = []; 
let temp = [0,0];
let temp1 = [];

function BolsheFsehPovtor(item, i) {
    let arr2 = arr;
        arr2.forEach(function(pop, ind, arr2){
            if(arr2.includes(item[i])){
                arr2.splice(1, ind);
               // maxx = maxx + 1;
            }
        }
    if(temp[1] < maxx){
        temp[0] = item[i];
        temp[1] = arr.length - arr2.length;
        used.push(item[i]);
    }  
}

for (let index = 0; index < arr.length; index++) { 
   for (let J = 0; J < used.length; J++) {
        if (arr[index] === used[J]) {
        }else{
            BolsheFsehPovtor(arr, index);
            maxx = 0;
        }
    }
}

alert(temp[0]);
alert(temp[1]);

