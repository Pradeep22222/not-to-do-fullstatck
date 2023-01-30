import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        maxlength: 100,
    },
    hr: {
        type: Number,
        required: true,
        max: 168,
    },
    type:{
        type: String,
        default:"entry"
    }
}, { timestamps: true })

mongoose.model("tasks",taskSchema)