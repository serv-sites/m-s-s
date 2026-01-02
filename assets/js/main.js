document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    // gespeichertes Theme laden
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.documentElement.classList.add("light");
        toggle.textContent = "☀️ Light‑Mode an";
    } else {
        toggle.textContent = "🌙 Light‑Mode aus";
    }

    // Klick-Event
    toggle.addEventListener("click", () => {
        const isLight = document.documentElement.classList.toggle("light");

        if (isLight) {
            localStorage.setItem("theme", "light");
            toggle.textContent = "☀️ Light‑Mode an";
        } else {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "🌙 Light‑Mode aus";
        }
    });
});
