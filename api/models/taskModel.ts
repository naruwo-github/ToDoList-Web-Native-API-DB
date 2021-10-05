// DB関連: スキーマの定義

const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
    name: {
        type: String,
        required: "Enter the name of the task"
    },
    description: {
        type: String,
        default: "I should do this in order to xxx."
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model("Task", TaskSchema);