import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function SessionDetail({ moduleLabel, content, onBack }) {
  return (
    <div className="min-h-screen bg-deep-space text-[#e3e2e2] font-body relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <header className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1100px] mx-auto z-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-xs text-primary-cyan uppercase tracking-widest hover:text-white transition-colors mb-8"
        >
          <span>{'<<'}</span> Back to Overview
        </button>
        <div className="font-mono text-xs text-secondary-purple uppercase tracking-widest mb-3">
          {moduleLabel}
        </div>
      </header>

      <main className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 z-10">
        <article className="glass-panel p-8 md:p-14 prose-session">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>

        <div className="mt-10 text-center">
          <button
            onClick={onBack}
            className="glass-panel px-8 py-4 font-mono text-primary-cyan uppercase tracking-widest text-sm hover:bg-[rgba(0,242,255,0.1)] transition-all border-primary-cyan border-glow-cyan"
          >
            <span className="text-secondary-purple">{'<'}</span> Back to Overview
          </button>
        </div>
      </main>

      <footer className="relative border-t border-border-glass bg-deep-space py-8 text-center z-10">
        <p className="font-mono text-xs text-[#b9cacb] tracking-widest uppercase">© 2026 AI-First Web Architecture.</p>
      </footer>
    </div>
  );
}

export default SessionDetail;
