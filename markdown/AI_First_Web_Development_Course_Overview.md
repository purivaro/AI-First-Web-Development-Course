# AI-First Web Development Course Overview

> **แนวคิดหลัก:** สอนนิสิตให้ **"คุม AI"** มากกว่าสอนให้เขียนโค้ดเอง
> แต่ยังคง **"เข้าใจพื้นฐานเว็บ"** แบบที่จำเป็นต่อการสั่ง AI

นี่คือหลักสูตร AI-First Web Development ที่สมบูรณ์ที่สุดสำหรับผู้เริ่มต้น

---

## 📋 ภาพรวมหลักสูตร

| รายการ | รายละเอียด |
|---|---|
| **ระยะเวลา** | 6 คาบ × 2 ชั่วโมง 45 นาที |
| **กลุ่มเป้าหมาย** | นิสิตไม่มีพื้นฐานเขียนเว็บมาก่อน |
| **เป้าหมายหลัก** | สร้างเว็บ/เว็บแอพจริงได้ โดยใช้ AI เป็นผู้ช่วยหลัก |

---

## 📚 สรุป 6 คาบเรียน

1. **Build & Deploy Your First Webpage with AI**
2. **Designing & Debugging Interactive UI with AI**
3. **Building Database-Driven Web Apps with AI**
4. **From Problem to Product — System Design with AI**
5. **External APIs & Intro to RAG**
6. **Final Project: AI-Powered Web/App Development**

---

## 🚀 Session 1 — Build & Deploy Your First Webpage with AI

*สร้างเว็บแรก + วางโครงสร้างมืออาชีพ + Deploy ตั้งแต่วันแรก*

### 🎯 เป้าหมายคาบนี้
- เปลี่ยน mindset จาก "ใช้ AI แบบ Chatbot" สู่ "ใช้ AI แบบ Agent"
- ให้นิสิตเข้าใจกระบวนการทำงานแบบ AI-First Architect
- สามารถร่าง Requirement และวางแบบแปลนผ่านไฟล์ `.md` ได้
- รู้จักใช้เครื่องมือออกแบบระดับโปร (Google Stitch) เชื่อมต่อผ่านระบบ MCP
- เข้าใจการจัดการเวอร์ชัน (Git/GitHub) และรู้วิธีสั่ง AI ให้ทำงานแทน
- เอาเว็บขึ้นออนไลน์ได้จริงผ่าน GitHub Pages ภายในคาบแรก

### 📖 เนื้อหา
- **Agent Mindset — อย่าใช้ AI เหมือน Chatbot:**
  - ความต่างระหว่าง "Chatbot mode" (สั่งสั้นๆ ได้ผลลัพธ์ทั่วไป) กับ "Agent mode" (brief ละเอียด ได้ผลลัพธ์ตรงเป้า)
  - ทำไมการ "พิมพ์ขอเร็วๆ" ถึงให้ผลลัพธ์ที่ต้องแก้เยอะ
  - ตัวอย่างเปรียบเทียบ: "ช่วยเขียนบทความหน่อย" vs Brief แบบ Agent ที่มี Context + Goal ครบ
- **ศิลปะการตั้งคำถามกลับ (Clarifying Questions):**
  - ก่อนสั่ง AI ทำงาน ให้ AI ถามกลับก่อนเพื่อความชัดเจน
  - การ prompt ให้ AI ถามจนกว่าจะเข้าใจ context พอ
  - ทำไม "AI ที่ถามเก่ง" ให้ผลลัพธ์ดีกว่า "AI ที่รีบทำ"
- **วิถี AI-First Web Architect:**
  - ทำไมต้องใช้ Markdown (`.md`) ในการเป็น Single Source of Truth
  - การเขียน Prompt ให้ AI เข้าใจด้วยโครงสร้าง Markdown
- **การเนรมิต UI ด้วย Google Stitch:**
  - รู้จัก Google Stitch และระบบ Design Tokens
  - การเชื่อมต่อ MCP (Model Context Protocol) เพื่อดึงดีไซน์จาก Stitch มาเขียนโค้ดอัตโนมัติ
- **Version Control สำหรับผู้กำกับ AI:**
  - รู้จัก Git และ GitHub ฉบับรวบรัด
  - ศิลปะการใช้ AI พิมพ์คำสั่ง `git add .`, `git commit`, `git push` ให้แบบอัตโนมัติ
- **เอาขึ้นออนไลน์ (Deployment):**
  - วิธี Setup GitHub Pages อย่างถูกวิธี
  - การอัปเดตเว็บเวอร์ชันใหม่ด้วยคำสั่งเดียวผ่าน AI

