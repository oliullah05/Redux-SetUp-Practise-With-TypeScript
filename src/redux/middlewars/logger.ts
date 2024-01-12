/* eslint-disable @typescript-eslint/no-explicit-any */
export  const customLogger =(state:any)=>(next:any)=>(action:any)=>{
console.log("Prev State",state.getState()); 
console.log("Action",action); 
next(action)
console.log("Next State",state.getState()); 

}