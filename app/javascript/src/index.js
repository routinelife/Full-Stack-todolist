import $ from 'jquery';

import {
    indexTasks,
    postTask,
} from "./requests.js";

function getTasks() {
    indexTasks(function (response) {
        var htmlString = response.tasks.map(function(task) {
            return "<div class='col-12 mb-3 p-2 border rounded task bg-light' data-id='" + task.id + "'>\
            " + task.content + "\
            </div>";
        });
        $("#tasks").html(htmlString);
    });
}

$(document).ready(function() {
    getTasks();

    $("#create-task").on("submit", function(event) {
        event.preventDefault();
        var content = $("#new-task-content").val();
        postTask(content, function(response) {
            getTasks();
        });
    });
});