### 🛠️ Workshop
- ฝึกเปรียบเทียบ: สั่งงาน AI แบบ Chatbot vs แบบ Agent กับโจทย์เดียวกัน เห็นความต่างของผลลัพธ์
- ฝึก prompt ให้ AI ถามกลับก่อนเริ่มทำงาน
- เขียนไฟล์ `requirements.md` เพื่อใช้เป็นแปลนบ้าน
- ดึงดีไซน์จาก Google Stitch ผ่านระบบ MCP
- ให้ AI สร้างเว็บ (เช่น HTML/CSS/JS หรือ React) ให้ตรงตาม Requirement และ Design
- สั่ง AI จัดการ Git (Commit & Push) ขึ้น GitHub รวดเดียวจบ
- ตั้งค่า GitHub Pages และนำลิงก์มาแชร์ให้เพื่อนดู

### ✅ Learning Outcomes
- เข้าใจความต่างระหว่างการใช้ AI แบบ Chatbot กับแบบ Agent
- ตั้งคำถามกลับให้ AI ก่อนเริ่มงานเพื่อให้ผลลัพธ์ตรงเป้า
- มีเว็บไซต์ออนไลน์ที่เป็นผลงานของตัวเอง
- รู้วิธีการคุม AI ผ่านไฟล์ `.md` และดึงข้อมูลการออกแบบด้วย MCP
- ใช้งาน Git และ GitHub Pages ได้จริงโดยไม่ต้องท่องจำคำสั่ง

---

## 🎨 Session 2 — Designing & Debugging Interactive UI with AI

*เข้าใจโครงสร้างเว็บ + ใส่ลูกเล่นให้ขยับได้*

### 🎯 เป้าหมายคาบนี้
- เข้าใจ layout ของเว็บแบบมืออาชีพ
- ใช้ AI ช่วยสร้าง Component และใส่ JavaScript พื้นฐาน
- เข้าใจ DOM Event ง่ายๆ เช่น การคลิกเพื่อเปิด/ปิด หรือเปลี่ยนสี
- รู้จักวิธี Debug โค้ดร่วมกับ AI เมื่อเจอปัญหา

### 📖 เนื้อหา
- โครงสร้างเว็บ: section, container, grid, spacing
- การต่อยอด UI Components โดยอ้างอิงจาก Design System ด้วย Stitch
- DOM & Event Listener คืออะไร (แบบง่ายที่สุด)
- ให้ AI อธิบาย HTML/CSS/JS และปรับ layout ให้สวยขึ้นพร้อมลูกเล่น (Interactive)
- **AI-Assisted Debugging:**
  - การใช้ Browser DevTools (Console, Inspect Element) เบื้องต้น
  - ศิลปะการส่ง Error Message / Screenshot ให้ AI วิเคราะห์
  - วิธี Prompt AI ให้แก้ Bug แทนที่จะแค่อธิบาย

### 🛠️ Workshop
- สร้าง UI Component สวยๆ จากหน้าเว็บหลัก
- เพิ่มปุ่มคลิกเพื่อเปิด Popup Modal หรือ Theme Switcher (Dark/Light mode)
- ทำ responsive layout ด้วย AI สำหรับจอมือถือและแท็บเล็ต
- ฝึก Debug จริง: จงใจสร้าง Bug แล้วใช้ AI ช่วยหาและแก้

### ✅ Learning Outcomes
- อ่าน HTML/CSS/JS พื้นฐานออก
- สั่ง AI ให้ปรับ layout และเขียนโค้ด Interactive ง่ายๆ ได้
- สร้างเว็บที่รองรับทุกขนาดหน้าจอและโต้ตอบได้
- Debug ปัญหาในโค้ดร่วมกับ AI ได้อย่างมั่นใจ

---

## ⚡ Session 3 — Building Database-Driven Web Apps with AI

*จากเว็บหน้าเดียว สู่ Web App ที่มีตรรกะและเก็บข้อมูลถาวร*

### 🎯 เป้าหมายคาบนี้
- ก้าวจากเว็บหน้าเดียว มาทำ "Web App" ที่มี Logic จริง
- เข้าใจ "State" และการจัดการตรรกะการทำงาน
- เข้าใจการทำงานของ Database และเชื่อม App เข้ากับฐานข้อมูล
- สร้างแอปที่เก็บข้อมูลถาวร ใช้งานได้จริง

### 📖 เนื้อหา
- **State & Logic:**
  - State คืออะไร? (ข้อมูลเปลี่ยน UI ก็เปลี่ยนตาม)
  - การออกแบบตรรกะการทำงานของแอป
