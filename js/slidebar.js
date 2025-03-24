document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const navLinks = document.querySelector(".nav-links");
    const sidebarLinks = sidebar.querySelectorAll("a");
    let isMobileView = window.innerWidth <= 768; // Track screen size

    function moveSidebarToNavbar() {
        if (window.innerWidth <= 768 && !isMobileView) {
            sidebarLinks.forEach(link => navLinks.appendChild(link));
            isMobileView = true;
        } else if (window.innerWidth > 768 && isMobileView) {
            sidebarLinks.forEach(link => sidebar.appendChild(link));
            isMobileView = false;
        }
    }

    window.addEventListener("resize", moveSidebarToNavbar);
    moveSidebarToNavbar(); // Call once on page load
});
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementById("toggleBtn");

    // Toggle sidebar visibility
    sidebar.classList.toggle("hidden");

    // Update button text
    if (sidebar.classList.contains("hidden")) {
        toggleBtn.innerText = "☰ Open Sidebar"; 
        toggleBtn.style.left="355px";
    } else {
        toggleBtn.innerText = "× Close Sidebar";
        toggleBtn.style.left="200px"; 
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove("active"));
            // Add active class to clicked link
            this.classList.add("active");
        });
    });
});
