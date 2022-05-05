let N = prompt("введите размер матрицы");
var arr = [];

//arr = Array(N).fill(Array(N));
function MakeTablUmnoj(n) {
    for (let i = 0; i < n; i++) { 
        if (!arr[i]) arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = (i+1)*(j+1);
            //alert(arr[i][j]);
        }
        //alert(arr[i]);
    }
    //var r = arr;
    return arr;
}

//let r = arr[3][3];

alert(MakeTablUmnoj(N));