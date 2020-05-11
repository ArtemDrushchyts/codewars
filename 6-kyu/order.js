function order(words){
  if(words === ""){
    return "";
  }
  const array = [];
  words = words.split(" ");
  let j = 1;
  for(let i = 0; i<words.length; i++){
    if(words[i].indexOf(j) > -1){
     array.push(words[i]);
    j++;
    i=-1;
    }
  }
return array.join(" ");
}