let arr = [1,1,1,2,2,3,1,2,3,1,3,2,2,2];
let maxx = 0;
let used = [0,0,0,0,0]; 
let temp = [0,0];
let temp1 = [];

function BolsheFsehPovtor(item, i) {
    let arr2 = item;
    maxx = 0;
        arr2.forEach(function(pop, ind, arr2){
            if(arr2[ind] == item[i]){
                arr2.slice(ind);
                maxx = maxx + 1;
            }
        });
    if(temp[1] <= maxx){
        temp[0] = item[i];
        temp[1] = maxx;
        used.push(item[i]);
    }  
}

for (let index = 0; index < arr.length; index++) { 
   for (let J = 0; J < used.length; J++) {
        if (used[J] == arr[index]) {
        }else{
            BolsheFsehPovtor(arr, index);
            maxx = 0;
        }
    }
}

alert(temp[0]);
alert(temp[1]);

