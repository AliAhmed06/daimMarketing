import mongoose from "mongoose";

const dmEventSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please Provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Provide a password"],        
    }
}, )

const DmEvent = mongoose.models.dm_events || mongoose.model("dm_events", dmEventSchema);

export default DmEvent;
