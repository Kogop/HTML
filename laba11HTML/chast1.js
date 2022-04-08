let arr = [1,1,1,2,2,3,1,2,3,1,3];
let maxx = 0;
let used = []; 
let temp = [0,0];
let temp1 = [];

function BolsheFsehPovtor(item, i) {
    for (let ind = 0; ind < item.length; ind++) { 
        if(item.includes(item[i])){
            maxx = maxx + 1;
        }
    } 
    if (temp[1] <= maxx) {
        temp[0] = item[i];
        temp[1] = maxx;
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

