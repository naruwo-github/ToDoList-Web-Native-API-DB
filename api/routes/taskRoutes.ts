// クライアントからリクエストを受けた際のアプリケーションの振る舞いを定義

module.exports = function(app) {
    const taskList = require('../controllers/taskController');

    app.route('/tasks')
        .get(taskList.all_tasks)
        .post(taskList.create_task);

    app.route('/tasks/:taskId')
        .get(taskList.load_task)
        .put(taskList.update_task)
        .delete(taskList.delete_task);
};