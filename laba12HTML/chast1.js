let N = prompt("введите размер матрицы");
var arr = [];

//arr = Array(N).fill(Array(N));

for (let i = 0; i < N; i++) { 
    if (!arr[i]) arr[i] = [];
    for (let j = 0; j < N; j++) {
        arr[i][j] = (i+1)*(j+1);
        alert(arr[i][j]);
    }
}

//let r = arr[3][3];

//alert(r);