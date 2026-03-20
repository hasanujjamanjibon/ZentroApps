

# 🐣 Basic Requirements

- Make the Application Responsive for All the Devices

- Give a meaning full name to your application
- Make Sure on Production Application is error Free
- Add a Readme.md with App Name , Description & Technologies


#### Top Apps Section

- Clicking on a card should navigate the user to the App Details page.


## 3.📱 All Apps Page




  - filters apps by title as the user types.
  - Search will be case-insensitive
  - If no app matches, display a “No App Found” message.

#### App Section


- Each app card should include:
  - App title
  - Image
  - Download count
  - Average rating
- Clicking on an app card should navigate to the App Details page.

---

## 4.📊 App Details Page

#### App Information

- Show app image on the left.
- Display app details such as title, rating, downloads, reviews.
- Include an `Install button`:
  - When clicked, it becomes disabled and the text changes to `Installed`.
  - Show a Success Toast after App installed

#### App Review Chart

- Implement a responsive chart using the **Recharts** library.
- Visualize the app’s review data as shown in the Figma design.

#### App Description

- Show the app details in description section as per Figma layout.

---

## 5. Error Page & Others



- Show a loading animation during: `Challenge Part`  

  - Page navigation. 
  - Search operation.

---

# Challenge Requirement

### LocalStorage Features

#### App Installation

- When the “Install” button is clicked:
  - Save the app to localStorage.
  - If the app is already installed, show a disabled button with the text `Installed`.

#### My Installation Page

- Create a page named “My Installation” following the Figma design.
- Display all installed apps as cards.
- Include an Uninstall button:
  - Clicking it
    - removes the app from both the UI and localStorage.
    - Show an Toast with some relevant message

---

### Sort by Downloads

- Implement a dropdown for sorting apps by download count.
- The dropdown must include:
  - **High-Low:** Sort apps in descending order by downloads.
  - **Low-High:** Sort apps in ascending order by downloads.

---

### Loading Animation

- Show a loading animation during: 
  - Page navigation. 
  - Search operation

---

## 🚀 Deployment

- Deploy the project to Cloudflare / Netlify / Vercel.
- Reloading from any route must work correctly without showing a 404 error.

---

## 🔗 Submission Guideline

- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE


### 📅 Deadline For 60 marks: 26 March , 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 27 March , 2026 (11:59 pm⏱️)

### 📅 Deadline For 30 marks: Since this is the final assignment, there will be no 30-mark deadline. You must submit it within the 50-mark deadline to qualify for the reward.