- **Database พื้นฐาน:**
  - ทำไมต้องมี Database? (การเก็บข้อมูลให้คงอยู่ถาวร)
  - ทางเลือก Database ที่ AI ช่วยจัดการได้ง่ายๆ:
    - ทางเลือกแบบง่าย: Google Sheets, Firebase
    - ทางเลือกสาย Relational: SQLite, MySQL, PostgreSQL
    - ทางเลือกแบบ Cloud Native: Cloudflare D1
  - CRUD (Create, Read, Update, Delete) คืออะไร
- **การสั่ง AI สร้างแอปแบบครบวงจร:**
  - ให้ AI สร้าง Web App ที่มี State + เชื่อม DB เช่น
    - To-Do App ที่จำรายการได้
    - Note-taking App
    - ระบบบันทึกค่าใช้จ่ายส่วนตัว

### 🛠️ Workshop
- เลือกทำ 1 เว็บแอพ พร้อมต่อ Database
- ทดลอง CRUD จริง: เพิ่ม / อ่าน / แก้ไข / ลบ ข้อมูล
- ปิดเปิดเบราว์เซอร์แล้วเช็คว่าข้อมูลยังอยู่
- ปรับฟีเจอร์ด้วยการสั่ง AI

### ✅ Learning Outcomes
- เข้าใจ State, Logic และ Database ของ Web App
- สั่ง AI สร้างแอปที่เก็บข้อมูลได้ถาวร
- มี Web App ที่ใช้งานจริงได้ ไม่ใช่แค่ตัว demo

---

## 🧠 Session 4 — From Problem to Product — System Design with AI

*คิดเป็น product designer ไม่ใช่แค่ coder — ออกแบบ solution ให้ตอบโจทย์งานจริง*

### 🎯 เป้าหมายคาบนี้
- มี "หัว" ในการออกแบบ solution ก่อนเขียนโค้ด
- รู้จัก **Backward Design** — เริ่มจาก output ย้อนสู่ input
- เข้าใจ Flow การพัฒนาแอปจริง: **เล็ง → ยิง → ปรับ**
- วิเคราะห์ปัญหาในงานจริงแล้วออกแบบเครื่องมือ (เว็บแอป) มาแก้ได้
- ใช้ Agent Framework ในการ brief AI ให้ทำงานใหญ่ได้แบบมืออาชีพ

### 📖 เนื้อหา
- **Agent Framework — 5 องค์ประกอบของการ brief AI:**
  - **Context** — กลุ่มเป้าหมาย, ข้อมูลพื้นฐาน, สถานการณ์ปัจจุบัน
  - **Goal** — วัตถุประสงค์ชัดเจน, ผลลัพธ์ที่ต้องการ, ตัวชี้วัดความสำเร็จ
  - **Constraints** — ข้อจำกัดเวลา, งบประมาณ, รูปแบบ/โทน, สิ่งที่ต้องหลีกเลี่ยง
  - **Files / References** — ไฟล์อ้างอิง, ตัวอย่าง, ข้อมูลประกอบ
  - **Workflow** — ลำดับขั้นตอนการทำงาน
- **Workflow มาตรฐาน: Research → Plan → Generate → Review & Refine:**
  - Research: ให้ AI ค้นคว้าและรวบรวมข้อมูลก่อน
  - Plan: ให้ AI วางแผนเป็นขั้นเป็นตอน (ก่อนเริ่มทำจริง)
  - Generate: ให้ AI ลงมือสร้างตามแผน
  - Review & Refine: ตรวจสอบและปรับปรุงเป็นรอบๆ
- **Backward Design Framework:**
  - เริ่มจาก: เป้าหมาย → ผลลัพธ์ / Report (Output) → Process → Input / Form
  - ทำไมการคิดย้อนกลับถึงดีกว่าเริ่มจาก UI หรือฟอร์ม
  - กรณีศึกษา: ฟอร์มที่ออกแบบแบบ "เดาเอา" vs ฟอร์มที่ออกแบบจาก Report ที่ต้องการ
- **เล็ง-ยิง-ปรับ (Aim → Shoot → Adjust):**
  - MVP คืออะไร, ทำไมต้องเริ่มเล็ก
  - Feedback loop กับ AI ในการ iterate ทีละรอบ
  - การยอมปล่อยของ "ไม่สมบูรณ์" เพื่อเรียนรู้จาก user จริง
