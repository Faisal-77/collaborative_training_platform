import { Schema ,model , models } from "mongoose";

const schema_Training_entity = new Schema({

    name : {
        type : String
    },
    field : {
        type : String
    },
    email : {
        type :String 
    },
    phone_number : {
        type : Number
    },
    user_name :{
        type: String,
    },
    password : {
        type : String ,
        select : false
    },
    state : {
        type : Boolean ,
    }
},
    {timestamps : true}
)

const Training = models.Training_entities || model('Training_entities', schema_Training_entity);

export default Training;