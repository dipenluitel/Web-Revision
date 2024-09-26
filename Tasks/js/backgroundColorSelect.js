document.body.style.backgroundColor = "red"; // Set initial background color

document.getElementById("colorSelect").addEventListener("change", function() {
  document.body.style.backgroundColor = this.value;
});
