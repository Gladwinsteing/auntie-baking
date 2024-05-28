document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;
        if (!email || !message) {
            alert("Please fill out all fields.");
            event.preventDefault();
        }
    });
});
