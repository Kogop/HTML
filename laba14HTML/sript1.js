let sud = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]
];
//let arr_1 = [1,1,1,1,1,1,1,1,1];



function IsSudokuTrue(sudoku) {
    
    for (let i = 0; i < 9; i++) { 
        let arr = [0,0,0,0,0,0,0,0,0];
        for (let j = 0; j < 9; j++) {

           for (let k = 0; k < 9; k++) {
              if (sudoku[i][j] == k+1) {
                  arr[k] += 1;
              } 
               
           }
            //alert(arr[i][j]);  
        }
        if(/*arr_1.every(elem =>elem == 1) == */arr.every(elem =>elem == 1)){
                // hren napisal every i tak vozvrashaet true tak 4to proveriat mojno
                // i nado tolko sam arr
            
        }else{
            return false;
        }
        //alert(arr[i]);
    };
    
    for (let j = 0; j < 9; j++) { 
        let arr = [0,0,0,0,0,0,0,0,0];
        for (let i = 0; i < 9; i++) {

           for (let k = 0; k < 9; k++) {
              if (sudoku[i][j] == k+1) {
                  arr[k] += 1;
              } 
               
           }
            //alert(arr[i][j]);  
        }
        if(/*arr_1.every(elem =>elem == 1) == */arr.every(elem =>elem == 1)){

            
        }else{
            return false;
        }
        //alert(arr[i]);
    };

    let a = 0, b = 0, arrB;
    for (let g = 0; g < 9; g++) {
        arrB = [0,0,0,0,0,0,0,0,0];
        for (let i = a; i < a+3; i++) { 
            
            for (let j = b; j < b+3; j++) {

                for (let k = 0; k < 9; k++) {
                   // console.log(g,i,j,a,b,k)
                    if (sudoku[i][j] == k+1) {
                        arrB[k] += 1;
                        //console.log(arr[k]);
                    }  
                }  
            }
            console.log(arrB);
           
        }  
        a+=3;
        //console.log(arr);  
        if(/*arr_1.every(elem =>elem == 1) == */arrB.every(elem =>{ console.log(elem); return elem == 1})){
            console.log(b);
        }else{
            return false;
        }
        //console.log(b);
        if (a==9) {
            b = b+3;
            a = 0;
            //console.log(b);
        }
        arrB = [0,0,0,0,0,0,0,0,0];
    }
    return true;
};

alert(IsSudokuTrue(sud));