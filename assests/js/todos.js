// Check off the specific Todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//CLick on delete Todos
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation(); //Stops the bubbling problem
});

$("input[type = 'text']").keypress(function(event) {
    if (event.which === 13) {
        //Accepting the new todo text from the text
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
})