- **Case Studies — งานจริง → เว็บแอปอะไร?**
  - งาน HR: ระบบลงเวลา, ฟอร์มลา, Dashboard สรุปวันลา
  - งานขาย: ระบบ Lead, Dashboard ยอดขาย, ใบเสนอราคาอัตโนมัติ
  - งานครู / การศึกษา: ระบบเช็คชื่อ, ฟอร์มประเมินผู้เรียน, Report ความก้าวหน้า
  - งานร้านค้า: ระบบจัดการสต็อก, หน้าสั่งซื้อ, สรุปยอดรายวัน
  - (เลือก 3-4 cases มาเจาะลึก พร้อม flow การคิดย้อนกลับ)
- **การ Brief AI ให้ออกแบบระบบ:**
  - เขียน `requirements.md` แบบมืออาชีพ ที่เริ่มจาก Output
  - แบ่งงานเป็น phase ให้ AI ทำทีละส่วน (ไม่สั่งทีเดียวจบ)

### 🛠️ Workshop
- เลือก 1 case study จากงานจริงของตัวเอง (หรือจากตัวอย่าง)
- ทำ Backward Design บนกระดาษ: Report → Process → Input
- เขียน `requirements.md` ที่ครบ 5 องค์ประกอบ (Context / Goal / Constraints / Files / Workflow)
- ให้ AI ทำตาม Workflow: Research → Plan → Generate → Review & Refine
- ทดลองใช้แอปจริง → ปรับรอบที่ 2, 3 (เล็ง-ยิง-ปรับ)
- นำเสนอ **flow การคิด** ไม่ใช่แค่หน้าตาแอป

### ✅ Learning Outcomes
- มองปัญหาเป็น แล้วออกแบบ solution ที่ตอบโจทย์จริงได้
- ใช้ Backward Design ในการวางระบบก่อนเขียนโค้ด
- Brief AI ด้วย 5 องค์ประกอบ (Context/Goal/Constraints/Files/Workflow) ได้ครบ
- จัดการงานใหญ่ด้วย Workflow Research → Plan → Generate → Review & Refine
- คิดเป็น product designer ไม่ใช่แค่คนสั่ง AI ให้เขียนโค้ด

---

## 🌐 Session 5 — External APIs & Intro to RAG

*ดึงข้อมูลระดับโลก และสร้าง AI Assistant ของตัวเอง*

### 🎯 เป้าหมายคาบนี้
- เข้าใจการดึงข้อมูลจาก API ภายนอก
- รู้จัก RAG (Retrieval-Augmented Generation) เบื้องต้น
- ใช้ AI สร้างแอพที่เชื่อมต่อกับ LLM API และข้อมูลส่วนตัว

### 📖 เนื้อหา
- API คืออะไร และโครงสร้าง JSON แบบง่ายๆ
- Intro to RAG: ทำอย่างไรให้ AI ตอบคำถามจากข้อมูลที่เรามี (เช่น ไฟล์ PDF หรือคู่มือ)
- ให้ AI สร้าง Web App เช่น
  - Weather App (ดึง API สภาพอากาศ)
  - Custom AI Chatbot แบบมี RAG เบื้องต้น

### 🛠️ Workshop
- เลือกสร้าง 1 API App หรือ AI Chatbot เล็กๆ
- ลองดึงข้อมูลจาก API สาธารณะ หรือสร้างระบบ RAG อย่างง่ายเพื่อตอบคำถาม
- ให้ AI ช่วยจัดการปรับ UI/UX ให้ดูโปร

### ✅ Learning Outcomes
- เข้าใจหลักการ API และ RAG เบื้องต้น
- ใช้ AI เขียนโค้ดดึงข้อมูลภายนอก (Fetch) ได้
- เข้าใจกระบวนการนำ LLM มาใช้งานจริงใน Web App

---

## 🏆 Session 6 — Final Project: AI-Powered Web/App Development

*สร้างโปรเจกต์จริง + Deploy + Present*

### 🎯 เป้าหมายคาบนี้
- สร้างเว็บ/เว็บแอพจริง 1 ชิ้น
- ใช้ AI ในทุกขั้นตอน
- Deploy และนำเสนอได้

### 📖 เนื้อหา
- ให้ AI ช่วยคิดโปรเจกต์
- ให้ AI สร้าง UI + Logic + API
- ปรับแต่งด้วย AI
- Deploy
- Present

### 🛠️ Workshop
- ทำโปรเจกต์จริง
- ให้ AI ช่วยแก้ปัญหา
- นำเสนอผลงาน

### ✅ Learning Outcomes
- มีโปรเจกต์จริงใน portfolio
- ใช้ AI ทำงานตั้งแต่ต้นจนจบ
- Deploy และ present ได้
