import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const module1Ref = useRef<HTMLDivElement>(null);
  const module2Ref = useRef<HTMLDivElement>(null);
  const module3Ref = useRef<HTMLDivElement>(null);
  const module4Ref = useRef<HTMLDivElement>(null);
  const module5Ref = useRef<HTMLDivElement>(null);
  const module6Ref = useRef<HTMLDivElement>(null);
  const module7Ref = useRef<HTMLDivElement>(null);
  const module8Ref = useRef<HTMLDivElement>(null);

  // Hero entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero load animation
      const heroTl = gsap.timeline({ delay: 0.2 });
      
      heroTl.fromTo('.hero-bg', 
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }
      );
      
      heroTl.fromTo('.hero-headline span',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.03 },
        '-=0.7'
      );
      
      heroTl.fromTo('.hero-subheadline',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      );
      
      heroTl.fromTo('.hero-cta',
        { y: 18, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.6)' },
        '-=0.3'
      );
      
      heroTl.fromTo('.hero-meta',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero scroll animation
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset hero elements when scrolling back to top
            gsap.set('.hero-headline, .hero-subheadline, .hero-cta, .hero-meta', { opacity: 1, x: 0, y: 0 });
            gsap.set('.hero-bg', { opacity: 1, scale: 1 });
          }
        }
      });

      // Hero exit phase (70%-100%)
      heroScrollTl.fromTo('.hero-headline-group',
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
      
      heroScrollTl.fromTo('.hero-cta',
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
      
      heroScrollTl.fromTo('.hero-bg',
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0.35, ease: 'power2.in' },
        0.7
      );

      // Section 2: Workshop Overview
      const overviewTl = gsap.timeline({
        scrollTrigger: {
          trigger: overviewRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      overviewTl.fromTo('.overview-image',
        { x: '-60vw', opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0
      );

      overviewTl.fromTo('.overview-content',
        { x: '18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.05
      );

      overviewTl.fromTo('.overview-chip',
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, ease: 'power2.out' },
        0.12
      );

      // Exit
      overviewTl.fromTo('.overview-image',
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      overviewTl.fromTo('.overview-content',
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 1: Edit-Ready Mindset
      const m1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module1Ref.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      m1Tl.fromTo('.m1-headline',
        { y: '-18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m1Tl.fromTo('.m1-card',
        { y: '60vh', opacity: 0, rotate: -1.5 },
        { y: 0, opacity: 1, rotate: 0, stagger: 0.12, ease: 'power2.out' },
        0.08
      );

      m1Tl.fromTo('.m1-headline',
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m1Tl.fromTo('.m1-card',
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 2: Kit Check
      const m2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module2Ref.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      m2Tl.fromTo('.m2-headline',
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m2Tl.fromTo('.m2-table',
        { y: '70vh', opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0.1
      );

      m2Tl.fromTo('.m2-row',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.06, ease: 'power2.out' },
        0.15
      );

      m2Tl.fromTo('.m2-headline',
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m2Tl.fromTo('.m2-table',
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 3: Five Pillars
      const m3Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module3Ref.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.6,
        }
      });

      m3Tl.fromTo('.m3-headline',
        { y: '-12vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m3Tl.fromTo('.m3-pillar',
        { y: '70vh', opacity: 0, rotate: 2 },
        { y: 0, opacity: 1, rotate: 0, stagger: 0.08, ease: 'power2.out' },
        0.08
      );

      m3Tl.fromTo('.m3-headline',
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m3Tl.fromTo('.m3-pillar',
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 4: Time Reality
      const m4Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module4Ref.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      m4Tl.fromTo('.m4-headline',
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m4Tl.fromTo('.m4-table',
        { y: '60vh', opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0.12
      );

      m4Tl.fromTo('.m4-headline',
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m4Tl.fromTo('.m4-table',
        { y: 0, opacity: 1 },
        { y: '14vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 5: Pitfalls
      const m5Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module5Ref.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      m5Tl.fromTo('.m5-headline',
        { y: '-12vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m5Tl.fromTo('.m5-item',
        { x: '-10vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.06, ease: 'power2.out' },
        0.1
      );

      m5Tl.fromTo('.m5-headline',
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m5Tl.fromTo('.m5-item',
        { x: 0, opacity: 1 },
        { x: '6vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 6: Transfer Workflow
      const m6Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module6Ref.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      m6Tl.fromTo('.m6-headline',
        { x: '18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m6Tl.fromTo('.m6-card',
        { y: '70vh', opacity: 0, rotate: -2 },
        { y: 0, opacity: 1, rotate: 0, stagger: 0.1, ease: 'power2.out' },
        0.1
      );

      m6Tl.fromTo('.m6-headline',
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m6Tl.fromTo('.m6-card',
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 7: Audio Cleanup
      const m7Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module7Ref.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      m7Tl.fromTo('.m7-headline',
        { y: '-12vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m7Tl.fromTo('.m7-content',
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );

      m7Tl.fromTo('.m7-headline',
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m7Tl.fromTo('.m7-content',
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Module 8: Quick Edit Checklist
      const m8Tl = gsap.timeline({
        scrollTrigger: {
          trigger: module8Ref.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      m8Tl.fromTo('.m8-headline',
        { y: '-12vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      m8Tl.fromTo('.m8-card',
        { y: '60vh', opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
        0.1
      );

      m8Tl.fromTo('.m8-headline',
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      m8Tl.fromTo('.m8-card',
        { y: 0, opacity: 1 },
        { y: '14vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Global snap for pinned sections
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (maxScroll && pinned.length > 0) {
        const pinnedRanges = pinned.map(st => ({
          start: st.start / maxScroll,
          end: (st.end ?? st.start) / maxScroll,
          center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
        }));

        ScrollTrigger.create({
          snap: {
            snapTo: (value: number) => {
              const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
              if (!inPinned) return value;
              
              const target = pinnedRanges.reduce((closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
                pinnedRanges[0]?.center ?? 0
              );
              return target;
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.out',
          }
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="relative bg-[#0B0C0F]">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center bg-gradient-to-b from-[#0B0C0F]/80 to-transparent">
        <div className="text-sm font-mono uppercase tracking-widest text-white font-medium">
          Video Sprint
        </div>
        <div className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection('overview')} className="text-sm text-white/70 hover:text-white transition-colors">
            Overview
          </button>
          <button onClick={() => scrollToSection('module1')} className="text-sm text-white/70 hover:text-white transition-colors">
            Modules
          </button>
          <button onClick={() => scrollToSection('setup')} className="text-sm text-white/70 hover:text-white transition-colors">
            Setup
          </button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} id="hero" className="section-pinned z-10">
        <div className="hero-bg absolute inset-0">
          <img 
            src="/images/hero_phone_on_tripod.jpg" 
            alt="iPhone on tripod" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0F]/55 to-[#0B0C0F]/78" />
        </div>
        
        <div className="hero-headline-group absolute left-[8vw] top-[18vh] w-[62vw]">
          <h1 className="hero-headline font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight">
            {'The 30-Minute iPhone Video Sprint'.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[0.3em]">{word}</span>
            ))}
          </h1>
        </div>
        
        <p className="hero-subheadline absolute left-[8vw] top-[44vh] w-[46vw] text-lg md:text-xl text-white/80 leading-relaxed">
          A tight, practical workshop for corporate comms teams. No gear. No guesswork. Just a repeatable system.
        </p>
        
        <div className="hero-cta absolute left-[8vw] top-[60vh] flex flex-wrap gap-4">
          <button onClick={() => scrollToSection('overview')} className="btn-primary">
            Start the Workshop
          </button>
          <button onClick={() => window.print()} className="btn-secondary">
            Download One-Page Brief
          </button>
        </div>
        
        <p className="hero-meta absolute left-[8vw] bottom-[8vh] text-xs font-mono uppercase tracking-widest text-white/50">
          30 MIN • 8 MODULES • IPHONE + WINDOWS
        </p>
      </section>

      {/* Section 2: Workshop Overview */}
      <section ref={overviewRef} id="overview" className="section-pinned z-20 bg-[#0B0C0F]">
        <div className="absolute left-[8vw] top-[14vh] w-[34vw] h-[72vh] rounded-lg overflow-hidden overview-image">
          <img 
            src="/images/overview_phone_detail.jpg" 
            alt="Phone camera detail" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="overview-content absolute left-[48vw] top-[18vh] w-[44vw]">
          <p className="module-label mb-4">Workshop Structure</p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-6">
            15 min demo + 10 min practice + 5 min Q&A
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            We'll cover light, sound, and framing—then practice a real take so you leave with usable footage.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {['LIGHTING', 'SOUND', 'EDIT-READY FOOTAGE'].map((chip) => (
              <span key={chip} className="overview-chip px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-mono uppercase tracking-widest text-white/70">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Module 01 - Edit-Ready Mindset */}
      <section ref={module1Ref} id="module1" className="section-pinned z-30">
        <div className="absolute inset-0">
          <img 
            src="/images/window_light_portrait.jpg" 
            alt="Window light portrait" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0C0F]/72" />
        </div>
        
        <div className="m1-headline absolute left-[8vw] top-[12vh]">
          <p className="module-label mb-3">Module 01</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white">
            The Edit-Ready Mindset
          </h2>
        </div>
        
        <div className="absolute left-[8vw] top-[44vh] w-[84vw] flex flex-wrap gap-6">
          <div className="m1-card glass-card rounded-lg p-8 w-full md:w-[40vw] h-auto md:h-[34vh]">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">5-Second Rule</h3>
            <p className="text-white/70 leading-relaxed">
              Every clip you record should be usable within 5 seconds of hitting stop. No "I'll fix it in post."
            </p>
          </div>
          <div className="m1-card glass-card rounded-lg p-8 w-full md:w-[40vw] h-auto md:h-[34vh]">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">Corporate vs Social</h3>
            <p className="text-white/70 leading-relaxed">
              Decide before filming: Landscape (LinkedIn/website) or Portrait (Reels/TikTok). When unsure, shoot landscape—you can crop later.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Module 02 - Kit Check */}
      <section ref={module2Ref} id="module2" className="section-pinned z-40 bg-[#0B0C0F]">
        <div className="m2-headline absolute left-[8vw] top-[12vh]">
          <p className="module-label mb-3">Module 02</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-2">
            Kit Check
          </h2>
          <p className="text-white/50 text-lg">Essential vs Nice-to-Have</p>
        </div>
        
        <div className="m2-table absolute left-[8vw] top-[32vh] w-[84vw] glass-card rounded-lg overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-1/2">Essential</th>
                <th className="w-1/2">Nice-to-Have</th>
              </tr>
            </thead>
            <tbody>
              <tr className="m2-row">
                <td>Smartphone (iPhone 11 or newer)</td>
                <td>DJI OM SE gimbal ($150)</td>
              </tr>
              <tr className="m2-row">
                <td>Basic tripod/phone mount ($20-40)</td>
                <td>Lavalier mic (RØDE Wireless GO or $30 wired)</td>
              </tr>
              <tr className="m2-row">
                <td>Clean microfibre cloth</td>
                <td>Reflector (white card or $5 foam board)</td>
              </tr>
              <tr className="m2-row">
                <td>Quiet room with one big window</td>
                <td>Second phone for notes/scripts</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="absolute left-[8vw] bottom-[8vh] w-[64vw] text-white/50 text-sm italic">
          "Today we're using room light and what's in your pocket. If you buy one thing, buy the tripod. Gimbals are sexy but tripods fix 80% of shaky footage."
        </p>
      </section>

      {/* Section 5: Module 03 - Five Pillars */}
      <section ref={module3Ref} id="module3" className="section-pinned z-50">
        <div className="absolute inset-0">
          <img 
            src="/images/five_pillars_bts.jpg" 
            alt="Behind the scenes filming" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0C0F]/72" />
        </div>
        
        <div className="m3-headline absolute left-[8vw] top-[10vh]">
          <p className="module-label mb-3">Module 03</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white">
            The Five Pillars
          </h2>
        </div>
        
        <div className="absolute left-[6vw] top-[30vh] w-[88vw] flex flex-wrap justify-center gap-4">
          {[
            { title: 'Setting', desc: 'Window 45°, kill noise, clean background' },
            { title: 'Light', desc: 'Golden hour indoors, bounce trick, flip & check' },
            { title: 'Framing', desc: 'Orientation lock, rule of thirds, headroom' },
            { title: 'Sound', desc: "Arm's-length rule, mic check, hands-free" },
            { title: 'Planning', desc: 'One-Page Brief: hook, message, B-roll, CTA' },
          ].map((pillar, i) => (
            <div key={i} className="m3-pillar glass-card rounded-lg p-6 w-[16vw] min-w-[200px] h-[52vh] flex flex-col">
              <span className="text-accent text-4xl font-heading font-bold mb-4">0{i + 1}</span>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Module 04 - Time Reality */}
      <section ref={module4Ref} id="module4" className="section-pinned z-[60] bg-[#0B0C0F]">
        <div className="m4-headline absolute left-[8vw] top-[12vh] w-[52vw]">
          <p className="module-label mb-3">Module 04</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6">
            Time Reality
          </h2>
          <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed border-l-2 border-accent pl-6 italic">
            "Pros film for 30 minutes and edit for 30 minutes—because they shot with coverage."
          </blockquote>
        </div>
        
        <div className="m4-table absolute left-[8vw] top-[48vh] w-[84vw] glass-card rounded-lg overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th>Output Duration</th>
                <th>Filming Time</th>
                <th>Editing Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">30-second Reel</td>
                <td>15-20 min (setup + 3 takes)</td>
                <td>20-30 min</td>
              </tr>
              <tr>
                <td className="font-medium text-white">2-min Interview</td>
                <td>30-45 min (including resets)</td>
                <td>1-2 hours</td>
              </tr>
              <tr>
                <td className="font-medium text-white">60-sec Event highlight</td>
                <td>2-3 hours capture, 30 min curate</td>
                <td>45 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: Module 05 - Pitfalls */}
      <section ref={module5Ref} id="module5" className="section-pinned z-[70]">
        <div className="absolute inset-0">
          <img 
            src="/images/pitfalls_reflection.jpg" 
            alt="Silhouette reflection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0C0F]/72" />
        </div>
        
        <div className="m5-headline absolute left-[8vw] top-[12vh]">
          <p className="module-label mb-3">Module 05</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white">
            Pitfalls to Avoid
          </h2>
        </div>
        
        <div className="absolute left-[8vw] top-[30vh] w-[84vw] glass-card rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Mixed lighting (fluorescents + window)',
              'Digital zoom—never pinch; walk closer',
              'Portrait/landscape confusion',
              'Not locking exposure (use AE/AF Lock)',
              'Forgetting the safety take (room tone)',
              'Skipping the B-roll list',
            ].map((item, i) => (
              <div key={i} className="m5-item flex items-center gap-3 py-3">
                <span className="w-6 h-6 rounded border border-accent/50 flex items-center justify-center text-accent text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Module 06 - Transfer Workflow */}
      <section ref={module6Ref} id="module6" className="section-pinned z-[80] bg-[#0B0C0F]">
        <div className="m6-headline absolute left-[8vw] top-[12vh]">
          <p className="module-label mb-3">Module 06</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-2">
            Transfer Workflow
          </h2>
          <p className="text-white/50 text-lg">iPhone to PC (Windows)</p>
        </div>
        
        <div className="absolute left-[8vw] top-[34vh] w-[84vw] flex flex-wrap gap-6">
          {[
            { 
              title: 'Lightning Cable', 
              subtitle: 'Fastest for 4K',
              desc: 'Unlock, trust, import via Photos app. Rename files immediately (ProjectName_Interview_Date).' 
            },
            { 
              title: 'OneDrive', 
              subtitle: 'Cloud sync',
              desc: 'Auto-upload Camera Roll. Great for remote teams. First sync takes time; subsequent ones are instant.' 
            },
            { 
              title: 'Send to Device', 
              subtitle: 'Quick drafts only',
              desc: 'Email or Teams yourself. Compresses quality—only for drafts, not final output.' 
            },
          ].map((method, i) => (
            <div key={i} className="m6-card glass-card rounded-lg p-6 flex-1 min-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded bg-accent/20 text-accent flex items-center justify-center font-heading font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">{method.title}</h3>
                  <p className="text-accent text-sm">{method.subtitle}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Module 07 - Audio Cleanup */}
      <section ref={module7Ref} id="module7" className="section-pinned z-[90]">
        <div className="absolute inset-0">
          <img 
            src="/images/audio_cleanup_studio.jpg" 
            alt="Audio recording setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B0C0F]/72" />
        </div>
        
        <div className="m7-headline absolute left-[8vw] top-[12vh]">
          <p className="module-label mb-3">Module 07</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white">
            Audio Cleanup
          </h2>
        </div>
        
        <div className="m7-content absolute left-[8vw] top-[26vh] w-[46vw]">
          <div className="space-y-4 mb-8">
            {[
              'Adobe Podcast Enhance (free)',
              'Removes hiss/echo and normalizes levels',
              'Download enhanced WAV, sync in Clipchamp',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="https://podcast.adobe.com/enhance" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block mb-6"
          >
            Open Adobe Podcast Enhance
          </a>
          
          <p className="text-white/50 text-sm font-mono">
            Pro tip: If your clip sounds like a swimming pool, upload it here. In 30 seconds it sounds like a studio.
          </p>
        </div>
      </section>

      {/* Section 10: Module 08 - Quick Edit Checklist */}
      <section ref={module8Ref} id="module8" className="section-pinned z-[100] bg-[#0B0C0F]">
        <div className="m8-headline absolute left-[8vw] top-[12vh]">
          <p className="module-label mb-3">Module 08</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white">
            Quick Edit Checklist
          </h2>
        </div>
        
        <div className="m8-card absolute left-[8vw] top-[30vh] w-[84vw] glass-card rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">PC</span>
                Clipchamp
              </h3>
              <ul className="space-y-3">
                {[
                  'Import → Detach audio (if enhanced)',
                  'Cut on action (not on a blink)',
                  'Auto captions → Export 1080p',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="w-5 h-5 rounded border border-white/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">iOS</span>
                iMovie
              </h3>
              <ul className="space-y-3">
                {[
                  'Simpler, mobile-friendly',
                  'Less caption control—use for drafts',
                  'Quick share to social',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="w-5 h-5 rounded border border-white/20 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Pre-Workshop Setup (flowing) */}
      <section id="setup" className="relative z-[110] bg-[#11131A] py-20 px-[8vw]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-12">
            Pre-Workshop Setup
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-accent/20 text-accent flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </span>
                Gear to Bring
              </h3>
              <ul className="space-y-3">
                {[
                  'Your iPhone (demo camera)',
                  'Cheap tripod/phone holder',
                  'White A4 paper (reflector demo)',
                  'Printed One-Page Brief template',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-accent/20 text-accent flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                Room Prep
              </h3>
              <ul className="space-y-3">
                {[
                  'Turn off half the fluorescents',
                  'Position chair 1.5m from window, angled 45°',
                  'Have Clipchamp open on the big screen',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* One-Page Brief Template */}
          <div className="glass-card rounded-lg p-8">
            <h3 className="font-heading text-xl font-bold text-white mb-6">One-Page Brief Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-white/50 mb-2">PROJECT</p>
                <div className="border-b border-white/20 pb-2 text-white/80">____________________</div>
              </div>
              <div>
                <p className="text-white/50 mb-2">FORMAT</p>
                <div className="flex gap-4 text-white/80">
                  <label className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-white/30 rounded" /> Landscape
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-white/30 rounded" /> Portrait
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-white/50 mb-3">SHOT LIST</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/80">
                {['Hook shot (what opens the video?)', 'Talking head (subject name:_____)', 'B-roll 1: ________________', 'B-roll 2: ________________', 'Outro graphic/CTA'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-white/50 mb-2">AUDIO CHECK</p>
                <div className="flex gap-4 text-white/80 text-sm">
                  <label className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-white/30 rounded" /> Room tone recorded
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-white/30 rounded" /> Phone within 60cm
                  </label>
                </div>
              </div>
              <div>
                <p className="text-white/50 mb-2">TRANSFER METHOD</p>
                <div className="flex gap-4 text-white/80 text-sm">
                  <label className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-white/30 rounded" /> Cable
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-white/30 rounded" /> Cloud
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Footer */}
      <footer className="relative z-[110] bg-[#0B0C0F] py-20 px-[8vw]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-8">
            Ready to run the sprint?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={() => window.print()} className="btn-primary">
              Download One-Page Brief
            </button>
            <button onClick={() => window.location.href = 'mailto:?subject=iPhone Video Sprint Workshop'} className="btn-secondary">
              Email This Guide
            </button>
          </div>
          
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://podcast.adobe.com/enhance" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
              Adobe Podcast
            </a>
            <a href="https://clipchamp.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
              Clipchamp
            </a>
          </div>
          
          <p className="mt-12 text-white/30 text-xs font-mono uppercase tracking-widest">
            30-Minute iPhone Video Sprint • Corporate Comms Workshop
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
