$(function() {
    $(".eatBurger").on("click", function(event) {
        let id = $(this).data("id");

        let eaten = {
            devoured: true
        }
        console.log("clicked");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(function() {
            console.log("Ate the burger");
            location.reload();
        })
    })
})