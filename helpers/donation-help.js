var db=require('../config/connection')
module.exports={
    addDonate:(donateData,Callback)=>{
        console.log(donateData);
    
    db.get().collection('donateData').insertOne(donateData).then((data)=>{
        Callback(true)
    })
}
}