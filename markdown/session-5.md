# 🌐 คู่มือประกอบการเรียน Session 5 — External APIs & Intro to RAG
*(ฉบับอ่านทำความเข้าใจด้วยตัวเองและใช้สอนได้ทันที)*

> **ระยะเวลา:** 2 ชั่วโมง 45 นาที
> **กลุ่มเป้าหมาย:** ผู้เรียนที่ผ่าน Session 1-4 มาแล้ว
> **เป้าหมายหลักเมื่อจบคาบ:** เข้าใจหลักการ **API** + **JSON**, ดึงข้อมูลจากบริการภายนอกมาใช้ในเว็บได้, เรียกใช้ **LLM API** (Claude/GPT) เพื่อใส่ AI ลงในเว็บของเราเอง, และเข้าใจหลักการ **RAG** เพื่อสร้าง AI Chatbot ที่ตอบจากข้อมูลของเรา

> 💡 **แนวคิดหลัก:** จากที่เคย "ใช้ AI" → คาบนี้ "สร้างของที่มี AI อยู่ในนั้น" สำหรับให้คนอื่นใช้

---

## ⏱️ ภาพรวมตารางเวลา

| ช่วง | เวลาโดยประมาณ | เนื้อหาหลัก |
|---|---|---|
| 1 | 0:00 – 0:10 | ทบทวน + เปิดประเด็น "ใส่ AI ลงในเว็บของเราเอง" |
| 2 | 0:10 – 0:35 | **API คืออะไร** + JSON พื้นฐาน |
| 3 | 0:35 – 1:00 | Workshop 1: **Weather App** ดึง API สาธารณะ |
| 4 | 1:00 – 1:25 | **LLM API** — เรียก Claude/GPT จากเว็บของเรา |
| 5 | 1:25 – 1:35 | *พักเบรก* |
| 6 | 1:35 – 2:00 | **RAG เบื้องต้น** — ให้ AI ตอบจากข้อมูลของเรา |
| 7 | 2:00 – 2:30 | Workshop 2: **Custom AI Chatbot** + Knowledge Base |
| 8 | 2:30 – 2:45 | สรุปบทเรียน & การบ้าน |

---

## 🎯 ส่วนที่ 1 — ทบทวน & เปิดประเด็น
*(10 นาที)*

### 1.1 ทบทวน Session 1-4
- S1: Agent mindset + Deploy
- S2: Design + React + Debugging
- S3: State + Database + CRUD
- S4: System Design + อัปเดตความรู้ตลอด

### 1.2 ข้อจำกัดของเว็บที่ผ่านมา
- ใช้ได้แต่ข้อมูลที่ตัวเองใส่
- ไม่มี AI อยู่ในเว็บ (มีแค่เราใช้ AI สร้างเว็บ)
- ไม่สามารถดึงข้อมูลโลกภายนอก (สภาพอากาศ, ราคาหุ้น, ข่าว)

### 1.3 คาบนี้เปิดประตูใหม่ 2 บาน
1. **API** — เชื่อมเว็บของเรากับข้อมูลโลกภายนอก
2. **LLM API + RAG** — ใส่ AI Chatbot ที่ฉลาดเรื่องของเราไว้ในเว็บ

---

## 🔌 ส่วนที่ 2 — API คืออะไร + JSON พื้นฐาน
*(25 นาที)*

### 2.1 API คืออะไร? (อธิบายแบบบ้านๆ)
**API (Application Programming Interface)** = "เมนูในร้านอาหาร"
- ร้านอาหารไม่ให้ลูกค้าเข้าครัวเอง → มีเมนูให้สั่ง
- API คือ "เมนู" ที่บริการต่างๆ เปิดให้โปรแกรมของเราสั่งข้อมูลได้

**ตัวอย่างที่เจอทุกวัน:**
- เว็บพยากรณ์อากาศ → ดึงข้อมูลจาก API ของกรมอุตุฯ
- App Grab → ดึงตำแหน่งจาก Google Maps API
- ChatGPT app → ส่ง message ไป OpenAI API แล้วได้ response กลับ

### 2.2 โครงสร้างการคุยกับ API
```
Client (เว็บเรา)  →  Request  →  API Server
Client (เว็บเรา)  ←  Response ←  API Server
```

