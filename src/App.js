import React, { useState } from "react";

function App() {
  const [jobTitle, setJobTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_GEMINI_KEY;
  const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setQuestions([]);

    try {
      const prompt = `Generate 3 thoughtful interview questions for a ${jobTitle}. 
                      Focus on role-specific skills, mindset, and problem-solving.`;

      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;

      const parsedQuestions = text.split("\n").filter((q) => q.trim() !== "");
      setQuestions(parsedQuestions);
    } catch (err) {
      setError("Error fetching questions. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "40px" }}>
      <h2>AI-Powered Interview Question Generator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jobTitle">Enter Job Title:</label><br />
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Customer Success Manager"
          required
          style={{ padding: "8px", marginTop: "10px" }}
        />
        <br />
        <button type="submit" style={{ padding: "8px", marginTop: "10px" }}>
          Generate Questions
        </button>
      </form>

      {loading && <p style={{ color: "gray", fontStyle: "italic" }}>Loading interview questions...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {questions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Suggested Interview Questions:</h3>
          <ul>
            {questions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
