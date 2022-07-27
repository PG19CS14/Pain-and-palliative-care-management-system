var db=require('../config/connection')
module.exports={
    addQuery:(queryData,Callback)=>{
        console.log(queryData);
    
    db.get().collection('queryData').insertOne(queryData).then((data)=>{
        Callback(true)
    })
}
}