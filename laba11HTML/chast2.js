let str0 = "OppaoapaoSSSSAAAAAAAAAAAAAAAAAAAAA";
let str1 = "a" ;
let str2 = "a";
let sum_of_smol_char = 0;
let sum_Upper_char = 0;


function ChangeSizeOfCharInString(string) {
    strA = string;    
    stra = strA.toUpperCase();
   // alert(stra);
       for (ind = 0; ind < string.length; ind++){
            if (string[ind] > stra[ind]) {
                sum_of_smol_char = sum_of_smol_char + 1;
            }else{
                sum_Upper_char = sum_Upper_char + 1;
            }
        };
        //alert(sum_Upper_char);
    if (sum_of_smol_char > sum_Upper_char) {  
        string = string.toUpperCase();
    }
    else{
        string = string.toLowerCase();
    }
  return string;
}




 alert(ChangeSizeOfCharInString(str0));
