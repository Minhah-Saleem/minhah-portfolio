// script.js
const aboutContent = document.getElementById('aboutContent');
const editBtn = document.getElementById('editAboutBtn');
const saveBtn = document.getElementById('saveAboutBtn');
const resetBtn = document.getElementById('resetAboutBtn');

const STORAGE_KEY = 'minhah_about_v1';

// default (copied from index.html initial content)
const DEFAULT_ABOUT = aboutContent.innerHTML.trim();

// initialize from localStorage if present
function loadAbout() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    aboutContent.innerHTML = saved;
  } else {
    aboutContent.innerHTML = DEFAULT_ABOUT;
  }
  aboutContent.contentEditable = false;
  saveBtn.disabled = true;
}
loadAbout();

// toggle edit mode
editBtn.addEventListener('click', () => {
  aboutContent.contentEditable = true;
  aboutContent.focus();
  saveBtn.disabled = false;
});

// save to localStorage
saveBtn.addEventListener('click', () => {
  aboutContent.contentEditable = false;
  const html = aboutContent.innerHTML.trim();
  localStorage.setItem(STORAGE_KEY, html);
  saveBtn.disabled = true;
  // small visual confirm
  saveBtn.textContent = 'Saved ✓';
  setTimeout(()=> saveBtn.textContent = 'Save About', 1200);
});

// reset to default (clears stored)
resetBtn.addEventListener('click', () => {
  if (confirm('Reset About section to the default from the site?')) {
    localStorage.removeItem(STORAGE_KEY);
    aboutContent.innerHTML = DEFAULT_ABOUT;
    aboutContent.contentEditable = false;
    saveBtn.disabled = true;
  }
});

// optional: Warn user if leaving with unsaved edits
window.addEventListener('beforeunload', (e) => {
  if (aboutContent.isContentEditable && !saveBtn.disabled) {
    e.returnValue = 'You have unsaved changes in About. Save them?';
  }
});
