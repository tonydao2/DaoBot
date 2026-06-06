import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    userID: String,
    username: String,
    timeSpent: Number, // total time spent in channel in seconds
})

userSchema.statics.findByDiscordID = function(discordID) {
    return this.findOne({ userID: discordID})
}

export const User = mongoose.model('User', userSchema);