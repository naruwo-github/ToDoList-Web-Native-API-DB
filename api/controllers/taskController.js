// CRUD(Create Read Update Delete)を満たす関数を定義

const mongoose = require("mongoose"),
    Task = mongoose.model("Task");

// C: 新たなタスクの作成
exports.create_task = function(req, res) {
    const new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err) res.send(err);
        res.json(task);
    });
};

// R: 全タスクの取得
exports.all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err) res.send(err);
        res.json(task);
    });
};

// R: 特定のタスクの取得
exports.load_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if (err) res.send(err);
        res.json(task);
    });
};

// U: 特定のタスクの更新
exports.update_task = function(req, res) {
    Task.findOneAndUpdate(
        { _id: req.params.taskId },
        req.body,
        { new: true },
        function(err, task) {
            if (err) res.send(err);
            res.json(task);
        }
    );
};

// D: 特定のタスクの削除
exports.delete_task = function(req, res) {
    Task.remove(
        {
            _id: req.params.taskId
        },
        function(err, task) {
            if (err) res.send(err);
            res.json({ message: "Task successfully deleted" });
        }
    );
};