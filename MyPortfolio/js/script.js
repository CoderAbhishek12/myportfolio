document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll("nav a");
  
    // Add a click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        // Get the element with the corresponding ID
        const element = document.querySelector(this.hash);
  
        // Scroll to the element
        element.scrollIntoView({ behavior: "smooth" });
      });
    });
  });