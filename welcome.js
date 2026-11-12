document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("welcomeForm");
    const nameInput = document.getElementById("visitorName");

    if (!form || !nameInput) return;

    form.addEventListener("submit", (event) => {
        const visitorName = nameInput.value.trim();

        if (visitorName.length < 2) {
            event.preventDefault();
            nameInput.focus();
            return;
        }

        localStorage.setItem("timeTravelerName", visitorName);
    });
});