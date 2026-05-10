import React from 'react';

function App() {
  const baseAssetPath = '/AI-First-Web-Development-Course/assets';

  return (
    <div className="min-h-screen bg-deep-space text-[#e3e2e2] font-body relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      {/* Header / Hero */}
      <header className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto z-10 border-b border-border-glass">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-cyan animate-pulse"></span>
              <span className="font-mono text-xs font-bold text-primary-cyan uppercase tracking-widest">
                System Initialized // 2026
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
              AI-First <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-secondary-purple text-glow-cyan">
                Web Architect
              </span>
            </h1>
            
            <p className="font-body text-lg text-[#b9cacb] mb-10 leading-relaxed max-w-xl">
              ก้าวเข้าสู่ยุคของการเป็น "ผู้กำกับ AI" แทนการเป็นแค่คนเขียนโค้ด
              หลักสูตรสำหรับผู้เริ่มต้น ที่จะสอนให้คุณสร้างเว็บไซต์และ Web Apps จริง
              โดยใช้ AI เป็นเครื่องมือหลักในทุกขั้นตอน
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="glass-panel px-8 py-4 font-mono text-primary-cyan uppercase tracking-widest text-sm hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan flex items-center justify-center gap-2">
                <span className="text-secondary-purple">{'/>'}</span> Execute Sequence
              </button>
            </div>
            
            <div className="mt-12 glass-panel p-6 inline-block w-full max-w-lg">
              <div className="flex items-start gap-5 mb-4">
                <img
                  src={`${baseAssetPath}/images/teacher.png`}
                  alt="Teacher Profile"
                  className="w-20 h-20 rounded-md border border-border-glass object-cover"
                />
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <p className="font-mono text-xs text-secondary-purple uppercase tracking-wider">Instructor_Root</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan animate-pulse"></span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl">พระมหาอนวัช ภูริวโร <span className="text-[#b9cacb] font-normal text-base">(หลวงพี่ภูริ)</span></h3>
                  <p className="text-primary-cyan text-sm mt-1">หัวหน้าศูนย์พัฒนาเทคโนโลยีเพื่อศีลธรรม</p>
                  <p className="text-[#b9cacb] text-xs font-mono mt-0.5">Head of the Center of Technological Development for Morality</p>
                </div>
              </div>
              <div className="space-y-2 mt-4 pt-4 border-t border-border-glass/50 font-mono text-xs">
                 <div className="flex items-center gap-3">
                    <span className="text-secondary-purple w-12">ORG:</span>
                    <span className="text-[#e3e2e2] font-body text-sm">สถาบันพัฒนาเยาวชนโลก Gydi</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-secondary-purple w-12">WEB:</span>
                    <a href="https://purivaro.com" target="_blank" rel="noreferrer" className="text-primary-cyan hover:underline hover:text-white transition-colors">purivaro.com</a>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-secondary-purple w-12">MAIL:</span>
                    <a href="mailto:aun.puri@gmail.com" className="text-primary-cyan hover:underline hover:text-white transition-colors">aun.puri@gmail.com</a>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-cyan to-secondary-purple transform rotate-3 scale-105 opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="glass-panel p-2 relative z-10">
              <div className="absolute top-0 left-0 w-full h-8 bg-[rgba(255,255,255,0.02)] border-b border-border-glass flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              <img
                src={`${baseAssetPath}/course_hero.png`}
                alt="Course Hero"
                className="w-full object-cover aspect-[4/3] mt-8 grayscale-[20%] contrast-125"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">Syllabus Overview</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-cyan to-secondary-purple mb-6"></div>
          <p className="text-[#b9cacb] max-w-2xl font-body text-lg">
            จากคนที่ไม่เคยเขียนโปรแกรม สู่การมีโปรเจกต์เว็บแอปพลิเคชันเป็นของตัวเองใน 6 คาบเรียน
            โดยใช้เทคนิค Context Engineering ระดับมืออาชีพ
          </p>
        </div>

        <div className="space-y-12">
          {/* Session 1 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-5 relative border-r border-border-glass p-2">
                 <div className="absolute top-4 left-4 font-mono text-xs text-primary-cyan uppercase tracking-widest bg-deep-space/80 px-2 py-1 border border-border-glass z-10">
                    MODULE_01
                 </div>
                <img
                  src={`${baseAssetPath}/session1_banner.png`}
                  alt="Session 1"
                  className="w-full h-full object-cover min-h-[300px] grayscale-[30%] contrast-125"
                />
              </div>
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-display text-3xl font-bold text-white mb-6">Build & Deploy Your First Webpage</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  สร้างเว็บไซต์แรกและนำขึ้นออนไลน์ตั้งแต่วันแรก! เรียนรู้วิวัฒนาการจากการพิมพ์ Prompt ธรรมดา
                  มาสู่เทคนิค <strong className="text-primary-cyan font-normal">Context Engineering</strong> และ <strong className="text-primary-cyan font-normal">Spec-Driven Development</strong>
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้ ChatGPT/Gemini สร้างคอนเทนต์และตอบกลับเป็น Markdown</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้ Antigravity สร้าง <span className="text-primary-cyan">requirements.md</span> (Single Source of Truth)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้คำสั่ง Git CLI นำเว็บขึ้น GitHub Pages</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Session 2 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 border-r border-border-glass">
                <h3 className="font-display text-3xl font-bold text-white mb-6">Mastering Web Layout with AI</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  "นักออกแบบไม่ใช่คนที่วาดรูปเก่ง แต่คือคนที่จัดวางองค์ประกอบเป็น" เรียนรู้โครงสร้าง
                  Box Model และใช้ <strong className="text-primary-cyan font-normal">Google Stitch</strong> เป็นพระเอกในการเนรมิต UI ให้สวยงามระดับมืออาชีพ
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">เข้าใจโครงสร้าง Box Model, Margin, Padding, Container</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้ <span className="text-primary-cyan">Google Stitch</span> ขึ้นโครง UI และปรับ Theme แบบ Visual</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">นำโค้ดที่ได้มาปรับปรุงใน Editor และจัดหน้าจอแบบ Responsive</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 relative order-1 md:order-2 p-2">
                 <div className="absolute top-4 right-4 font-mono text-xs text-primary-cyan uppercase tracking-widest bg-deep-space/80 px-2 py-1 border border-border-glass z-10">
                    MODULE_02
                 </div>
                <img
                  src={`${baseAssetPath}/session2_banner.png`}
                  alt="Session 2"
                  className="w-full h-full object-cover min-h-[300px] grayscale-[30%] contrast-125"
                />
              </div>
            </div>
          </section>

          {/* Session 3 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-5 relative border-r border-border-glass p-2">
                 <div className="absolute top-4 left-4 font-mono text-xs text-primary-cyan uppercase tracking-widest bg-deep-space/80 px-2 py-1 border border-border-glass z-10">
                    MODULE_03
                 </div>
                <img
                  src={`${baseAssetPath}/session3_banner.png`}
                  alt="Session 3"
                  className="w-full h-full object-cover min-h-[300px] grayscale-[30%] contrast-125"
                />
              </div>
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-display text-3xl font-bold text-white mb-6">Interactive JavaScript & AI-Assisted Debugging</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  ทำเว็บให้ขยับได้ + Debug แบบง่ายด้วย AI เรียนรู้วิธีการทำให้หน้าเว็บตอบสนองกับผู้ใช้ และการใช้ AI ในการหาบั๊กและแก้ปัญหา
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">เข้าใจ DOM และ Event Listener เพื่อสร้างการโต้ตอบ</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ปรับเปลี่ยนข้อความ สี และองค์ประกอบต่างๆ แบบไดนามิก</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้ AI เป็นผู้ช่วยในการวิเคราะห์ Error และ Debug โค้ด</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Session 4 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 border-r border-border-glass">
                <h3 className="font-display text-3xl font-bold text-white mb-6">Web Apps with Real Logic & Databases</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  จากหน้าเว็บธรรมดาก้าวสู่การทำงานจริง เข้าใจการจัดการ State และเรียนรู้การเชื่อมต่อ <strong>Database</strong> ง่ายๆ ด้วย AI (เช่น Google Sheets, SQLite, Firebase, Cloudflare D1 หรือ MySQL/PostgreSQL) ให้ข้อมูลไม่หายเมื่อรีเฟรชหน้าเว็บ
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ทำความเข้าใจ State และการอัปเดต UI ให้ตอบสนองตามข้อมูลจริง</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้ AI เชื่อมต่อฐานข้อมูลหลากรูปแบบเพื่อบันทึกข้อมูลอย่างถาวร</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">สั่ง AI ให้สร้าง Web App เต็มรูปแบบ เช่น To-Do, Notes หรือ Dashboard</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 relative order-1 md:order-2 p-2">
                 <div className="absolute top-4 right-4 font-mono text-xs text-primary-cyan uppercase tracking-widest bg-deep-space/80 px-2 py-1 border border-border-glass z-10">
                    MODULE_04
                 </div>
                <img
                  src={`${baseAssetPath}/session4_banner.png`}
                  alt="Session 4"
                  className="w-full h-full object-cover min-h-[300px] grayscale-[30%] contrast-125"
                />
              </div>
            </div>
          </section>

          {/* Session 5 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-5 relative border-r border-border-glass p-2">
                 <div className="absolute top-4 left-4 font-mono text-xs text-primary-cyan uppercase tracking-widest bg-deep-space/80 px-2 py-1 border border-border-glass z-10">
                    MODULE_05
                 </div>
                <img
                  src={`${baseAssetPath}/session5_banner.png`}
                  alt="Session 5"
                  className="w-full h-full object-cover min-h-[300px] grayscale-[30%] contrast-125"
                />
              </div>
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-display text-3xl font-bold text-white mb-6">API Integration & Intro to RAG</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  ดึงข้อมูลผ่าน API และทำความรู้จักกับ <strong>RAG (Retrieval-Augmented Generation)</strong> เพื่อสร้าง AI Chatbot ที่สามารถตอบคำถามจากฐานข้อมูลหรือเอกสารของเราเองได้
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ปูพื้นฐาน API และ JSON แบบเข้าใจง่าย ไม่ต้องเขียนระบบหลังบ้านเอง</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">เรียนรู้แนวคิด RAG เบื้องต้น ทำให้ AI ฉลาดขึ้นด้วยข้อมูลของเรา</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">สร้าง Web App เชื่อมต่อ LLM API หรือดึงข้อมูลแบบไดนามิก</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Session 6 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 border-r border-border-glass">
                <h3 className="font-display text-3xl font-bold text-white mb-6">Final Project: AI-Powered Web/App Development</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  นำความรู้ทั้งหมดมาสร้างโปรเจกต์จริงของตัวเองตั้งแต่ต้นจนจบ ตั้งแต่การคิดไอเดีย ออกแบบ เขียนโค้ด ไปจนถึงการ Deploy งานขึ้นระบบออนไลน์
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ร่วมระดมความคิดและให้ AI ช่วยวางโครงสร้างโปรเจกต์</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ทำงานร่วมกับ AI ในทุกมิติ (UI/UX, Logic, API Integration)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">นำเสนอผลงานจริงบน Portfolio ออนไลน์ที่ Deploy ด้วย AI</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 relative order-1 md:order-2 p-2">
                 <div className="absolute top-4 right-4 font-mono text-xs text-primary-cyan uppercase tracking-widest bg-deep-space/80 px-2 py-1 border border-border-glass z-10">
                    MODULE_06
                 </div>
                <img
                  src={`${baseAssetPath}/session6_banner.png`}
                  alt="Session 6"
                  className="w-full h-full object-cover min-h-[300px] grayscale-[30%] contrast-125"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border-glass bg-deep-space py-12 text-center z-10">
        <div className="flex justify-center mb-6 opacity-30 hover:opacity-100 transition-opacity">
          <img src={`${baseAssetPath}/images/teacher.png`} alt="Teacher" className="h-12 w-auto" />
        </div>
        <p className="font-mono text-xs text-[#b9cacb] tracking-widest uppercase">© 2026 AI-First Web Architecture.</p>
        <p className="font-mono text-xs text-[#474646] tracking-widest uppercase mt-4">System powered by React + Tailwind CSS + Google Stitch.</p>
      </footer>
    </div>
  );
}

export default App;
