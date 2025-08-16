# 🛍️ Online Marketplace — Full‑Stack (Node.js -  Express -  MVC -  MongoDB -  Mapbox)

A full‑stack online marketplace built from scratch to practice real‑world architecture, clean code, and end‑to‑end delivery. Uses MVC on Node.js/Express, MongoDB for persistence, and Mapbox for rich, location‑aware features. 🚀

## ✨ Why this project
- 🧩 Real product surface: listings, auth, maps, search, reviews, moderation.  
- 🧱 Scalable structure: strict MVC, reusable middlewares, clear service boundaries.  
- 🧭 Practical integrations: Mapbox geocoding/tiles, secure sessions, robust validation.  

## 🧰 Tech stack
- 🎨 Frontend: HTML, CSS, Vanilla JavaScript  
- 🖥️ Backend: Node.js, Express.js (MVC)  
- 🗄️ Database: MongoDB (Mongoose)  
- 🗺️ Maps & Geo: Mapbox (geocoding + interactive maps)  
- 🔐 Auth & Security: Sessions, bcrypt, validation, helmet, rate limiting  
- ☁️ Deployment: Render  

## 🔑 Core features
- 👤 Authentication: sign up, login, logout, session‑based auth, role guards  
- ✏️ Listings CRUD: create/read/update/delete with title, price, category, images, location  
- 🗺️ Interactive map: geocoded locations, clustered markers, popups  
- 🔎 Search & filters: keyword, category, price range, location radius  
- ⭐ Reviews & ratings: add/edit/delete with permissions  
- 🧯 Robust errors: centralized error handling, friendly error pages  
- ⚙️ Production configs: .env, security headers, compression, logging  

## 🧱 Architecture
- 📁 models/ — Mongoose schemas and DB helpers  
- 🧑✈️ controllers/ — thin route handlers orchestrating use cases  
- 🧠 services/ — business logic (maps, listings, reviews, auth)  
- 🛣️ routes/ — modular routers and versioning  
- 🧰 middlewares/ — auth, validation, error, rate limiting  
- 🖼️ views/ — EJS templates, partials, layouts  
- 🧵 public/ — static assets (CSS, JS, images)  

## 🚀 Getting started
1) ⬇️ Clone & install  
- git clone https://github.com/UJJWAL2282/MAJORPROJECT.git  
- cd MAJORPROJECT  
- npm install  

2) 🔐 Environment variables (.env)  
- MONGODB_URI=mongodb+srv://…  
- SESSION_SECRET=your_secret  
- MAPBOX_TOKEN=your_mapbox_token  
- NODE_ENV=development  

3) ▶️ Run locally  
- npm run dev  # nodemon  
- npm start    # production  
- Open: http://localhost:8080 (or the port shown in console)  

## 🧾 Data model (high level)
- 👤 User: name, email, hash, roles  
- 📦 Listing: title, description, price, category, images, location, geometry  
- 📝 Review: rating, comment, author, listingRef  

## 🛡️ Security & ⚡ Performance
- 🪖 Helmet, input sanitization, server‑side validation  
- 🚦 Rate limits on auth/write routes  
- 🧭 Mongoose indexes for frequent queries  
- 🗜️ Minified static assets + gzip/deflate  
- 🧩 Centralized error handling with consistent responses  

## 🧪 Testing (suggested)
- 🧰 Jest + Supertest for routes/controllers  
- 🧪 In‑memory MongoDB for unit/integration tests  
- 🧱 Factory data + coverage thresholds  

## 🗺️ Roadmap
- 🖼️ Cloud image uploads (Cloudinary) with transformations  
- 🔁 Pagination + infinite scroll on listings  
- ✉️ Email verification & password reset  
- 📊 Admin dashboard (moderation, analytics)  
- 🧮 Cache geocode results & map tiles  
- 🧠 Advanced search (text index, facets)  

## 🤝 Contributing
- Fork → feature branch → PR with clear description and screenshots  
- Follow commit convention: type(scope): message  
- Add tests for new features and bug fixes  

## 📄 License
- MIT  

## 🌐 Live demo
- https://online-marketplace-vlwj.onrender.com  

Built to learn fast, structure clearly, and ship features that feel real. Feedback and contributions are welcome! 🙌
