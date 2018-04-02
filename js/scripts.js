function ToDo(chore) {
  this.chore = chore;
}

function scrollDiv(dir, px) {
  var scroller = document.getElementById('scroller');
  if (dir == 'l') {
    scroller.scrollLeft -= px;
  }
  else if (dir == 'r') {
    scroller.scrollLeft += px;
  }
}

$(function() {
  $("#to-do").submit(function(event) {
    event.preventDefault();

    var inputtedChore = $("#new-chore").val();

    var newToDo = new ToDo (inputtedChore);

    $("#chores").append("<li><span class='chore'>" + newToDo.chore + "</span></li>");

    $("#new-chore").val("");

    $(".chore").click(function() {
      var count = [];
      $(this).remove()
      $("body").on("DOMNodeRemoved", ".chore", function() {
        count.push(1);
        if (count[2] === 1) {
          $("#game").show();
          console.log(count);
        }
      });
    });
  });
});
