import {model, Schema} from 'mongoose';


const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    message: String
})

const Contact = model("Contact", contactSchema);

export default Contact;