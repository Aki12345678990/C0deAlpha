const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    exercises: [{ type: String }], // Example: ["push-ups", "squats"]
    caloriesBurned: Number,
});

module.exports = mongoose.model('Workout', WorkoutSchema);
