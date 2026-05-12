# 🌐 คู่มือประกอบการเรียน Session 5 — External APIs, Google & LINE Integration
*(ฉบับอ่านทำความเข้าใจด้วยตัวเองและใช้สอนได้ทันที)*

> **ระยะเวลา:** 2 ชั่วโมง 45 นาที
> **กลุ่มเป้าหมาย:** ผู้เรียนที่ผ่าน Session 1-4 มาแล้ว
> **เป้าหมายหลักเมื่อจบคาบ:** เข้าใจหลักการ **API** + **JSON**, ดึงข้อมูลจากบริการภายนอกมาใช้ในเว็บได้, รู้จัก **Google APIs** (Maps / Calendar / Sheets) ที่ใช้บ่อยที่สุดในการทำงานจริง, และเชื่อม **LINE OA + Webhook + LIFF** กับเว็บแอปได้

> 💡 **แนวคิดหลัก:** เว็บแอปจะมีประโยชน์เต็มที่เมื่อมัน "คุยกับโลกภายนอก" ได้ — ทั้งข้อมูลจาก API และผู้ใช้ผ่านช่องทางที่พวกเขาใช้อยู่จริง

---

## ⏱️ ภาพรวมตารางเวลา

| ช่วง | เวลาโดยประมาณ | เนื้อหาหลัก |
|---|---|---|
| 1 | 0:00 – 0:10 | ทบทวน + เปิดประเด็น "เชื่อมเว็บกับโลกภายนอก" |
| 2 | 0:10 – 0:30 | **API คืออะไร** + JSON พื้นฐาน |
| 3 | 0:30 – 0:55 | Workshop 1: **Weather App** ดึง API สาธารณะ |
| 4 | 0:55 – 1:40 | **🌟 Google APIs** — Maps, Calendar, Sheets, Drive |
| 5 | 1:40 – 1:50 | *พักเบรก* |
| 6 | 1:50 – 2:30 | **🌟 LINE OA + Webhook** — เชื่อม LINE กับ Web App ของเรา |
| 7 | 2:30 – 2:45 | สรุปบทเรียน & การบ้าน |

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
1. **External APIs** — เชื่อมเว็บของเรากับบริการภายนอก (Weather, Google APIs)
2. **LINE OA + Webhook** — ส่ง/รับข้อความผ่าน LINE ช่องทางที่คนไทยใช้ทุกวัน

---

## 🔌 ส่วนที่ 2 — API คืออะไร + JSON พื้นฐาน
*(20 นาที)*

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

## 🌟 ส่วนที่ 4 — Google APIs: เครื่องมือที่ใช้บ่อยที่สุดในงานจริง
*(45 นาที)*

> 🎯 **เป้าหมาย:** Google APIs เป็น API ที่คนทำงานเจอบ่อยที่สุด — Maps สำหรับเว็บแผนที่, Calendar สำหรับระบบนัด, Sheets สำหรับใช้เป็น "DB ง่ายๆ" ที่ทุกคนแก้ผ่าน Google Drive ได้

### 4.1 ทำไม Google APIs สำคัญ?
- **ฟรี Tier ใจดีที่สุดในวงการ** — ใช้ได้จริงในงานเล็ก-กลาง
- **คนไทยใช้ Google Workspace กันทั่วไป** — เชื่อมกับเครื่องมือที่มีอยู่แล้ว
- **Documentation ดีและ AI ถนัด** — สั่ง AI สร้างได้แทบทุก use case
- **ครอบคลุมทุกอย่าง** — Maps, Calendar, Sheets, Drive, Gmail, YouTube, Translate, Vision

