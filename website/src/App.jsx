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
            
            <div className="mt-12 flex items-center gap-4 glass-panel p-4 inline-flex">
              <img
                src={`${baseAssetPath}/images/teacher.png`}
                alt="Teacher Profile"
                className="w-12 h-12 rounded-none border border-border-glass object-cover grayscale opacity-80"
              />
              <div>
                <p className="font-mono text-xs text-secondary-purple uppercase tracking-wider">Instructor_Root</p>
                <p className="font-display font-semibold text-white">พระมหาอนวัช ภูริวโร</p>
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

          {/* Coming Soon... */}
          <div className="py-12 border-t border-border-glass mt-12 flex justify-center">
            <div className="glass-panel px-6 py-3 flex items-center gap-4">
              <span className="w-2 h-2 bg-secondary-purple animate-ping rounded-full"></span>
              <p className="font-mono text-sm text-[#b9cacb] uppercase tracking-widest">Awaiting Further Instructions...</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border-glass bg-deep-space py-12 text-center z-10">
        <div className="flex justify-center mb-6 opacity-30 hover:opacity-100 transition-opacity">
          <img src={`${baseAssetPath}/images/teacher.png`} alt="Teacher" className="h-12 w-auto grayscale" />
        </div>
        <p className="font-mono text-xs text-[#b9cacb] tracking-widest uppercase">© 2026 AI-First Web Architecture.</p>
        <p className="font-mono text-xs text-[#474646] tracking-widest uppercase mt-4">System powered by React + Tailwind CSS + Google Stitch.</p>
      </footer>
    </div>
  );
}

export default App;
