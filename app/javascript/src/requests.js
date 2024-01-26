import $ from 'jquery';

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});

export var indexTasks = function (successCB, errorCB) {
    var request = {
        type: 'GET',
        url: 'api/tasks?api_key=1',
        success: successCB,
        error: errorCB
        }
    $.ajax(request);
};

indexTasks();


export var postTask = function (content, successCB, errorCB) {
   var request = {
     type: 'POST',
     url: 'api/tasks?api_key=1',

     data: {
       task: {
         content: content
       }
     },
    success: successCB,
    error: errorCB
    } 
   $.ajax(request);
 };

$('#create-task').on('submit',function (e) {
  e.preventDefault();
  postTask;
});

/*


$(document).ready(function(){
  var getAndDisplayAllTasks = function () {
    $.ajax({
      type: 'GET',
      url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1',
      dataType: 'json',
      success: function (response, textStatus) {
        $('#todo-list').empty();
        response.tasks.forEach (function (task) {
          $('#todo-list').append('<div class="row"><p class="col-xs-8">' + task.content + '</p><button class="delete" data-id="' + task.id + '">Delete</button><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '>');
        });
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  }
  

  var createTask = function () {
    $.ajax({
      type: 'POST',
      url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        task: {
          content: $('#new-task-content').val()
        }
      }),
      success: function (response, textStatus) {
        $('#new-task-content').val('');
        getAndDisplayAllTasks();
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });  
  }

  $('#create-task').on('submit', function (e) {
    e.preventDefault();
    createTask();
  });

  getAndDisplayAllTasks()

  var deleteTask = function (id) {
    $.ajax({
    type: 'DELETE',
    url: 'https://fewd-todolist-api.onrender.com/tasks/'+ id +'?api_key=1',
    success: function (response, textStatus) {
      getAndDisplayAllTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
  }
  $(document).on('click', '.delete', function() {
    deleteTask($(this).data('id'))
  });


  var markTaskComplete = function (id) {
    $.ajax({
      type: 'PUT',
        url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '/mark_complete?api_key=1',
        dataType: 'json',
        success: function (response, textStatus) {
          getAndDisplayAllTasks()
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  }

  var markTaskActive = function (id) {
    $.ajax({
      type: 'PUT',
        url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '/mark_active?api_key=1',
        dataType: 'json',
        success: function (response, textStatus) {
          getAndDisplayAllTasks()
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  }

  $(document).on('change', '.mark-complete', function () {
    if (this.checked) {
      markTaskComplete($(this).data('id'));
    } else {
      markTaskActive($(this).data('id'));
    }
  });
});

*/
