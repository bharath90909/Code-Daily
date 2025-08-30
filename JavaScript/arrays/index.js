const obj={
   a:1,
   b:2,
   c:3
}
//print as [[a,1],[b,2],[c,3]]
 const result= Object.keys(obj).map(key=>[key,obj[key]])
 console.log(result);
 const objResult= Object.fromEntries(result)
 console.log(objResult);


 