**Request (ส่งไป):**
- URL: `https://api.openweathermap.org/data/2.5/weather?q=Bangkok`
- Method: `GET` (ขอข้อมูล) หรือ `POST` (ส่งข้อมูลไปสร้าง)
- Headers: ข้อมูลเพิ่ม เช่น API Key

**Response (ได้กลับมา):** เป็น **JSON**

### 2.3 JSON — ภาษากลางของ API
**JSON (JavaScript Object Notation)** = รูปแบบข้อมูลที่ API ใช้

```json
{
  "city": "Bangkok",
  "temperature": 32,
  "weather": "Sunny",
  "humidity": 65,
  "forecast": [
    { "day": "Mon", "temp": 33 },
    { "day": "Tue", "temp": 31 }
  ]
}
```

**โครงสร้าง:**
- `{ ... }` = Object (กล่องเก็บข้อมูล)
- `"key": value` = คู่ของชื่อ + ค่า
- `[ ... ]` = Array (รายการ)

> 💡 **อ่านออกพอ:** ไม่ต้องเขียน — แค่รู้ว่า `data.temperature` หมายถึง "ดึงค่า temperature ออกมาจากกล่อง data"

### 2.4 API Key — กุญแจเข้าถึง
- บริการ API ส่วนใหญ่ต้องสมัครเพื่อรับ **API Key** (ฟรีในระดับเริ่มต้น)
- API Key = รหัสประจำตัวที่บอกว่า "เป็นใคร" — ห้ามแชร์ ห้าม commit เข้า Git
- เก็บใน **Environment Variable** (`.env`) แทน

### 2.5 fetch() — คำสั่ง JS ที่ใช้คุยกับ API
ตัวอย่าง (อ่านพอ ไม่ต้องเขียน):
```javascript
const response = await fetch('https://api.weather.com/...');
const data = await response.json();
console.log(data.temperature);  // 32
```

> 💡 **AI จะเขียนให้:** เราแค่บอก AI ว่า "ดึงข้อมูลจาก API นี้ แล้วเอามาแสดง" — AI จะเขียน fetch ให้

---

## 🌤️ ส่วนที่ 3 — Workshop 1: Weather App
*(25 นาที)*

### 3.1 เป้าหมาย
สร้างเว็บที่กรอกชื่อเมือง → แสดงสภาพอากาศปัจจุบัน + พยากรณ์ 5 วัน

