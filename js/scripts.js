function ToDo(chore) {
  this.chore = chore;
}

$(function() {
  $("#to-do").submit(function(event) {
    event.preventDefault();

    var inputtedChore = $("#new-chore").val();

    var newToDo = new ToDo (inputtedChore);

    $("#chores").append("<li><span class='chore'>" + newToDo.chore + "</span></li>");

    $("#new-chore").val("");

    $(".chore").click(function() {
      $(this).remove();
    });
  });
});
