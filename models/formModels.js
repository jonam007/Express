const mongoose = require('mongoose')

const FormSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    },
    age:{
        type:Number,
        required:[true,"age is required"]
    },

},
{timestamps:true}
)

module.exports=mongoose.model("Form",FormSchema)