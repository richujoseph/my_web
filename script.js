// Show or hide the scroll-to-top button
window.onscroll = function() {
    const scrollTopButton = document.getElementById("scroll-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

// Scroll to top functionality
document.getElementById("scroll-top").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
