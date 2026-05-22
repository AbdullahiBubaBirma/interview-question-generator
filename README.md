# AI-Powered Interview Question Generator

A simple React application that generates 3 thoughtful interview questions for any given job title using the **Google Gemini API**.  
This project was built as part of a technical screen for a Founding Engineer role.

---

## 🚀 Features
- Enter any job title (e.g., "Customer Success Manager").
- Calls the Gemini `gemini-pro` model to generate tailored interview questions.
- Clean, minimal UI with loading and error states.
- Secure API key handling via environment variables.

---

## 🛠️ Tech Stack
- React (Create React App)
- Google Gemini API (`gemini-pro` model)
- Hosted on Netlify/Vercel

---

## 📂 Project Structure
interview-question-generator/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── styles.css   (optional)
├── package.json
├── README.md


---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd interview-question-generator

2. Install dependencies:

npm install

3. Create a .env file in the project root:

REACT_APP_GEMINI_KEY=your_api_key_here

4. Start the development server:

npm start

