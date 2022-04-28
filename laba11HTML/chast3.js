let arr = [2,1,0]
let Num_descend = 0;
let Num_ascend = 0;
let answer = "";

function isSortedAndHow(array) { 
    //arr.sort( (a, b) => a - b );
        for (ind = 0; ind < array.length-1; ind++){
            if (array[ind] > array[ind+1]) {
                Num_descend = Num_descend + 1;
            }
            if (array[ind] < array[ind+1]) {
                Num_ascend = Num_ascend + 1;
            }
        };
        //alert(Num_ascend);
        //alert(Num_descend);
        if (Num_ascend == array.length - 1) {  
            answer = "Yes, ascending";
        }else if(Num_descend == array.length - 1){
            answer = "Yes, descending";
        }
        else{
            answer = "no";
        }
   return answer;
   
}

alert(isSortedAndHow(arr));