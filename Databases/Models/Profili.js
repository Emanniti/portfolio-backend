import mongoose from "mongoose";
const { Schema } = mongoose;

const profilis = new Schema({
    username: String,
    password: String,
});

export const Profili = mongoose.model('Profili', profilis);


