import { Schema ,model , models } from "mongoose";

const department_manager_schema = new Schema({
    full_name: {
        type : String , 
    },
    email :{
        type :String ,
    },
    department :{
        type :String,
    },
    user_name: {
        type : String , 
    },
    phoneNumber: {
        type: Number ,
      },
    },
    {timestamps : true}
)

const department_manager = models.department_manager || model("department_manager" , department_manager_schema);

export default department_manager;