📰 React News App

A fully responsive News Application built with React.js and Bootstrap, powered by **NewsAPI.org**. This project is ideal for beginners looking to explore API integration, React component structure, and dynamic UI updates in a real-world app.

 🚀 Features

* 🔥 Built using Vite + React
* 💅 Styled with Bootstrap (via CDN)
* 🧱 Clean and scalable component structure
* 📡 Fetches real-time news from NewsAPI
* 🧭 Category-based filtering (Tech, Business, Health, Sports, etc.)
* 🖼 Handles missing images or content with fallbacks
* 🧪 Uses React Hooks: `useState`, `useEffect`


📁 Project Structure

📦 news-app
├── public/
│   └── index.html     # Bootstrap CDN added here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Top navigation with category links
│   │   ├── NewsBoard.jsx    # Main component fetching and displaying news
│   │   └── NewsItem.jsx     # Card UI for each news article
│   ├── App.jsx
│   ├── main.jsx
├── .env                   # API key goes here (e.g., VITE_API_KEY=your_key)
└── package.json
```

🌐 Technologies Used

* React.js (Vite setup)
* Bootstrap 5
* JavaScript (ES6+)
* NewsAPI.org

📦 Future Enhancements

* 🔍 Add search functionality
* 🌙 Add dark/light theme toggle
* 🗓 Filter by date or source
* 🔄 Add pagination or "Load More" button


