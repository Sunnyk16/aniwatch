import { model, Schema } from "mongoose";
const reviewSchema = new Schema({
    name:String,
    e_mail:String, 
    experience:String,
    suggestion:String
})


const Review = model("Review", reviewSchema);
export default Review;