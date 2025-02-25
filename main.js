// Ensure script runs only after navbar loads
document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .then(() => {
            const menuToggle = document.querySelector(".menu-toggle");
            const navLinks = document.getElementById("nav-links");
            menuToggle.addEventListener("click", function () {
                navLinks.classList.toggle("show");
            });
        });

    // Ensure script runs only after footer loads
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});
