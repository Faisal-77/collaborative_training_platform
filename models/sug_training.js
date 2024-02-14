import { Schema ,model , models } from "mongoose";

const sugg_training = new Schema ({
    name : {
        type : String 
    },
    
    sugg :  {
        type : String
    }
},
    {timestamps : true}
)

const training_sugg = models.sug_training || model('sug_training' , sugg_training)
export default  training_sugg