### 3.2 ขั้นตอน
**Step 1: สมัคร API Key**
- ไปที่ [openweathermap.org](https://openweathermap.org) → Sign up → ไปที่ API keys → copy key

**Step 2: อัปเดต `requirements.md`**
```markdown
## ฟีเจอร์
- กรอกชื่อเมือง → แสดงสภาพอากาศปัจจุบัน
- แสดงพยากรณ์ 5 วันข้างหน้า
- แสดง icon ตามสภาพอากาศ

## Tech Stack
- React + Vite + Tailwind
- API: OpenWeatherMap

## API Endpoint
- Current: GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={KEY}&units=metric
```

**Step 3: Master Prompt**
> *"อ่าน `requirements.md` แล้วสร้าง Weather App ตามนั้น เก็บ API Key ใน `.env` (ตัวแปร `VITE_WEATHER_API_KEY`) ใช้ fetch() เรียก API และแสดงผลด้วย Tailwind ที่สวยงาม ก่อนเริ่ม ขอถาม 2 คำถามว่ามีจุดไหนไม่ชัด"*

**Step 4: ทดสอบ**
- กรอก "Bangkok" → ดูข้อมูล
- ลองเมืองอื่น
- ถ้า API เกิดข้อผิดพลาด (Error) — เปิด DevTools → Network tab → ดูว่า request ส่งถูกไหม (ใช้ Debug Workflow จาก S2)

### 3.3 ข้อควรระวัง
- **อย่า commit API Key เข้า Git** — ใส่ `.env` ใน `.gitignore`
- **CORS Error** ถ้าเรียกตรงๆ จาก browser อาจเจอ — บอก AI ให้ช่วยแก้ (proxy หรือใช้ server-side)

---

## 🤖 ส่วนที่ 4 — LLM API: ใส่ AI ลงในเว็บของเรา
*(25 นาที)*

### 4.1 LLM API คืออะไร?
**LLM API** = ช่องทางให้โปรแกรมของเราใช้ "สมอง" ของ AI (Claude, GPT, Gemini) ได้

**ต่างจาก ChatGPT.com ยังไง?**
- ChatGPT.com = คนเปิดเว็บไปคุยกับ AI
- LLM API = เว็บของเราคุยกับ AI แทนผู้ใช้

### 4.2 บริการยอดนิยม
| บริการ | ผู้ให้บริการ | จุดเด่น |
|---|---|---|
| **Claude API** | Anthropic | ฉลาด, เขียนยาวได้, สาย "thinking" |
| **OpenAI API** | OpenAI | ecosystem ใหญ่, GPT-4/5 |
| **Gemini API** | Google | ราคาถูก, multi-modal เก่ง |
| **OpenRouter** | Aggregator | ลองหลายโมเดลจากที่เดียว |

> 📌 **คาบนี้ใช้ Claude API** เพราะใจดี (มี free trial credits) และตอบเป็นภาษาไทยได้ดี

### 4.3 โครงสร้างการเรียก LLM API
```javascript
// ตัวอย่าง (อ่านพอ)
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': API_KEY,
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [
      { role: 'user', content: 'สวัสดี Claude' }
    ]
  })
});
```

**สิ่งที่ต้องระบุ:**
- **model** — โมเดลที่ใช้ (มีหลายตัว: เร็ว/ฉลาด/ราคา)
- **messages** — ประวัติการสนทนา
- **max_tokens** — ความยาวสูงสุดของคำตอบ
- **system prompt** (optional) — คำสั่งให้ AI ทำตัวยังไง

### 4.4 System Prompt — กำหนดบุคลิก AI
```
system: "คุณเป็น AI ผู้ช่วยที่ตอบเป็นภาษาไทยเสมอ น้ำเสียงเป็นกันเอง 
        เชี่ยวชาญด้านการทำอาหารไทย ถ้าถูกถามเรื่องอื่นให้บอกว่าตอบไม่ได้"
```

> 💡 **System Prompt = หัวใจของการทำ AI App แบบเฉพาะทาง** — เปลี่ยน AI ตัวเดียวกันให้ทำงานแตกต่างกัน

### 4.5 Mini Workshop: Chatbot ง่ายๆ
สั่ง AI:
> *"สร้าง React Chatbot ง่ายๆ ที่เรียก Claude API:*
> - *ผู้ใช้พิมพ์ข้อความ → ส่งไป Claude → แสดงคำตอบ*
> - *System prompt: 'คุณเป็นผู้ช่วยที่ตอบเป็นภาษาไทย'*
> - *แสดงประวัติการสนทนาเป็น chat bubble*
> - *เก็บ API Key ใน `.env` (`VITE_ANTHROPIC_API_KEY`)*
> - *ใช้ Tailwind ทำให้สวย*
> - *ก่อนเริ่ม ขอถาม 2 คำถามว่ายังขาดข้อมูลอะไร"*

---

## ⏸️ พักเบรก
*(10 นาที)*

---

## 📚 ส่วนที่ 6 — RAG เบื้องต้น: AI ที่ฉลาดเรื่องของเรา
*(25 นาที)*

### 6.1 ปัญหา: AI ไม่รู้เรื่องของเรา
ลองนึกภาพ Chatbot ที่ทำใน S4:
- ถามเรื่องทั่วไป → ตอบได้ดี
- ถามว่า *"ร้านของฉันเปิดกี่โมง?"* → ไม่รู้
- ถามว่า *"นโยบายคืนสินค้าเป็นยังไง?"* → ไม่รู้

→ ต้องสอนให้ AI **"รู้เรื่องของเรา"** ก่อน

### 6.2 RAG คืออะไร?
**RAG = Retrieval-Augmented Generation** = "หา + ตอบ"

**กลไก:**
1. **เก็บเอกสารของเรา** (คู่มือร้าน, FAQ, PDF) ไว้ในที่ค้นหาได้
2. **ผู้ใช้ถามคำถาม**
3. **ระบบ "หา" เอกสารที่เกี่ยวข้อง** (ส่วนที่น่าจะมีคำตอบ)
4. **ส่งคำถาม + เอกสารที่หาได้** ให้ LLM
5. **LLM ตอบโดยอ้างอิงจากเอกสาร** (ลดการให้ข้อมูลผิดพลาด หรือ Hallucination)

### 6.3 ทำไมไม่ใช่แค่ "ใส่ข้อมูลทั้งหมด" ลงใน prompt?
- **Context Window จำกัด** — ข้อมูลใหญ่จะใส่ทั้งหมดไม่ได้
- **ราคาแพง** — ยิ่งใส่มาก ยิ่งจ่ายเยอะ
- **AI งง** — ถ้าใส่ข้อมูลที่ไม่เกี่ยวเยอะ คำตอบจะแย่ลง

→ ต้อง "หาเฉพาะส่วนที่เกี่ยวข้อง" ก่อนใส่

### 6.4 องค์ประกอบของระบบ RAG
| ส่วน | หน้าที่ | เครื่องมือยอดนิยม |
|---|---|---|
| **Documents** | เอกสารของเรา | PDF, Markdown, Text |
| **Chunking** | หั่นเอกสารเป็นชิ้นเล็ก | ทำผ่าน library |
| **Embeddings** | แปลงข้อความเป็นตัวเลข | OpenAI Embeddings, Voyage |
| **Vector DB** | เก็บ embeddings ให้ค้นหาเร็ว | Pinecone, Supabase Vector, Chroma |
| **Retrieval** | ค้นหาชิ้นที่เกี่ยวข้อง | similarity search |
| **Generation** | LLM ตอบโดยใช้ context | Claude, GPT |

### 6.5 ทางลัด: ใช้ Service สำเร็จรูป
**สำหรับเริ่มต้น** ไม่ต้องสร้าง RAG เองตั้งแต่ศูนย์:

| Service | จุดเด่น |
|---|---|
| **OpenAI Assistants API** | ใส่ไฟล์เข้า → AI ตอบจากไฟล์ |
| **Anthropic Files API** | คล้ายกัน สำหรับ Claude |
| **Custom GPTs** (ChatGPT Plus) | สร้าง GPT เฉพาะทางแบบ no-code |
| **Claude Projects** | Knowledge base ผูกกับ project |
| **Supabase + pgvector** | DIY แบบมีโครงสร้าง |

### 6.6 ใน Workshop วันนี้ใช้ทางลัด
สำหรับคาบนี้เราใช้ **prompt-based RAG อย่างง่าย:**
- เก็บข้อมูล Knowledge Base ใน Markdown ไฟล์เดียว
- ส่งทั้งหมดเข้า system prompt (ใช้ได้เพราะข้อมูลยังไม่ใหญ่)
- ใน production จริงค่อยอัปเกรดเป็น Vector DB

---

## 🛠️ ส่วนที่ 7 — Workshop 2: Custom AI Chatbot
*(30 นาที)*

### 7.1 เป้าหมาย
สร้าง Chatbot ที่ตอบคำถามจาก **Knowledge Base ของตัวเอง**

**ตัวอย่างใช้งาน:**
- Chatbot ของร้านอาหาร — ตอบเมนู, ราคา, เวลาเปิด
- Chatbot ของหลักสูตร — ตอบเนื้อหาแต่ละคาบ
- Chatbot ผู้ช่วยส่วนตัว — ตอบจาก note ของเรา

### 7.2 ขั้นตอน
**Step 1: สร้าง Knowledge Base**
สร้างไฟล์ `knowledge.md`:
```markdown
# ร้าน Som Tam Heaven

## เวลาเปิด
- จันทร์-ศุกร์: 11:00 - 21:00
- เสาร์-อาทิตย์: 10:00 - 22:00
- ปิดทุกวันพุธ

## เมนูแนะนำ
- ส้มตำไทย: 60 บาท
- ลาบหมู: 80 บาท
- ไก่ย่าง: 120 บาท

## นโยบายคืนสินค้า
- รับคืนภายใน 30 นาที ถ้ายังไม่กิน
- ไม่รับคืนหลังจากชิมแล้ว
```

**Step 2: อัปเดต `requirements.md`**
```markdown
## ฟีเจอร์
- Chatbot ตอบคำถามจาก knowledge.md
- ถ้าไม่มีคำตอบใน knowledge ให้บอก "ไม่ทราบ" แทนการคาดเดาข้อมูลเอง
- แสดงเป็น chat UI สวยๆ

## Tech Stack
- React + Vite + Tailwind
- API: Claude API
- Knowledge: markdown ไฟล์เดียว
```

**Step 3: Master Prompt**
> *"อ่าน `requirements.md` และ `knowledge.md` แล้วสร้าง Chatbot ที่:*
> - *โหลด knowledge.md เข้าเป็น context*
> - *System prompt บังคับให้ตอบจาก knowledge เท่านั้น — ถ้าไม่มีให้บอกว่า 'ขออภัย ฉันไม่มีข้อมูลส่วนนี้'*
> - *ใส่ knowledge เข้า system prompt ทุก request*
> - *UI เป็น chat bubble สวยๆ ด้วย Tailwind*
> - *ก่อนเริ่ม ถาม 2 คำถามว่ายังไม่ชัดตรงไหน"*

**Step 4: ทดสอบ**
- *"ร้านเปิดกี่โมง?"* → ควรตอบตาม knowledge
- *"แนะนำเมนู?"* → ควรเลือกจากเมนูใน knowledge
- *"กรุงเทพอากาศวันนี้?"* → ควรตอบว่าไม่มีข้อมูล (ไม่ใช่ตอบสุ่ม)

### 7.3 Bonus: ลองอัปโหลด PDF
ลองใช้ **Claude Projects** หรือ **Custom GPT** อัปโหลด PDF ที่ตัวเองมี — จะเห็นว่า RAG ทำงานยังไงโดยไม่ต้องเขียนโค้ดเลย

---

## 📋 ส่วนที่ 8 — สรุปบทเรียน & การบ้าน
*(15 นาที)*

### 8.1 สิ่งที่ได้เรียนวันนี้
- **API + JSON** = เมนูให้โปรแกรมสั่งข้อมูลจากบริการอื่น
- **fetch()** = คำสั่ง JS เรียก API (AI เขียนให้)
- **LLM API** (Claude/GPT) = ใส่ AI ลงในเว็บของเรา
- **System Prompt** = กำหนดบุคลิก/หน้าที่ของ AI
- **RAG** = ให้ AI ตอบจากข้อมูลของเรา (Documents → Chunks → Embeddings → Vector DB → Retrieve → Generate)
- **ทางลัด RAG** = ใช้ Claude Projects / Custom GPTs / Assistants API

### 8.2 ภารกิจในห้องเรียน
- [ ] สมัคร API Key จาก OpenWeatherMap + Anthropic (Claude)
- [ ] สร้าง Weather App (Workshop 1)
- [ ] สร้าง AI Chatbot ที่มี System Prompt กำหนดบุคลิก
- [ ] สร้าง Custom AI Chatbot จาก Knowledge Base ของตัวเอง (Workshop 2)
- [ ] Deploy ขึ้น GitHub Pages (ระวัง! อย่า commit API Key)

### 8.3 การบ้าน
1. **คิด Use Case ของ Chatbot สำหรับชีวิตจริง** — เช่น chatbot สำหรับร้านที่บ้าน, สำหรับวิชาที่เรียน, สำหรับชุมชนของตัวเอง
2. **เขียน Knowledge Base** ที่ครอบคลุมคำถามที่คนมักถาม (อย่างน้อย 10 หัวข้อ)
3. **ลอง Claude Projects** หรือ **Custom GPT** อัปโหลด PDF แล้วลองถามคำถาม
4. **เตรียมตัวคาบหน้า (S6 - Final Project):** เลือกหัวข้อโปรเจกต์ที่จะทำ + ร่าง `requirements.md` มา

---

## 💡 เทคนิคสำหรับผู้สอน (Instructor Notes)
1. **ความปลอดภัย API Key เป็นเรื่องสำคัญ** — สาธิตว่าถ้า commit เข้า Git ก็จะมีคนใช้ฟรีจน credit หมด → ต้อง `.env` + `.gitignore` ทุกครั้ง
2. **ถ้า CORS error ในห้อง** ให้ AI แก้ด้วย serverless function (เช่น Vercel Functions) หรือใช้ proxy
3. **อย่าจมกับ RAG ทฤษฎี** — เป้าหมายของ S5 คือให้ผู้เรียน "ใช้" RAG ผ่าน service สำเร็จรูปได้ ไม่ใช่ implement ตั้งแต่ศูนย์
4. **ขายไอเดียว่า "AI ที่ฉลาดเรื่องของเรา = สินทรัพย์"** — ทุกร้าน/ทุกบริษัทจะต้องมีในอนาคต
