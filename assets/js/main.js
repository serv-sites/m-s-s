document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    // gespeichertes Theme laden
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
        document.documentElement.classList.add("light");
        if (toggle) toggle.textContent = "☀️ Light‑Mode an";
    } else {
        if (toggle) toggle.textContent = "🌙 Light‑Mode aus";
    }

    if (!toggle) return;

    toggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("light");

        if (document.documentElement.classList.contains("light")) {
            localStorage.setItem("theme", "light");
            toggle.textContent = "☀️ Light‑Mode an";
        } else {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "🌙 Light‑Mode aus";
        }
    });
});
