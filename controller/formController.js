const Form = require('../models/formModels')

const getForms = async(req,res)=>{

    const data = await Form.find()

    res.status(200).json(data)

}


const PostForm = async(req,res)=>{

    const {name , age}=req.body

    if(!name || !age){
        res.send("All Fields are required")
    }

    const PostData = await Form.create({
        name,
        age,
    })

    res.status(200).json(PostData)
}

const PutForms = async(req,res)=>{

   

    const updatedData = await Form.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}  
    )

    res.status(200).json(updatedData)
}

module.exports={getForms , PostForm , PutForms}