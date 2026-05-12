import { useState, useEffect } from 'react';
import SessionDetail from './SessionDetail';

const sessionLoaders = {
  '1': () => import('../../markdown/session-1.md?raw').then((m) => m.default),
  '2': () => import('../../markdown/session-2.md?raw').then((m) => m.default),
  '3': () => import('../../markdown/session-3.md?raw').then((m) => m.default),
  '4': () => import('../../markdown/session-4.md?raw').then((m) => m.default),
  '5': () => import('../../markdown/session-5.md?raw').then((m) => m.default),
  '6': () => import('../../markdown/session-6.md?raw').then((m) => m.default),
};

function App() {
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');
  const [sessionMarkdown, setSessionMarkdown] = useState(null);
  const baseAssetPath = '/AI-First-Web-Development-Course/assets';

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  const sessionMatch = route.match(/^\/session\/(\d+)$/);
  const sessionId = sessionMatch?.[1];

  useEffect(() => {
    if (sessionId && sessionLoaders[sessionId]) {
      setSessionMarkdown(null);
      let cancelled = false;
      sessionLoaders[sessionId]().then((content) => {
        if (!cancelled) setSessionMarkdown(content);
      });
      return () => { cancelled = true; };
    }
  }, [sessionId]);

  if (sessionId && sessionLoaders[sessionId]) {
    const moduleLabel = `MODULE_${sessionId.padStart(2, '0')} // Session Detail`;
    return (
      <SessionDetail
        moduleLabel={moduleLabel}
        content={sessionMarkdown ?? '_กำลังโหลด..._'}
        onBack={() => { window.location.hash = ''; }}
      />
    );
  }

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
                  onClick={() => setIsTeacherModalOpen(true)}
                  className="w-20 h-20 rounded-md border border-border-glass object-cover cursor-pointer hover:border-primary-cyan hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all duration-300"
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
                src={`${baseAssetPath}/new_hero.png`}
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
                <h3 className="font-display text-3xl font-bold text-white mb-6">Build & Deploy Your First Webpage with AI</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  สร้างเว็บแรก + Deploy ขึ้นออนไลน์ในคาบเดียว! เริ่มจาก mindset สำคัญที่สุด —
                  <strong className="text-primary-cyan font-normal"> ใช้ AI แบบ Agent ไม่ใช่ Chatbot</strong> ฝึกตั้งคำถามกลับและ brief งานแบบมืออาชีพ
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">เปลี่ยน mindset: <span className="text-primary-cyan">Agent vs Chatbot</span> และศิลปะการตั้งคำถามกลับ</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">เขียน <span className="text-primary-cyan">requirements.md</span> เป็น Single Source of Truth</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้ Git CLI + Deploy เว็บขึ้น <span className="text-primary-cyan">GitHub Pages</span></p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#/session/1"
                    className="inline-flex items-center gap-2 glass-panel px-6 py-3 font-mono text-primary-cyan uppercase tracking-widest text-xs hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan"
                  >
                    <span className="text-secondary-purple">{'>'}</span> อ่านรายละเอียด
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Session 2 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 border-r border-border-glass">
                <h3 className="font-display text-3xl font-bold text-white mb-6">Designing & Debugging Interactive UI with AI</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  ออกแบบ UI ระดับมืออาชีพด้วย <strong className="text-primary-cyan font-normal">Google Stitch</strong> ใส่ลูกเล่นให้เว็บโต้ตอบได้
                  พร้อมเรียนรู้ <strong className="text-primary-cyan font-normal">AI-Assisted Debugging</strong> เมื่อโค้ดมีปัญหา
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ดึงดีไซน์จาก <span className="text-primary-cyan">Google Stitch ผ่าน MCP</span> มาเป็นโค้ดอัตโนมัติ</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">DOM & Event Listener — ทำ Modal, Theme Switcher, Responsive Layout</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ใช้ <span className="text-primary-cyan">DevTools + AI</span> หาและแก้ Bug ด้วย Error Message / Screenshot</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#/session/2"
                    className="inline-flex items-center gap-2 glass-panel px-6 py-3 font-mono text-primary-cyan uppercase tracking-widest text-xs hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan"
                  >
                    <span className="text-secondary-purple">{'>'}</span> อ่านรายละเอียด
                  </a>
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
                <h3 className="font-display text-3xl font-bold text-white mb-6">Building Database-Driven Web Apps with AI</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  จากเว็บหน้าเดียว สู่ <strong className="text-primary-cyan font-normal">Web App ที่ใช้งานจริงได้</strong> มีทั้ง Logic, State และต่อ
                  <strong className="text-primary-cyan font-normal"> Database</strong> สำหรับเก็บข้อมูลถาวร
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">เข้าใจ State + Logic — ออกแบบตรรกะการทำงานของแอป</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">เลือกใช้ DB ที่เหมาะ: <span className="text-primary-cyan">Google Sheets, Firebase, SQLite, Cloudflare D1</span></p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">สั่ง AI ทำ <span className="text-primary-cyan">CRUD</span> ครบวงจร: Create / Read / Update / Delete</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">สร้าง <span className="text-primary-cyan">Dashboard</span> แสดงข้อมูลจาก DB เป็นตาราง / กราฟ / สรุปยอด</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#/session/3"
                    className="inline-flex items-center gap-2 glass-panel px-6 py-3 font-mono text-primary-cyan uppercase tracking-widest text-xs hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan"
                  >
                    <span className="text-secondary-purple">{'>'}</span> อ่านรายละเอียด
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Session 4 */}
          <section className="glass-panel glass-panel-hover transition-all duration-300">
            <div className="grid md:grid-cols-12 h-full">
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 border-r border-border-glass">
                <h3 className="font-display text-3xl font-bold text-white mb-6">From Problem to Product — System Design with AI</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  คิดเป็น <strong className="text-primary-cyan font-normal">Product Designer</strong> ไม่ใช่แค่คนสั่ง AI เขียนโค้ด —
                  ออกแบบ solution ให้ตอบโจทย์งานจริงด้วย Backward Design และ Agent Framework
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">Agent Framework: <span className="text-primary-cyan">Context · Goal · Constraints · Files · Workflow</span></p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">Backward Design + Workflow: <span className="text-primary-cyan">Research → Plan → Generate → Review</span></p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">Case Studies จากงานจริง: HR, ขาย, ครู, ร้านค้า — เล็ง · ยิง · ปรับ</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#/session/4"
                    className="inline-flex items-center gap-2 glass-panel px-6 py-3 font-mono text-primary-cyan uppercase tracking-widest text-xs hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan"
                  >
                    <span className="text-secondary-purple">{'>'}</span> อ่านรายละเอียด
                  </a>
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
                <h3 className="font-display text-3xl font-bold text-white mb-6">External APIs, Google & LINE Integration</h3>
                <p className="text-[#b9cacb] mb-8 leading-relaxed font-body">
                  เชื่อมเว็บแอปของเรากับโลกภายนอกผ่าน <strong className="text-primary-cyan font-normal">API + Google APIs + LINE OA</strong> — ช่องทางที่คนไทยใช้กันจริงในชีวิตประจำวัน
                </p>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]">ปูพื้นฐาน <span className="text-primary-cyan">API + JSON</span> เข้าใจวิธีดึงข้อมูลจากบริการภายนอก</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]"><span className="text-primary-cyan">Google APIs</span> — Maps, Calendar, Sheets เป็น DB ง่ายๆ</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-secondary-purple mt-0.5">{'>'}</span>
                    <p className="text-[#e3e2e2]"><span className="text-primary-cyan">LINE OA + Webhook + LIFF</span> — เชื่อมเว็บกับ LINE สำหรับงานคนไทย</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#/session/5"
                    className="inline-flex items-center gap-2 glass-panel px-6 py-3 font-mono text-primary-cyan uppercase tracking-widest text-xs hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan"
                  >
                    <span className="text-secondary-purple">{'>'}</span> อ่านรายละเอียด
                  </a>
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
                <div className="mt-8">
                  <a
                    href="#/session/6"
                    className="inline-flex items-center gap-2 glass-panel px-6 py-3 font-mono text-primary-cyan uppercase tracking-widest text-xs hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan"
                  >
                    <span className="text-secondary-purple">{'>'}</span> อ่านรายละเอียด
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 relative order-1 md:order-2 p-2">
                 <div className="absolute top-4 right-4 font-mono text-xs text-primary-cyan uppercase tracking-widest bg-deep-space/80 px-2 py-1 border border-border-glass z-10">
                    MODULE_06
                 </div>
                <img
                  src={`${baseAssetPath}/session6_banner2.png`}
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
        <div className="flex flex-col items-center justify-center mb-8 opacity-40 hover:opacity-100 transition-opacity">
          <img 
            src={`${baseAssetPath}/images/teacher.png`} 
            alt="Teacher" 
            className="h-12 w-12 rounded-md object-cover border border-border-glass mb-3 cursor-pointer" 
            onClick={() => setIsTeacherModalOpen(true)} 
          />
          <a href="https://purivaro.com" target="_blank" rel="noreferrer" className="font-mono text-xs text-primary-cyan hover:text-white tracking-widest uppercase transition-colors">
            purivaro.com
          </a>
        </div>
        <p className="font-mono text-xs text-[#b9cacb] tracking-widest uppercase">© 2026 AI-First Web Architecture.</p>
        <p className="font-mono text-xs text-[#474646] tracking-widest uppercase mt-4">System powered by React + Tailwind CSS + Google Stitch.</p>
      </footer>

      {/* Teacher Profile Modal */}
      {isTeacherModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="absolute inset-0" onClick={() => setIsTeacherModalOpen(false)}></div>
          <div className="relative glass-panel border border-primary-cyan/40 max-w-2xl w-full p-8 shadow-[0_0_50px_rgba(0,242,255,0.15)] transform scale-100 transition-transform">
            <button 
              onClick={() => setIsTeacherModalOpen(false)}
              className="absolute top-4 right-4 text-[#b9cacb] hover:text-primary-cyan transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="shrink-0 relative group">
                <div className="absolute inset-0 bg-primary-cyan/20 blur-xl rounded-xl group-hover:bg-primary-cyan/40 transition-colors duration-500"></div>
                <img
                  src={`${baseAssetPath}/images/teacher.png`}
                  alt="Teacher Profile"
                  className="relative w-40 h-40 md:w-56 md:h-56 rounded-xl border-2 border-primary-cyan object-cover shadow-[0_0_25px_rgba(0,242,255,0.3)]"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2 w-full">
                  <span className="w-2 h-2 rounded-full bg-secondary-purple animate-pulse"></span>
                  <p className="font-mono text-xs text-secondary-purple uppercase tracking-wider">Instructor_Profile // Authorized</p>
                </div>
                
                <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-1">พระมหาอนวัช ภูริวโร</h2>
                <p className="text-xl text-[#b9cacb] mb-4">หลวงพี่ภูริ</p>
                
                <div className="w-12 h-1 bg-gradient-to-r from-primary-cyan to-secondary-purple mx-auto md:mx-0 mb-6"></div>

                <div className="space-y-4 text-left">
                  <div>
                    <h4 className="text-xs font-mono text-primary-cyan uppercase tracking-wider mb-1">Position</h4>
                    <p className="text-[#e3e2e2]">หัวหน้าศูนย์พัฒนาเทคโนโลยีเพื่อศีลธรรม</p>
                    <p className="text-sm text-[#b9cacb] mt-0.5">Head of the Center of Technological Development for Morality</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-mono text-primary-cyan uppercase tracking-wider mb-1">Organization</h4>
                    <p className="text-[#e3e2e2]">สถาบันพัฒนาเยาวชนโลก Gydi</p>
                  </div>

                  <div className="pt-4 border-t border-border-glass grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-mono text-secondary-purple uppercase tracking-wider mb-1">Website</h4>
                      <a href="https://purivaro.com" target="_blank" rel="noreferrer" className="text-primary-cyan hover:text-white transition-colors break-all">purivaro.com</a>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-secondary-purple uppercase tracking-wider mb-1">Email</h4>
                      <a href="mailto:aun.puri@gmail.com" className="text-primary-cyan hover:text-white transition-colors break-all">aun.puri@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
