export const getTime=():string=>{
  const currentTime=new Date();
  return currentTime.toLocaleTimeString().slice(0, -3);
}
