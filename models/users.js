import { Schema ,model , models } from "mongoose";

const schema_user = new Schema ({

    user_name : {
        type : String 
    },
    password : {
        type : String
    },
    type : {
        type : String
    },
    foren_key :  {
        type : String
    }
},
    {timestamps : true}
)

const User = models.User || model('User' , schema_user)
export default  User