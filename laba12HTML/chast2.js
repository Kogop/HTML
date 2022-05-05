parse = string => {
    let array = [];
    let val = 0;
    
    const options = {
      i: () => val++,
      d: () => val--,
      s: () => val **= 2, 
      o: () => array.push(val)
    }
    
    for (i = 0; i < string.length; i++) {
      let character = string[i];
      let command = options[character];
      command();
    }
    
    return array;
  }
  
  console.log(parse("iiisdoso")); //[8, 64]