import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
    {
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
},
{
    timestamps:true,
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;