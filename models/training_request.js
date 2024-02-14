import { Schema ,model , models } from "mongoose";



const training_requset = new Schema({
    name: {
        type : String , 
    },
    field :{
        type :String ,
    },
    number_of_student: {
        type: String ,
      },
    time : {
        type : String ,
    },
    hour: {
        type: String,
    },
    department :{
        type :String,
    },
    major :{
        type :String ,
    },
    state:{
        type:String
    },
    },
    {timestamps : true}
)

const Training_requset  = models.training_requset || model("training_requset" , training_requset);
export default Training_requset;