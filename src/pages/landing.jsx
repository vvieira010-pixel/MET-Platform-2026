import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#testimonials', label: 'Results' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H5a2 2 0 00-2 2v4m0 0h6m-6 0v8a2 2 0 002 2h4m4-14h6m-6 0v4m0-4V5a2 2 0 012-2h2a2 2 0 012 2v4m0 0h-6m6 0v8a2 2 0 01-2 2h-4" />
        <path d="M9 17h6" />
      </svg>
    ),
    title: 'AI-Powered Diagnosis',
    description: 'Pinpoint exactly where each student struggles — grammar, listening, reading, or writing — with intelligent diagnostic assessments.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Targeted Homework',
    description: 'Generate personalized exercises based on diagnostic results. Each student gets practice that addresses their specific gaps.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: 'Full Mock Tests',
    description: 'Simulate the real MET exam with timed practice across all sections — Grammar, Listening, Reading, and Writing.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Spaced Repetition',
    description: 'Research-backed review scheduling ensures students retain what they learn, with smart reminders for optimal revision timing.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
    title: 'Detailed Feedback',
    description: 'Go beyond scores. Students get section-by-section feedback, error analysis, and actionable improvement plans.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Progress Tracking',
    description: 'Teachers monitor every student\'s journey with visual reports, risk flags, and at-a-glance class dashboards.',
  },
]

const steps = [
  { number: '01', title: 'Diagnose', description: 'Student takes an AI-powered diagnostic that identifies specific strengths and weaknesses across all MET sections.' },
  { number: '02', title: 'Practice', description: 'Generate targeted homework and mock tests that address each student\'s unique gaps. Practice with purpose.' },
  { number: '03', title: 'Improve', description: 'Review detailed feedback, track progress over time, and watch scores rise through spaced repetition.' },
]

const testimonials = [
  { quote: 'The diagnosis pinpointed exactly what I was struggling with in listening. After a few weeks of targeted exercises, my score jumped from B1 to B2.', author: 'Ana Silva', role: 'Nursing Candidate' },
  { quote: 'As a teacher, the platform saves me hours of grading. I can see exactly where each student needs help and assign work in minutes.', author: 'Carlos Oliveira', role: 'MET Prep Teacher' },
  { quote: 'The mock tests feel just like the real exam. I went from feeling nervous to fully confident on test day.', author: 'Juliana Costa', role: 'B2 Candidate' },
]

const plans = [
  {
    name: 'Essential',
    price: 'R$ 180',
    period: '/month',
    desc: 'Individual study with automated feedback and progress tracking.',
    features: ['AI diagnostic assessment', 'Personalized homework', 'Full mock tests', 'Progress dashboard', 'Email support'],
    featured: false,
  },
  {
    name: 'Intensive',
    price: 'R$ 150',
    period: '/month',
    desc: 'Small group classes with a dedicated teacher and structured curriculum.',
    features: ['Everything in Essential', 'Live weekly classes (8 students)', 'Teacher feedback on writing', 'Speaking practice sessions', 'Priority support'],
    featured: true,
  },
  {
    name: 'Premium',
    price: 'R$ 120',
    period: '/month',
    desc: '1-on-1 coaching with personalized lesson plans and flexible scheduling.',
    features: ['Everything in Intensive', 'Private 1-on-1 sessions', 'Custom study plan', 'Anytime WhatsApp support', 'Score guarantee'],
    featured: false,
  },
]

const faqs = [
  { q: 'What is the Michigan English Test (MET)?', a: 'The MET is a standardized English proficiency exam developed by Michigan Language Assessment, recognized by universities and employers worldwide. It tests reading, listening, grammar, and writing skills at B1 to C2 levels.' },
  { q: 'How long does it take to prepare?', a: 'Most students see meaningful improvement in 8-12 weeks with consistent practice. Our diagnostic helps us create a realistic timeline based on your current level and target score.' },
  { q: 'Do I need to attend live classes?', a: 'The Essential plan is fully self-paced. Intensive and Premium plans include live sessions. All plans include our AI-powered platform for practice and feedback.' },
  { q: 'How does the AI diagnosis work?', a: 'Students complete a comprehensive assessment covering all MET sections. Our AI analyzes responses to identify specific gaps — down to the skill level — and generates a detailed report with recommended next steps.' },
  { q: 'Can teachers track multiple students?', a: 'Yes. Teachers get a full dashboard showing all students\' progress, pending submissions, risk indicators, and performance trends across all sections.' },
  { q: 'Is there a money-back guarantee?', a: 'Premium plan includes a score guarantee. If you complete the program as designed and don\'t reach your target level, we offer additional support at no extra cost.' },
]

