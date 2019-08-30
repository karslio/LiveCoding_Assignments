$("button").click(function(e) {
  e.preventDefault();
  let newAdd = $("#add").val();
  if (newAdd != "") {
    let newSpan1 = "<span class= name>" + newAdd + "</span>";
    let newSpan2 = '<span class="delete">delete</span>';
    let newList = $("<li>" + newSpan1 + newSpan2 + "</li>");
    $("ul").append(newList);
    $("#add").val("");
    $("#topic-list li:even").css("background-color", "#eeeeee");
  }
});


$(document).on("click", ".delete", function() {
  event.preventDefault();
  $(this)
    .closest("li")
    .remove();
});

$("#search-topics").on("keyup", function() {
  let value = $("input")
    .val()
    .toLowerCase();
  $("li").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
});

$('#hide').on('click', function () {
  $('ul').toggle();
  });

// $(document).on('mousemove', function (e) {
//   $('#footer').html(' y: '+e.clientY + " x: " +e.clientX);

// });
