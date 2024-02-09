import { Schema ,model , models } from "mongoose";

const schema_type = new Schema ({

    user_name : {
        type : String 
    },
    type : {
        type : String 
    }
},
    {timestamps : true}
)

const Type = models.TypeUser || model('TypeUser' , schema_type)
export default  Type