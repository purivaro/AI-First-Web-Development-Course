# 📋 Worklog — สรุปงานที่ทำล่าสุด

> ไฟล์นี้ใช้คุยงานต่อเนื่อง สรุปสถานะปัจจุบันของหลักสูตร + เว็บ พร้อมสิ่งที่อาจจะทำต่อ
> อัปเดตล่าสุด: 2026-05-11 (รอบ 2: เพิ่ม session 2-6 ครบ + หน้าเว็บรายละเอียดครบ)

---

## 🎯 สถานะปัจจุบันของหลักสูตร

### โครงสร้าง 6 Sessions (หลังจัดใหม่)

| # | ชื่อ Session | โฟกัส |
|---|---|---|
| 1 | **Build & Deploy Your First Webpage with AI** | Agent mindset + Markdown + Git/Deploy |
| 2 | **Designing & Debugging Interactive UI with AI** | UI Design (Stitch + MCP) + AI Debugging |
| 3 | **Building Database-Driven Web Apps with AI** | State + Logic + Database + CRUD + Dashboard |
| 4 | **Connecting to Google & LINE APIs** | API + JSON + Google APIs (Maps/Calendar/Sheets) + LINE OA + Webhook + LIFF |
| 5 | **From Problem to Product — System Design with AI** | Agent Framework + Backward Design + Case Studies + AI Tool Update |
| 6 | **Final Project: AI-Powered Web/App Development** | โปรเจกต์จริง + Deploy + Present |

---

## ✅ สิ่งที่ทำในรอบล่าสุด

### 1. ปรับโครงสร้างหลักสูตร (Sessions 1-4)
- **S1:** เพิ่ม Agent vs Chatbot mindset + ศิลปะการตั้งคำถามกลับ
- **S2:** เปลี่ยนชื่อ + เพิ่ม AI-Assisted Debugging (DevTools + Error/Screenshot)
- **S3:** เปลี่ยนชื่อ + รวม State/Logic/DB + เพิ่ม Dashboard (กราฟ/ตาราง/สรุปยอด)
- **S4:** เปลี่ยนชื่อ + เนื้อหาใหม่ทั้งหมด (Agent Framework 5 ส่วน, Backward Design, เล็ง-ยิง-ปรับ, Case Studies: HR/ขาย/ครู/ร้านค้า)

### 2. ย้ายเนื้อหาระหว่าง Sessions
- ย้าย Google Stitch + MCP จาก S1 → S2
- S1 เน้น mindset + markdown + git/deploy เป็นหลัก

### 3. เว็บไซต์ (GitHub Pages)
- เปลี่ยน hero image: `course_hero.png` → `hero.png` → `new_hero.png`
- เปลี่ยน Session 6 banner: `session6_banner.png` → `session6_banner2.png`
- ปรับ wording: ตัด "รีเฟรชแล้วข้อมูลไม่หาย" → "เก็บข้อมูลถาวร"
- เพิ่ม SEO meta tags ครบ: description, keywords, OG, Twitter cards (banner.png), favicon, PWA hints
- Title: `AI-First Web Architect`
- Tagline: *"เรียนรู้การสร้าง Web Application ด้วยพลังของ AI"*

### 4. หน้ารายละเอียด Session 1
- ติดตั้ง `react-markdown` + `remark-gfm`
- สร้าง [`SessionDetail.jsx`](../website/src/SessionDetail.jsx) พร้อม prose styling โทน cyber/glass
- import [`session-1.md`](session-1.md) เป็น raw text ผ่าน Vite `?raw`
- Hash route: `#/session/1`
- ปุ่ม "อ่านรายละเอียดคาบนี้" ที่การ์ด Session 1

### 5. Cleanup
- ลบ `.DS_Store` ออกจาก repo + เพิ่มใน `.gitignore`
- เพิ่ม `.claude/settings.json` ให้ deploy commands ไม่ต้อง prompt permission

### 6. Session 1 timing
- พักเบรกลดจาก 15 → 10 นาที, สรุปบทเรียนเพิ่มเป็น 10 นาที

---

## 📝 ไฟล์สำคัญที่ใช้คุยงาน

| ไฟล์ | จุดประสงค์ |
|---|---|
| [AI_First_Web_Development_Course_Overview.md](AI_First_Web_Development_Course_Overview.md) | ภาพรวมหลักสูตร 6 sessions (Source of Truth) |
| [session-1.md](session-1.md) | คู่มือสอน Session 1 (ฉบับเต็ม + render เป็นหน้าเว็บ) |
| [session-1-worksheet.md](session-1-worksheet.md) | ใบงาน Session 1 |
| [session-2.md](session-2.md) | คู่มือสอน Session 2 |
| [slide-outline.md](slide-outline.md) | โครงสไลด์ |
| [WORKLOG.md](WORKLOG.md) | ไฟล์นี้ — สรุปงานและ TODO |

---

## 🔜 สิ่งที่อาจจะทำต่อ (TODO / Backlog)

### หลักสูตร
- [x] ~~เขียน `session-2.md` ฉบับเต็ม (Design System + Stitch + React intro + Debug)~~
- [x] ~~เขียน `session-3.md` (Database-Driven Web Apps) ฉบับเต็ม~~
- [x] ~~เขียน `session-4.md` (System Design + อัปเดตความรู้/Tool) ฉบับเต็ม~~
- [x] ~~เขียน `session-5.md` (API + LLM API + RAG) ฉบับเต็ม~~
- [x] ~~เขียน `session-6.md` (Final Project) ฉบับเต็ม~~
- [ ] ทำใบงาน (worksheet) สำหรับ Session 2-6

### เว็บไซต์
- [x] ~~เพิ่มหน้ารายละเอียดสำหรับ Session 2-6 (ใช้ pattern เดิมจาก Session 1)~~
- [x] ~~เพิ่มปุ่ม "อ่านรายละเอียด" ที่การ์ด Session 2-6~~
- [ ] อาจจะเพิ่ม Table of Contents ในหน้ารายละเอียด (sticky sidebar)
- [ ] เพิ่ม "Print/Download as PDF" สำหรับครูที่อยากเอาไปใช้สอน

### Misc
- [ ] เพิ่ม Google Analytics หรือ tracking อื่นๆ (ถ้าต้องการ)
- [ ] ทำ Open Graph card image ที่สวยขึ้น (ตอนนี้ใช้ banner.png)

---

## 🛠️ Workflow การ Deploy

1. แก้ไฟล์ใน [`website/src/`](../website/src/) หรือ [`markdown/`](.)
2. Build: `cd website && npm run build`
3. Copy dist → docs: `rm -rf docs/assets && cp -r website/dist/* docs/`
4. Commit + Push → GitHub Pages อัปเดตอัตโนมัติ (รอ ~1 นาที)

> Permission allowlist ใน `.claude/settings.json` ครอบคลุมขั้นตอนเหล่านี้แล้ว
