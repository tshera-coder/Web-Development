# Web Development — check-in website

A 16-week course website. Each week students open the site, type their name and
answer 5 web development questions. Their name, score and time go into **your
Google Sheet**, and you can also see them on the Teacher page.

Files:

| File | What it is |
|---|---|
| `index.html` | Home page with all 16 weeks |
| `checkin.html` | Student check-in + this week's 5 questions |
| `teacher.html` | Roster of names for any week (needs your PIN) |
| `questions.js` | All 80 questions — edit here to change them |
| `config.js` | Course name, start date, and your Google Sheet link |
| `google-apps-script.gs` | Code that saves names into your Google Sheet |

A new week opens automatically every 7 days after `START_DATE` in `config.js`.

---

## Step 1 — Make the Google Sheet that collects names (about 5 minutes)

1. Go to <https://sheets.new> and name the sheet, e.g. "Web Dev Attendance".
2. Click **Extensions → Apps Script**.
3. Delete the code there and paste everything from `google-apps-script.gs`.
4. Change `TEACHER_PIN` at the top to your own PIN. Click **Save**.
5. Click **Deploy → New deployment**. Click the gear icon and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**, approve the permissions (choose your account →
   *Advanced* → *Go to project*), and **copy the Web app URL**
   (it ends in `/exec`).

## Step 2 — Connect the website to the sheet

Open `config.js` and paste the URL:

```js
API_URL: "https://script.google.com/macros/s/XXXXXXXX/exec"
```

Also set `START_DATE` to the first day of Week 1.

## Step 3 — Put the website online (free)

**Option A — Netlify (easiest):** go to <https://app.netlify.com/drop>, sign in
for free, and drag the whole website folder onto the page. You get a link like
`https://your-class.netlify.app` to give your students.

**Option B — GitHub Pages:** create a public repository, upload all the files,
then go to **Settings → Pages → Branch: main → Save**. Your site will be at
`https://your-username.github.io/repository-name/`.

## Step 4 — Get the students' names (only you can see them)

Students never see each other's names. The names are stored only in your
Google Sheet, and the Teacher page is not linked from the student pages.
Bookmark it yourself: `https://YOUR-SITE/teacher.html`. Even if a student
finds that address, it shows nothing without your PIN.

- Open your Google Sheet: every check-in is a row in the **Attendance** tab
  (time, week, topic, name, score).
- Or open the site's **Teacher** page, enter your PIN, pick a week and press
  **Copy names**.
- Want an email for each check-in? Set `EMAIL_EACH_CHECKIN = true` in the Apps
  Script, then **Deploy → Manage deployments → Edit → New version → Deploy**.

> If you change the Apps Script later, always redeploy with **New version**,
> or the website keeps using the old code.
