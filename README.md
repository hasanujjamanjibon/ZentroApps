# 📱 HeroIO – Modern App Store Web App

![React](https://img.shields.io/badge/React-18-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38B2AC)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow)
![License](https://img.shields.io/badge/License-Educational-green)

---

## 🌐 Live Links

🔗 **Live Site:** https://heroui24.netlify.app/ 
💻 **GitHub Repository:** https://github.com/hasanujjamanjibon/hero-io.git
👤 **GitHub Profile:** https://github.com/hasanujjamanjibon/

---

## 📸 Screenshots

### 🏠 Home Page

![Home](/screenshots/home.png)

### 📱 All Apps Page

![All Apps](/screenshots/apps.png)

### 📊 App Details Page

![Details](./screenshots/details.png)

### 📦 Installation Page

![Installation](/screenshots/installation.png)

---

## 📖 Description

HeroIO is a modern and responsive App Store web application where users can explore apps, search in real-time, view detailed analytics, and manage installed applications using localStorage.

This project demonstrates real-world frontend development concepts including routing, dynamic UI rendering, state management, and data visualization.

---

## ✨ Core Features

### 🧭 Layout & Navigation

- Responsive header with active route indication
- Navigation: Home, Apps, Installation
- Logo redirects to home page
- Custom footer design

### 🏠 Home Page

- Banner with heading, description & CTA buttons
- App Store & Play Store redirect buttons
- Top 8 apps section
- “Show All” button navigation

### 📱 All Apps Page

- 🔍 Live search (case-insensitive)
- 📊 Total apps count display
- ❌ “No App Found” message
- 🔽 Sort by downloads (High → Low / Low → High)

### 📊 App Details Page

- App image and full details
- ⭐ Ratings, reviews, downloads
- 📈 Review chart using Recharts
- ✅ Install button with dynamic state
- 🍞 Success toast notification

### 📦 Installation System

- Save installed apps in localStorage
- Prevent duplicate installs
- My Installation page
- ❌ Uninstall functionality with toast

### ⚙️ Additional Features

- ⏳ Loading animation (navigation & search)
- 🚫 Custom 404 error page
- 🔄 Reload-safe routing
- 📱 Fully responsive design

---

## 🧱 Tech Stack

- ⚛️ React.js
- 🎨 Tailwind CSS
- 📊 Recharts
- 🔥 React Router DOM
- 💾 LocalStorage API
- 🍞 React Hot Toast / React Toastify

---

## 📂 Folder Structure

```bash
src/
 ├── components/
 ├── pages/
 ├── routes/
 ├── data/
 ├── hooks/
 └── utils/
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/hasanujjamanjibon/hero-io.git

# Navigate to project folder
cd hero-io

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🚀 Deployment

This project is deployed on **Netlify**.

⚠️ Important:

- All routes are properly configured
- Reloading any route does not show 404 error

---

## 🔮 Future Improvements

- 🔐 User authentication system
- ⭐ Favorite apps feature
- 🌙 Dark mode support
- 📈 Trending apps algorithm

---

## 🙌 Contribution

Feel free to fork this project and contribute. Improvements are always welcome!

---

## 👨‍💻 Author

**Hasan Ujjaman Jibon**
GitHub: https://github.com/hasanujjamanjibon/

---

## 📜 License

This project is created for educational and assignment purposes.
