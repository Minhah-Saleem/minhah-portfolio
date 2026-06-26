const html = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const fanNoteButton = document.querySelector("#fanNoteButton");
const fanNote = document.querySelector("#fanNote");
const cursorGlow = document.querySelector("#cursorGlow");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) html.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "night" ? "" : "night";
  if (next) {
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  } else {
    html.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }
});

menuButton.addEventListener("click", () => nav.classList.toggle("open"));

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const notes = [
  "Not a main character by choice. Just by plot density.",
  "Collects degrees, projects, papers, and craft supplies.",
  "Gentle energy. Dangerous curiosity.",
  "Rejection tried. She reapplied.",
  "Somehow turns side quests into canon events.",
  "Current status: still updating, do not close tab.",
  "Professional skill: AI. Personal skill: restarting the plot."
];

fanNoteButton.addEventListener("click", () => {
  fanNote.textContent = notes[Math.floor(Math.random() * notes.length)];
});

window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
