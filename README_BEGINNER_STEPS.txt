# Minhah Saleem Archive™ Website

This is a ready-to-run static portfolio website.

“Static” means there is no complicated setup, no login, no backend, and no server required for testing. You can open it directly in your browser.

## What is inside this folder?

- `index.html`: the main webpage structure and text.
- `styles.css`: the design, colors, layout, spacing, and mobile view.
- `script.js`: tiny interactions like mobile menu, theme toggle, fan-note generator, and cursor glow.
- `assets/Minhah-Saleem-CV.pdf`: your downloadable CV file.
- `assets/profile-photo.svg`: a placeholder profile image.

# How to run it on your laptop

## Easiest method

1. Unzip the folder.
2. Open the folder named `minhah_fan_portfolio`.
3. Double-click `index.html`.
4. It should open in Chrome, Edge, or your default browser.

That is it. The website is running locally on your computer.

# How to add your profile picture

1. Open the `assets` folder.
2. Add your profile picture there.
3. Rename your picture to `profile-photo.jpg`.
4. Open `index.html` using Notepad.
5. Find this line:

   <img src="assets/profile-photo.svg" alt="Profile placeholder for Minhah Saleem" class="profile-photo" />

6. Change it to:

   <img src="assets/profile-photo.jpg" alt="Profile photo of Minhah Saleem" class="profile-photo" />

7. Save the file.
8. Refresh the browser.

If your photo is PNG, use `profile-photo.png` instead and update the line accordingly.

# How to update your CV

1. Export your latest CV as PDF.
2. Rename it exactly: `Minhah-Saleem-CV.pdf`
3. Put it inside the `assets` folder.
4. Replace the old file.

The Download CV button will automatically download the new CV.

Important: Since your CV may contain your phone number, consider making a public version before uploading the website online.

# How to edit text

1. Right-click `index.html`.
2. Choose “Open with” → Notepad.
3. Use Ctrl + F to search for the sentence you want to change.
4. Edit it.
5. Save.
6. Refresh the browser.

# How to edit colors/design

1. Open `styles.css` in Notepad.
2. At the top, look for color variables like:

   --pink: #ff4fd8;
   --purple: #7c5cff;
   --blue: #00d4ff;

3. Change the color codes.
4. Save and refresh.

# How to put it online using GitHub Pages

1. Go to GitHub.
2. Click the `+` button at the top right.
3. Click `New repository`.
4. Name it `minhah-portfolio`.
5. Make it Public.
6. Click `Create repository`.
7. Open the new repository.
8. Click `Add file` → `Upload files`.
9. Upload:
   - `index.html`
   - `styles.css`
   - `script.js`
   - the full `assets` folder
10. Click `Commit changes`.
11. Go to `Settings`.
12. Click `Pages`.
13. Under Branch, choose `main`.
14. Choose `/root`.
15. Click `Save`.

After a minute or two, GitHub will show your website link.

It will look like:
https://yourusername.github.io/minhah-portfolio/

# Beginner translation

- HTML = page structure.
- CSS = design.
- JavaScript = small interactivity.
- Assets = files like your CV and profile photo.

Built like a fan page. Secretly a portfolio. Exactly the point.
