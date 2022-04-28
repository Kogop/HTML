let str0 = "OppaoapaoSSSSA";
let str1 = "a" ;
let str2 = "a";
let sum_of_smol_char = 0;
let sum_Upper_char = 0;


function ChangeSizeOfCharInString() {
    strA = str0;
    strA.toUpperCase();
       for ( ind of str0){
            if (str0[ind] > strA[ind]) {
                sum_of_smol_char = sum_of_smol_char + 1;
            }else{
                sum_Upper_char = sum_Upper_char + 1;
            }
        };
    if (sum_of_smol_char > sum_Upper_char) {
        str0.toLowerCase();
    }
    else{
        str0.toUpperCase();
    }
  
}


ChangeSizeOfCharInString();

 alert(str0);
