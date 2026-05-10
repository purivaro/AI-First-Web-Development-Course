import React from 'react';

function App() {
  const baseAssetPath = '/AI-First-Web-Development-Course/assets';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Hero */}
      <header className="relative bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
              2026 Curriculum
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              AI-First Web Development
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              ก้าวเข้าสู่ยุคของการเป็น "ผู้กำกับ AI" แทนการเป็นแค่คนเขียนโค้ด
              หลักสูตรสำหรับผู้เริ่มต้น ที่จะสอนให้คุณสร้างเว็บไซต์และ Web Apps จริง
              โดยใช้ AI เป็นเครื่องมือหลักในทุกขั้นตอน
            </p>
            <div className="flex items-center gap-4">
              <img
                src={`${baseAssetPath}/images/teacher_profile.png`}
                alt="Teacher Profile"
                className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover bg-slate-100"
              />
              <div>
                <p className="text-sm text-slate-500">Instructor</p>
                <p className="font-semibold text-slate-900">Phra Maha Anavach Purivaro</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
            <img
              src={`${baseAssetPath}/course_hero.png`}
              alt="Course Hero"
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-video"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">โครงสร้างหลักสูตร (Syllabus)</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            จากคนที่ไม่เคยเขียนโปรแกรม สู่การมีโปรเจกต์เว็บแอปพลิเคชันเป็นของตัวเองใน 6 คาบเรียน
            โดยใช้เทคนิค Context Engineering ระดับมืออาชีพ
          </p>
        </div>

        <div className="space-y-16">
          {/* Session 1 */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-2">
                <img
                  src={`${baseAssetPath}/session1_banner.png`}
                  alt="Session 1"
                  className="w-full h-full object-cover min-h-[250px]"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                  <h3 className="text-2xl font-bold">Build & Deploy Your First Webpage with AI</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  สร้างเว็บไซต์แรกและนำขึ้นออนไลน์ตั้งแต่วันแรก! เรียนรู้วิวัฒนาการจากการพิมพ์ Prompt ธรรมดา
                  มาสู่เทคนิค <strong>Context Engineering</strong> และ <strong>Spec-Driven Development</strong>
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-sm text-slate-700">ใช้ ChatGPT/Gemini สร้างคอนเทนต์และตอบกลับเป็น Markdown</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-sm text-slate-700">ใช้ Antigravity สร้าง <code>requirements.md</code> (Single Source of Truth)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-sm text-slate-700">ใช้คำสั่ง <strong>Git CLI</strong> (add, commit, push) นำเว็บขึ้น <strong>GitHub Pages</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Session 2 */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-3 p-8 md:p-12 order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                  <h3 className="text-2xl font-bold">Mastering Web Layout by Working with AI</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "นักออกแบบไม่ใช่คนที่วาดรูปเก่ง แต่คือคนที่จัดวางองค์ประกอบเป็น" เรียนรู้โครงสร้าง
                  Box Model และใช้ <strong>Google Stitch</strong> เป็นพระเอกในการเนรมิต UI ให้สวยงามระดับมืออาชีพ
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-sm text-slate-700">เข้าใจโครงสร้าง Box Model, Margin, Padding, Container</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-sm text-slate-700">ใช้ <strong>Google Stitch</strong> ขึ้นโครง UI และปรับ Theme แบบ Visual</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-sm text-slate-700">นำโค้ดที่ได้มาปรับปรุงใน Editor และสั่งให้ AI จัดหน้าจอแบบ Responsive</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 order-1 md:order-2">
                <img
                  src={`${baseAssetPath}/session2_banner.png`}
                  alt="Session 2"
                  className="w-full h-full object-cover min-h-[250px]"
                />
              </div>
            </div>
          </section>

          {/* Coming Soon... */}
          <div className="text-center py-8">
            <p className="text-slate-400 italic">Session 3-6 กำลังอยู่ในขั้นตอนการจัดทำ...</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="flex justify-center mb-6">
          <img src={`${baseAssetPath}/images/teacher.png`} alt="Teacher" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
        <p>© 2026 AI-First Web Development Course. All rights reserved.</p>
        <p className="text-sm mt-2">Built with Vite, React, TailwindCSS & Antigravity IDE.</p>
      </footer>
    </div>
  );
}

export default App;
