const mongoose=require('mongoose');

const studentSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        department:{
            type:String,
            required:true
        }
    },
    {
        Timestamp:true
    }
)
const Student =mongoose.model("Student",studentSchema);

module.exports=Student;