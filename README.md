# 🚀 AI-First Web Development Course (AI-First Web Architect)

Welcome to the **AI-First Web Development Course** repository! This course is designed to transform beginners into "AI-First Web Architects". Instead of teaching students how to write every single line of code from memory, we teach them how to **control and command AI** to build professional web applications.

**Instructor:** พระมหาอนวัช ภูริวโร

---

## 🎯 Course Philosophy: The "AI-First Architect"

In the modern era of web development, AI (like Claude, ChatGPT, Gemini) serves as the "Builder," capable of generating code rapidly and accurately. The developer's role has evolved into the **"Architect"**. 

Our core methodology revolves around **Spec-Driven Development (Context Engineering)**:
1. **Plan in Markdown:** We use `.md` files as the Single Source of Truth to structure our requirements.
2. **Design with AI:** We leverage UI tools like **Google Stitch** and connect them directly to our workflow via **MCP (Model Context Protocol)**.
3. **Generate & Iterate:** We command AI to translate our Markdown specs and Design Tokens into functional, responsive code.
4. **Automate Version Control:** We instruct AI to handle Git commands (`add`, `commit`, `push`) and automated deployments.

---

## 📂 Repository Structure

This repository is organized into the following key directories:

- **[`markdown/`](./markdown/)**
  - Contains all the course materials, syllabus, session outlines, and worksheets. This is the heart of the course curriculum.
  - Read [Course Overview](./markdown/AI_First_Web_Development_Course_Overview.md) to see the full 6-session breakdown.
- **[`website/`](./website/)**
  - The source code for the course presentation website. Built with React, Vite, and Tailwind CSS v4. It showcases the high-tech, dark-mode design system created in Google Stitch.
- **[`docs/`](./docs/)**
  - The compiled production build of the website, used for GitHub Pages hosting.
- **[`assets/`](./assets/)**
  - Images, generated hero banners, and instructor profile pictures used throughout the course materials and the website.

---

## 🚀 Running the Presentation Website Locally

To view or modify the course's presentation website on your local machine:

1. **Navigate to the website directory:**
   ```bash
   cd website
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production (updates the `/docs` folder for GitHub Pages):**
   ```bash
   npm run build
   rm -rf ../docs
   cp -r dist ../docs
   touch ../docs/.nojekyll
   ```

---

## 🛠️ Technology Stack & Tools

- **Core:** React, Vite
- **Styling:** Tailwind CSS v4 (Glassmorphism & High-Tech Futurism aesthetic)
- **AI Design Workflow:** Google Stitch integrated via MCP (Model Context Protocol)
- **Deployment:** GitHub Pages (Automated via Git)

---

*“นักออกแบบและโปรแกรมเมอร์ที่เก่งที่สุดในยุคนี้ ไม่ใช่คนที่จำโค้ดได้แม่นยำที่สุด แต่คือคนที่สื่อสารและวางโครงสร้างระบบให้ AI ทำงานแทนได้อย่างมีประสิทธิภาพสูงสุด”*
