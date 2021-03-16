module.exports=()=>{
    return new Promise((resolve,reject)=>{
        console.log("hello from node dependency");
        resolve("hello from node dependency")
    })

}