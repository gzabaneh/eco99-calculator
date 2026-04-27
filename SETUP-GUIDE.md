# Setup Guide — Eco-indicator 99 LCA Calculator
## No coding experience needed. Follow these steps in order.

---

## What you'll end up with

A free website you can open in any browser, at a URL like:
`https://YOUR-GITHUB-USERNAME.github.io/eco99-calculator/`

You can create LCA scenarios, fill in materials, see scores and charts, and compare designs — all in real time, shared across everyone in the class.

---

## Step 1 — Create a free Firebase account (for shared data)

Firebase is Google's free service for storing data in real time. This is what lets multiple students see each other's work.

1. Go to **https://console.firebase.google.com**
2. Sign in with a Google account (or create one).
3. Click **"Create a project"**
4. Name it something like `eco99-calculator` → click Continue → Continue → Create project
5. Once the project is ready, click **"Continue"**

**Create a database:**
6. In the left sidebar, click **"Build"** → **"Realtime Database"**
7. Click **"Create Database"**
8. Choose a location (e.g. United States) → click Next
9. Select **"Start in test mode"** → click Enable

> Test mode means anyone with the link can read and write. This is fine for a classroom. You can lock it down later if needed.

**Get your config keys:**
10. Click the gear icon ⚙️ near "Project Overview" in the top-left → **"Project settings"**
11. Scroll down to **"Your apps"** — if nothing is there, click the **`</>`** (web) icon to register a web app
12. Give it any nickname (e.g. "eco99 web") → click "Register app"
13. You'll see a block of code like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "eco99-calculator.firebaseapp.com",
  databaseURL: "https://eco99-calculator-default-rtdb.firebaseio.com",
  projectId: "eco99-calculator",
  storageBucket: "eco99-calculator.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123..."
};
```

14. **Copy all of that.** You'll need it in Step 3.

---

## Step 2 — Create a free GitHub account and repository

GitHub is where the app files will live and be served as a website.

1. Go to **https://github.com** → click **Sign up** (it's free)
2. Create an account with any username
3. Once logged in, click the **"+"** button in the top right → **"New repository"**
4. Name it: `eco99-calculator`
5. Set it to **Public**
6. Check **"Add a README file"**
7. Click **"Create repository"**

---

## Step 3 — Upload the app files

1. In your new GitHub repository, click **"Add file"** → **"Upload files"**
2. Upload all three files from the `Des 537` folder on your Desktop:
   - `index.html`
   - `eco99-data.js`
   - `SETUP-GUIDE.md`
3. Click **"Commit changes"**

**Now paste in your Firebase keys:**

4. In GitHub, click on `index.html` to open it
5. Click the **pencil icon** ✏️ (top right of the file) to edit it
6. Press **Ctrl+F** (or Cmd+F on Mac) to search — type: `PASTE YOUR FIREBASE CONFIG HERE`
7. You'll find this section:

```javascript
const FIREBASE_CONFIG = {
  // PASTE YOUR FIREBASE CONFIG HERE
};
```

8. Replace the comment with the keys you copied from Firebase in Step 1, like this:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "eco99-calculator.firebaseapp.com",
  databaseURL: "https://eco99-calculator-default-rtdb.firebaseio.com",
  projectId: "eco99-calculator",
  storageBucket: "eco99-calculator.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123..."
};
```

9. Click **"Commit changes"** → **"Commit changes"** again

---

## Step 4 — Turn on GitHub Pages (this makes it a real website)

1. In your repository, click **"Settings"** (top menu)
2. In the left sidebar, click **"Pages"**
3. Under "Branch", select **`main`** from the dropdown → click **Save**
4. Wait about 60 seconds, then refresh the page
5. You'll see a green banner: **"Your site is published at https://YOUR-USERNAME.github.io/eco99-calculator/"**

That URL is your app. Share it with your students!

---

## Step 5 — Share with students

Send students the GitHub Pages URL. That's all they need.

When they open it:
- They enter their name and click "Join"
- They click "New Scenario" to start an analysis
- Any scenario they create is automatically saved and visible to everyone in the class

---

## If something doesn't work

**Yellow banner still showing after adding Firebase keys:**
→ Make sure you saved the changes in GitHub (committed them). Also check that `databaseURL` is included in your config — it's easy to miss.

**Students can't see each other's work:**
→ In Firebase console, go to Realtime Database → Rules, and make sure it says `".read": true` and `".write": true` (test mode).

**Page shows a blank white screen:**
→ Open the browser's developer tools (press F12) → Console tab → look for a red error message and send it to whoever set this up.

---

## That's it!

The app works entirely in the browser — no software to install, no server to manage. Firebase handles the data automatically.

If you ever want to update the app (e.g. add features), just edit `index.html` in GitHub and commit — the website updates within a minute.
