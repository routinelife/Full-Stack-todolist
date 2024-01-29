import $ from 'jquery';

import {
    indexTasks,
    postTask,
    deleteTask,
    markTaskComplete,
} from "./requests.js";

function getTasks() {
    indexTasks(function (response) {
        var htmlString = response.tasks.map(function(task) {
            return '<div class="col-12 mb-3 p-2 border rounded task bg-light">' + task.content + '<button class="delete" data-id="' + task.id + '">Delete</button><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '>';
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
            $("#new-task-content").val('')
            
        });
    });

    $(document).on('click', '.delete', function() {
        deleteTask($(this).data('id'))
        getTasks();
      });


      $(document).on('change', '.mark-complete', function () {
        if (this.checked) {
          markTaskComplete($(this).data('id'));
        } else {
          markTaskActive($(this).data('id'));
        }
      })


});
