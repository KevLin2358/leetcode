// sorting a hashmap

function sort_hash(){
  let arr = [1,1,1,2,3,4,5,6,6,7];
  let map = new Map();

  for(let i = 0; i < arr.length; i++){
    if(map.get(i) === undefined){
      map.set(i, 1)
    }
    else{
      console.log(va)
      let val = map.get(i) + 1;
      map.set(i, val);
    }
  }

  console.log(map);
}

sort_hash();