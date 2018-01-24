// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        console.log("This is the ID: " + id)
        var devoured = $(this).data("eat");
        console.log("This is the devoured: " + devoured)
    
        var newDevouredState = {
            devoured: devoured
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed to Devoured", newDevouredState);
                location.reload();
            }
        );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
            name: $("#bur").val().trim(),
            devoured: false
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
    });
});
  