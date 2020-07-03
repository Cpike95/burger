// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-me").on("click", function(event) {
      const id = $(this).data("id");

      const devouredState = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      const newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured:0
      };
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(() => {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".clear").on("click", function(event) {
      const id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted all");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});