### 4.2 หมวด Google APIs ที่ควรรู้
| API | หน้าที่ | Use Case ในวัด/โรงเรียน |
|---|---|---|
| **Maps** | แผนที่ + Places + Directions | แสดงที่ตั้งวัด, นำทางไปงาน |
| **Calendar** | จัดการนัด + Events | ปฏิทินกิจกรรม, ตารางคอร์สธรรมะ |
| **Sheets** | อ่าน-เขียน Google Sheet เป็น DB | ทะเบียนผู้บริจาค, ลงทะเบียน |
| **Drive** | จัดการไฟล์บน Drive | คลังบทเทศน์, รูปภาพกิจกรรม |
| **Gmail** | ส่งอีเมล + อ่าน inbox | ส่งใบอนุโมทนา / แจ้งเตือน |
| **YouTube** | ดึงข้อมูลวิดีโอ | embed playlist บทเทศน์ |
| **Translate** | แปลภาษา | แปลธรรมะเป็นหลายภาษา |
| **Vision** | วิเคราะห์รูปภาพ | OCR ใบเสร็จบริจาค |

### 4.3 2 รูปแบบการใช้ Google APIs
**(1) API Key** — สำหรับข้อมูลสาธารณะ (Maps, Translate)
- สมัครที่ [Google Cloud Console](https://console.cloud.google.com) → สร้าง Project → Enable API → สร้าง API Key
- ใส่ API Key ใน request ได้เลย

**(2) OAuth** — สำหรับข้อมูลส่วนตัวของ user (Calendar, Sheets, Drive)
- ผู้ใช้ login ด้วย Google เพื่อให้สิทธิ์เว็บเรา
- ซับซ้อนกว่า แต่ AI ช่วยทำได้ทั้งหมด

> 💡 **เริ่มจาก API Key ก่อน** — ง่ายและเห็นผลเร็ว

### 4.4 Mini Walkthrough 1: Google Maps
**Use Case:** แสดงแผนที่ที่ตั้งวัดบนหน้า "ติดต่อเรา"

**Setup:**
1. ไป Google Cloud Console → Enable **Maps JavaScript API**
2. สร้าง API Key + จำกัด domain (เพื่อความปลอดภัย)

**Prompt ให้ AI:**
> *"ในเว็บของฉัน เพิ่มหน้า 'ติดต่อเรา' ที่มีแผนที่ Google Maps แสดงพิกัด `13.7563, 100.5018` (วัดสมมติ) ขนาดเต็มความกว้าง สูง 400px มี marker ตรงกลาง ใช้ Maps JavaScript API + เก็บ API Key ใน `.env` (`VITE_GOOGLE_MAPS_KEY`)"*

**สิ่งที่ได้:** แผนที่ฝังในเว็บ + นำทางได้

### 4.5 Mini Walkthrough 2: Google Calendar
**Use Case:** แสดงตารางกิจกรรมของวัดที่ดึงจาก Google Calendar อัตโนมัติ

**ทำไม Calendar เหมาะกับงานนี้:**
- คนที่ดูแลปฏิทินไม่ต้องเขียนโค้ด — แค่เพิ่ม event ใน Google Calendar
- เว็บอัปเดตอัตโนมัติ → "Knowledge Base กลาง" ที่ทุกคนแก้ได้

**Pattern การใช้:**
- **อ่าน Events จาก Calendar สาธารณะ** → API Key พอ
- **สร้าง/แก้ Events ในนามผู้ใช้** → ต้อง OAuth

**Prompt ตัวอย่าง:**
> *"สร้างหน้า 'ปฏิทินกิจกรรม' ที่ดึง events จาก Google Calendar ID ที่ฉันให้ (เป็น calendar สาธารณะ) แสดงเป็นรายการเรียงตามวันที่ — แต่ละ event มีชื่อ, วันเวลา, สถานที่ ใช้ Calendar API v3 + Tailwind"*

### 4.6 Mini Walkthrough 3: Google Sheets เป็น "DB ง่ายๆ"
**Use Case:** ใช้ Google Sheet เก็บข้อมูลผู้บริจาค/ผู้ลงทะเบียน แล้วให้เว็บอ่าน-เขียนได้

**ทำไมเหมาะมาก:**
- ไม่ต้อง setup database
- คนที่ไม่เป็น tech แก้ข้อมูลผ่าน Sheet ได้
- export/share ง่าย เพราะอยู่ใน Google Drive อยู่แล้ว

**2 ทางเลือก:**
1. **Sheets API + Service Account** (สำหรับ DB ที่เว็บใช้)
2. **Apps Script Web App** — ทางลัด, ทำ endpoint ที่อ่าน/เขียน Sheet ได้โดยไม่ต้องเขียน backend

**Prompt ตัวอย่าง:**
> *"สร้างหน้าฟอร์มลงทะเบียนผู้เข้าร่วมงานบุญ — เมื่อ user กด submit ให้บันทึกลงใน Google Sheet ที่ฉันให้ ID ใช้ Google Apps Script เป็น Web App endpoint (ฉันจะตั้งค่าเอง) อธิบายขั้นตอนการสร้าง Apps Script ให้ด้วย"*

> 💡 **เคล็ดลับ:** Sheet ตัวเดียวกันใช้เป็น "ตัวกลาง" ระหว่าง Form (เว็บ) → Sheet (ข้อมูล) → Looker Studio (Dashboard) → ครบ workflow ในเครื่องมือ Google เท่านั้น

### 4.7 Pattern ที่เจอบ่อยในวัด/โรงเรียน
- **ลงทะเบียนผ่านเว็บ → Sheet** (Apps Script)
- **เว็บแสดงปฏิทินกิจกรรม** (Calendar API public)
- **เว็บมีแผนที่ + เส้นทาง** (Maps + Directions)
- **ส่งใบอนุโมทนาเป็น PDF อัตโนมัติ** (Drive + Apps Script)
- **อ่านข้อความจากใบเสร็จ** (Vision OCR)

### 4.8 Workshop เล็ก: เลือก 1 อย่างมาลอง
ในเวลาที่เหลือของส่วนนี้ เลือก 1 mini-walkthrough ข้างบน → สั่ง AI สร้างในโปรเจกต์ของตัวเอง

---

## ⏸️ พักเบรก
*(10 นาที)*

---

## 🌟 ส่วนที่ 5 — LINE OA + Webhook: ช่องทางที่เหมาะกับคนไทย
*(40 นาที)*

> 🎯 **เป้าหมาย:** ในไทย LINE คือช่องทางที่คนใช้ทุกวัน — รู้จัก **LINE OA + Messaging API + Webhook** จะเปิดให้เว็บแอปของเราเชื่อมกับผู้ใช้ผ่านช่องทางที่พวกเขาใช้อยู่แล้ว ไม่ต้องให้ติดตั้ง app ใหม่

### 5.1 ทำไม LINE OA เหมาะกับงานคนไทย
- **คนไทย 50+ ล้านคนใช้ LINE** — ทุกวัด/โรงเรียนน่าจะมี OA อยู่แล้ว หรือสร้างฟรีได้ทันที
- **Notification ส่งถึงทันที** โดยไม่ต้อง install app ใหม่
- **ตอบกลับอัตโนมัติ + รับฟอร์ม + แสดงเมนู** ได้ในที่เดียว
- **ฟรี** (จำกัดจำนวนข้อความ broadcast ฟรีต่อเดือน — รับ-ตอบไม่จำกัด)

### 5.2 LINE OA + Messaging API คืออะไร
- **LINE Official Account (OA)** = บัญชี LINE ของวัด/องค์กร — สร้างฟรีที่ [LINE Official Account Manager](https://manager.line.biz)
- **Messaging API** = ช่องทางให้โปรแกรมของเราส่งและรับข้อความผ่าน OA — เปิดที่ [LINE Developers Console](https://developers.line.biz)
- **ได้:** Channel Access Token (สำหรับส่งข้อความ) + Channel Secret (สำหรับยืนยันว่าข้อความมาจาก LINE จริง)

### 5.3 Webhook คืออะไร
**Webhook** = URL ที่บริการอื่นเรียกหาเราเมื่อมีเหตุการณ์เกิด — **ตรงข้ามกับ API ปกติ**
- **API ปกติ:** เราเรียกหาเค้า (Pull)
- **Webhook:** เค้าเรียกหาเรา (Push)

**ตัวอย่าง:** ผู้ใช้พิมพ์ใน LINE → LINE ส่ง `POST` request มาที่ Webhook URL ของเรา → เราตอบกลับด้วย Reply API

### 5.4 สถาปัตยกรรม LINE OA + Web App
```
User           LINE              Our Backend         Our Web/DB
 │              │                      │                  │
 │── chat ─────>│                      │                  │
 │              │── POST webhook ─────>│                  │
 │              │                      │── read/write ──>│
 │              │                      │<── data ────────│
 │              │<── reply API ────────│                  │
 │<── reply ────│                      │                  │
```

### 5.5 Use Cases ในวัด / โรงเรียน / ศูนย์ปฏิบัติธรรม
| Use Case | กลไก |
|---|---|
| **ส่งแจ้งเตือนงานบุญ** ถึงผู้ติดตาม | Broadcast หรือ Push API |
| **รับสมัคร / ลงทะเบียน** ผ่าน LINE | LIFF + Webhook |
| **ตอบ FAQ อัตโนมัติ** (เวลาเปิด, แผนที่, เมนู) | Reply API + keyword matching |
| **ส่งใบอนุโมทนา** เมื่อมีคนบริจาค | Push API + image generation |
| **ดูปฏิทินกิจกรรม** ผ่าน LINE | Rich Menu + LIFF |
| **AI Chatbot ใน LINE** (รับคำถามแล้วใช้ Claude/GPT ตอบ) | Webhook + LLM API |

### 5.6 LIFF — เว็บแอปของเรารันใน LINE ได้
**LIFF (LINE Front-end Framework)** = ฝังเว็บที่เราสร้างไว้แล้วใน LINE app ได้ทันที
- User คลิกลิงก์ใน LINE → เปิดเว็บภายใน LINE (ไม่ออกไปเบราว์เซอร์)
- เว็บได้ข้อมูล User ID จาก LINE → ผูกข้อมูลกับ profile ผู้ใช้ได้
- **เหมาะกับ:** ฟอร์มลงทะเบียน, แสดง Dashboard, ระบบจองที่พัก

### 5.7 Prompt ตัวอย่าง: สร้าง LINE Bot เบื้องต้น
> *"ฉันมี LINE OA + Channel Access Token + Channel Secret แล้ว ช่วยสร้าง Webhook endpoint บน Vercel Serverless Function ที่:*
> *- รับข้อความจาก LINE Messaging API*
> *- ถ้าผู้ใช้พิมพ์ 'ลงทะเบียน' → reply กลับด้วยลิงก์ฟอร์ม LIFF*
> *- ถ้าพิมพ์ 'ปฏิทิน' → reply ปฏิทินกิจกรรมเดือนนี้ (mock data ก่อนได้)*
> *- ถ้าพิมพ์อย่างอื่น → reply แสดง Quick Reply ให้เลือก*
> *- ใช้ Node.js + LINE Bot SDK (`@line/bot-sdk`)*
> *- บอกขั้นตอนการตั้งค่า Webhook URL ใน LINE Developers Console ให้ฉันด้วย"*

### 5.8 ขั้นตอน Setup คร่าวๆ
1. สร้าง **LINE OA** ที่ Official Account Manager
2. เปิด **Messaging API** ใน Developers Console → ได้ Channel Access Token
3. Deploy Webhook ที่ **Vercel** (หรือ Cloudflare Workers / Supabase Edge Functions)
4. กลับมาที่ Developers Console → ใส่ Webhook URL → กด Verify
5. ทดสอบโดยพิมพ์ใน LINE OA

### 5.9 แหล่งศึกษาต่อ
- **[LINE Developers](https://developers.line.biz/)** — official docs (มีภาษาไทยบางส่วน)
- **[LINE Developers Thailand](https://www.facebook.com/groups/linedeveloperth)** (Facebook Group) — ชุมชนไทย ถามตอบเร็ว
- **LINE API Expert** — ค้น YouTube "LINE OA ภาษาไทย" จะเจอคลิปสอนเยอะ
- ตัวอย่างโค้ดบน GitHub: `line/line-bot-sdk-nodejs`

> 💡 **ต่อยอด:** ถ้าใส่ Claude API ใน Webhook → ได้ **AI Chatbot ที่อยู่ใน LINE OA ของวัด** ตอบคำถามอัตโนมัติ 24/7

---

## 📋 ส่วนที่ 6 — สรุปบทเรียน & การบ้าน
*(15 นาที)*

### 6.1 สิ่งที่ได้เรียนวันนี้
- **API + JSON** = เมนูให้โปรแกรมสั่งข้อมูลจากบริการอื่น
- **fetch()** = คำสั่ง JS เรียก API (AI เขียนให้)
- **Google APIs** = Maps / Calendar / Sheets / Drive (ใช้บ่อยที่สุดในงานจริง)
- **LINE OA + Webhook + LIFF** = ช่องทางสื่อสารกับผู้ใช้ที่เหมาะกับคนไทย

### 6.2 ภารกิจในห้องเรียน
- [ ] สมัคร API Key: OpenWeatherMap + Google Cloud
- [ ] สร้าง Weather App (Workshop 1)
- [ ] เลือก 1 Google API mini-walkthrough (Maps / Calendar / Sheets) → ทำในโปรเจกต์ของตัวเอง
- [ ] สร้าง LINE OA + Webhook ที่ตอบ keyword ได้ (ส่วน 5.7)
- [ ] Deploy ขึ้น Vercel (ระวัง! อย่า commit API Key)

### 6.3 การบ้าน
1. **เลือก 1 ช่องทาง** ที่อยากเชื่อมกับเว็บแอปของวัด/โรงเรียน — Google Sheets, LINE OA, หรือ Google Calendar
2. **คิด Workflow จริง:** เช่น "user สมัครงานบุญผ่าน LINE OA → ข้อมูลไป Sheet → ส่งการ์ดยืนยันกลับใน LINE"
3. **ลอง integrate เพิ่ม:** เช่น เพิ่ม Google Maps แสดงที่ตั้งวัด, หรือเพิ่ม keyword ที่ LINE OA ตอบ
4. **เตรียมตัวคาบหน้า (S6 - Final Project):** เลือกหัวข้อโปรเจกต์ที่จะทำ + ร่าง `requirements.md` มา

---

## 💡 เทคนิคสำหรับผู้สอน (Instructor Notes)
1. **ความปลอดภัย API Key เป็นเรื่องสำคัญ** — สาธิตว่าถ้า commit เข้า Git ก็จะมีคนใช้ฟรีจน credit หมด → ต้อง `.env` + `.gitignore` ทุกครั้ง
2. **ถ้า CORS error ในห้อง** ให้ AI แก้ด้วย serverless function (เช่น Vercel Functions) หรือใช้ proxy
3. **ขายไอเดียว่า "AI + ช่องทางที่คนใช้จริง = สินทรัพย์"** — เว็บที่เชื่อม Google Sheets + LINE OA ใช้ได้ทันทีในวัด/โรงเรียน
4. **LINE OA setup กินเวลา** — ให้นิสิตทำตั้งแต่ต้นชั่วโมงพักเบรก เพื่อให้รอ verify ได้ทันในชั่วโมง
