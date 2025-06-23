# 🌐 MyPORTFOLIO

A modern, responsive developer portfolio built with **React**, **Vite**, **CSS**, and **EmailJS**. This site showcases my work, skills, certifications, and projects, with interactive components and a functional contact form.

🔗 **Live Demo**: [https://yourusername.github.io/MYPORTFOLIO](https://yourusername.github.io/MYPORTFOLIO)

---

## 👨‍💻 About Me

I’m a passionate Computer Science graduate who loves building scalable web applications and exploring AI and full-stack development. With hands-on experience in React, Java, Python, and Spring Boot, I aim to create meaningful digital experiences while continuously learning and growing in the tech field.

---

## 🛠️ Skills

- **Languages**: JavaScript, Java, Python, SQL, HTML, CSS
- **Frontend**: React.js, Vite, Tailwind CSS, EmailJS, Chart.js, React Icons
- **Backend**: Spring Boot, Django, FastAPI
- **Database**: MySQL, SQLite
- **Tools**: Git & GitHub, Postman, VS Code, Netlify, Vercel

---

## 🏅 Certifications

- ✅ Python for Beginners – NPTEL  
- ✅ Java Basic – HackerRank  
- ✅ Git for Beginners – Coursera  
- ✅ PFDS (Problem Solving & Data Structures) – NPTEL  
- ✅ Programming in Java – NPTEL  
- ✅ Software Development using Django – NPTEL  

---

## 💼 Projects

| Project                          | Description                                                                 | Tech Stack               | Live / Repo            |
|----------------------------------|-----------------------------------------------------------------------------|--------------------------|------------------------|
| **OTP Authentication System**    | Secure login using 30-second OTP via EmailJS.                              | React, EmailJS, CSS      | [View Live](#)         |
| **Employee CRUD System**         | Java GUI with JDBC for employee management.                                | Java, JDBC, Swing        | [GitHub](#)            |
| **Skin Disease Detection**       | ML model using BERT, LSTM, ViT for skin condition classification.          | Python, Django, SQLite   | [GitHub](#)            |
| **My Portfolio Website**         | This website — showcasing skills, projects, and a working contact form.    | React, Vite, CSS, EmailJS | [Live Demo](https://yourusername.github.io/MYPORTFOLIO) |

---

## 📬 Contact Form Setup

This portfolio uses **EmailJS** to handle form submissions directly to your inbox.

**To set it up:**

1. Create an account at [EmailJS](https://emailjs.com)
2. Get the `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`
3. Add them to a `.env` file like so:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
