const dbConnect=require("./mongodb");
// --------------------------------------------get data with promises-----------------------------
// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })

// ============================================get data with asyn await=============================

const main=async ()=>{
    let connect=await dbConnect();
    let data=await connect.find({}).toArray();
    console.log(data);
    
}

main();