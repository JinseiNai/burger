$(function() {
    $(".eatBurger").on("click", function(event) {
        let id = $(this).data("id");

        let eaten = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(function() {
            console.log("Ate the burger");
            location.reload();
        })
    })

    $(".addBurger").on("click", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("[name=burger_name]").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    })
})