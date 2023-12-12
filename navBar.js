// Navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("navBar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });
});