export default function LandingPage({ onGetStarted }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-dvh bg-bg text-ink font-[var(--font-sans)]">
      {/* Navigation */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ink/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="flex items-center gap-2.5 no-underline text-white">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
              M
            </div>
            <span className="text-sm sm:text-base font-semibold tracking-tight">
              MET <span className="text-primary">Mastery</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href.slice(1)) }}
                className="text-sm text-white/70 hover:text-white transition-colors no-underline">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" onClick={e => { e.preventDefault(); scrollTo('cta') }}
              className="hidden sm:inline-flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline hover:bg-primary-hover transition-all hover:scale-[1.02] active:scale-[0.98]">
              Start Free Trial
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1 p-1.5 bg-transparent border-none cursor-pointer z-50"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`fixed inset-0 bg-ink/98 flex flex-col items-center justify-center gap-5 transition-all duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href.slice(1)) }}
              className="text-lg text-white/70 hover:text-white no-underline transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={e => { e.preventDefault(); scrollTo('cta') }}
            className="mt-4 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-full no-underline">
            Start Free Trial
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-ink text-white overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-full h-16 sm:h-20 bg-bg" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-14 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              MET Exam Preparation
            </div>
            <h1 className="text-[clamp(2rem,_5vw,_3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-4 text-balance">
              Pass the MET Exam with <em className="not-italic text-[#2dd4bf]">Confidence</em>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-white/70 mb-7 max-w-md mx-auto md:mx-0">
              AI-powered diagnosis, targeted practice, and expert guidance — everything you need to ace the Michigan English Test.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <a href="#cta" onClick={e => { e.preventDefault(); scrollTo('cta') }}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full no-underline transition-all hover:bg-primary-hover hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(1,121,111,0.3)] active:scale-[0.98]">
                Start Your Free Trial
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#how-it-works" onClick={e => { e.preventDefault(); scrollTo('how-it-works') }}
                className="text-sm text-white/60 hover:text-white no-underline transition-colors">
                See how it works
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
              <span className="text-xs text-white/50 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                AI diagnosis
              </span>
              <span className="text-xs text-white/50 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Mock tests
              </span>
              <span className="text-xs text-white/50 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                1-on-1 coaching
              </span>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-primary/[0.08] pointer-events-none" />
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-ink border border-white/10 flex items-center justify-center shadow-[0_32px_64px_rgba(0,0,0,0.35)]">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">MET Mastery</p>
                <p className="text-white/90 text-sm">AI-Powered Test Prep</p>
                <div className="mt-4 flex justify-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#2dd4bf" stroke="#2dd4bf"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-white/40 text-[10px] mt-2">Trusted by 500+ students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-ink-muted uppercase tracking-widest font-semibold mb-6">
            Recognized by leading institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary font-bold text-xs">ML</div>
              <span className="text-sm font-semibold text-ink">Michigan Language Assessment</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center text-primary font-bold text-xs">UM</div>
              <span className="text-sm font-semibold text-ink">University of Michigan</span>
            </div>
          </div>
        </div>
      </section>

      {/* About / Problem */}
      <section id="about" className="py-16 sm:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-14 items-start max-w-4xl mx-auto">
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">About the MET</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 tracking-tight">
                Your Gateway to English Proficiency
              </h2>
              <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-5">
                The Michigan English Test (MET) is a standardized exam recognized by universities, employers, and
                immigration authorities worldwide. It measures your ability to use English in real-life situations
                across four key areas.
              </p>
              <ul className="grid grid-cols-2 gap-2.5 not:list-none p-0">
                {['Grammar & Vocabulary', 'Listening Comprehension', 'Reading Comprehension', 'Writing Skills'].map(s => (
                  <li key={s} className="bg-primary-light text-primary text-sm font-medium px-3.5 py-2.5 rounded-[10px] flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink text-white p-7 sm:p-8 rounded-2xl">
              <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Why Choose MET Mastery</p>
              <p className="text-sm sm:text-base leading-relaxed text-white/70 mb-4">
                Most prep courses use a <strong className="text-white">one-size-fits-all</strong> approach. We use AI to
                build a <strong className="text-white">personalized study plan</strong> based on your exact strengths and
                weaknesses — so you spend time on what actually moves your score.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-white/70">
                From B1 to B2 in 12 weeks. From B2 to C1 in 16 weeks. Our students see <strong className="text-white">measurable
                improvement</strong> or we adjust the plan at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Platform Features</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3 tracking-tight">
              Everything You Need to Succeed
            </h2>
            <p className="text-ink-muted text-sm sm:text-base max-w-lg mx-auto">
              From diagnosis to exam day — a complete ecosystem for MET preparation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-bg rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-transparent hover:border-border/50">
                <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 tracking-tight">
            Three Steps to MET Success
          </h2>
          <p className="text-ink-muted text-sm sm:text-base mb-12 sm:mb-16 max-w-lg mx-auto">
            A simple, proven process that adapts to your level and goals.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center">
                  {s.number}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Stats */}
      <section className="py-14 sm:py-20 bg-ink text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { number: '500+', label: 'Students Helped' },
            { number: '92%', label: 'Pass Rate' },
            { number: '12wk', label: 'Avg. Timeline' },
            { number: '4.9★', label: 'Student Rating' },
          ].map((s, i) => (
            <div key={i}>
              <span className="text-[#2dd4bf] text-2xl sm:text-3xl font-bold block mb-1">{s.number}</span>
              <span className="text-white/60 text-xs sm:text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Student Success</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3 tracking-tight">
              Real Results from Real Students
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${i === 1 ? 'bg-primary-light' : 'bg-bg'}`}>
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#01796F" stroke="#01796F"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-sm text-ink-muted italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-xs text-ink-muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Plans & Pricing</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3 tracking-tight">
              Choose Your Path
            </h2>
            <p className="text-ink-muted text-sm sm:text-base max-w-md mx-auto">
              Flexible plans for every learning style and budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${p.featured ? 'bg-primary-light border border-primary/20' : 'bg-white'}`}>
                <h3 className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1">{p.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-ink">{p.price}</span>
                  <span className="text-sm text-ink-muted">{p.period}</span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mb-6 flex-1">{p.desc}</p>
                <ul className="flex flex-col gap-2.5 mb-7">
                  {p.features.map((f, j) => (
                    <li key={j} className="text-sm text-ink-muted flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#01796F" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" onClick={e => { e.preventDefault(); scrollTo('cta') }}
                  className={`text-center text-sm font-semibold py-2.5 px-5 rounded-full no-underline transition-all ${p.featured ? 'bg-primary text-white hover:bg-primary-hover' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
                  {p.featured ? 'Get Started' : 'Learn More'}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-ink-muted mt-6">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Common Questions
            </h2>
          </div>
          <div className="flex flex-col gap-2.5">
            {faqs.map((item, i) => (
              <div key={i} className={`border border-border rounded-2xl overflow-hidden transition-colors duration-300 ${activeFaq === i ? 'border-primary' : 'hover:border-primary'}`}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full bg-transparent border-none cursor-pointer flex items-center justify-between gap-3 px-5 py-4 text-left font-sans font-semibold text-sm text-ink transition-colors duration-300 hover:text-primary">
                  {item.q}
                  <span className={`text-ink-muted text-lg shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${activeFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-ink-muted leading-relaxed m-0">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 sm:py-28 bg-ink text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            Ready to Pass the MET?
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-8 max-w-md mx-auto">
            Start your 7-day free trial today. No commitment, no credit card.
          </p>
          <button onClick={onGetStarted}
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full border-none cursor-pointer transition-all hover:bg-primary-hover hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(1,121,111,0.35)] active:scale-[0.98] text-sm sm:text-base">
            Start Free Trial
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <div className="flex flex-wrap justify-center gap-5 mt-8">
            <span className="text-xs text-white/50 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              No credit card
            </span>
            <span className="text-xs text-white/50 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              Cancel anytime
            </span>
            <span className="text-xs text-white/50 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              AI-powered
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink border-t border-white/5 py-10 text-center text-sm text-white/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-white/50 hover:text-white no-underline transition-colors text-xs">Privacy</a>
            <a href="#" className="text-white/50 hover:text-white no-underline transition-colors text-xs">Terms</a>
            <a href="#" className="text-white/50 hover:text-white no-underline transition-colors text-xs">Contact</a>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} MET Mastery Platform. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-ink text-white border-none shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        aria-label="Scroll to top">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  )
}
