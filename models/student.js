import { Schema ,model , models } from "mongoose";

const StudentSchema = new Schema({
    user_name: {
        type : String , 
    },
    email :{
        type :String ,
    },
    phoneNumber: {
        type: Number ,
       
        match: [/^05/, "Phone number should start with '05'"],
      },
    full_name : {
        type : String ,
    },
    password: {
        type: String,
        minLength: [6, "Password must be at least 6 characters"],
    },
    department :{
        type :String,
    },
    major :{
        type :String ,
    },
    },
    {timestamps : true}
)

const Student = models.student || model("student" , StudentSchema);

export default Student;