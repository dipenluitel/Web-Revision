// Get modal element
const modal = document.getElementById("myModal");

// Get open modal button
const openModalButton = document.getElementById("openModal");

// Get close button
const closeButton = document.querySelector(".close-button");

// Listen for open click
openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// Listen for close click
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Listen for click on modal background
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
