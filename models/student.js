import { Schema ,model , models } from "mongoose";

const StudentSchema = new Schema({
    user_name: {
        type : Number , 
        required : true,
    },
    email :{
        type :String ,
        required: true,
    },
    phoneNumber: {
        type: Number ,
        required: true,
        match: [/^05/, "Phone number should start with '05'"],
      },
    // full_name : {
    //     type : String ,
        
    //     minLength: [8 , "full name should be atleast 8 chracter long"] , 
    //     maxLength: [30 , "user name should be less then 30 chracter"]
    // },
    password: {
        type: String,
        minLength: [6, "Password must be at least 6 characters"],
    }
    //     select : false
    // },
    // department :{
    //     required : true ,
    //     enum :['الحاسب وتقنية المعلومات','التقنية الأدارية', 'التقنية الألكترونية','التقنية الكهربائية','التقنية الخاصة','التقنية الميكانيكية']
    // },
    // mejor :{
    //     required : true ,
    //     type :String ,
    // },
    },
    {timestamps : true}
)

const Student = models.student || model("student" , StudentSchema);

export default Student;