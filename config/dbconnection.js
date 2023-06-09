const mongoose = require('mongoose')

const dbConnection = async()=>{
    try{
        const connect = await mongoose.connect(process.env.URL)
        console.log(connect.connection.host)
    }catch(e){
        console.log(e)
    }
}


module.exports=dbConnection