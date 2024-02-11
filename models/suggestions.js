import { Schema ,model , models } from "mongoose";

const schema_suggestions = new Schema ({

    name : {
        type : String 
    },
    phone_number : {
        type : String
    },
    email : {
        type : String
    },
    content :  {
        type : String
    }
},
    {timestamps : true}
)

const Suggestions = models.suggestions || model('suggestions' , schema_suggestions)
export default  Suggestions