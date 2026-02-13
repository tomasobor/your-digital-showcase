import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Leader", "Storyteller", "Strategist", "Maker", "Visionary"];

const Index = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const animProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  const fadeProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.4, duration: 0.8 },
      };

  return (
    <div className="min-h-screen flex flex-col px-5 sm:px-10 md:px-16 py-6 sm:py-8 bg-background text-foreground">
      {/* Top bar */}
      <header role="banner" className="flex justify-between items-center">
        <div aria-hidden="true" />
        <a
          href="mailto:tomas.obrimcak@gmail.com"
          className="text-xs tracking-widest uppercase text-foreground hover:text-foreground/80 transition-colors font-bold min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Send email to Tomas Obrimcak"
        >
          Email
        </a>
      </header>

      {/* Center content */}
      <main id="main-content" role="main" className="flex-1 flex flex-col justify-center max-w-2xl">
        <motion.div {...animProps}>
          <h1 className="text-[clamp(2rem,6vw,3.75rem)] font-bold tracking-tight leading-[1.1]">
            Tomas
            <br />
            Obrimcak
          </h1>

          <div className="mt-5 sm:mt-6 flex items-baseline gap-3">
            <div className="h-px w-8 bg-foreground/30 shrink-0 translate-y-[-2px]" aria-hidden="true" />
            <p className="text-sm text-foreground whitespace-nowrap font-bold">
              Designer, Creative,{" "}
              <span
                className="relative inline-block align-bottom text-foreground overflow-hidden"
                style={{ width: 85, height: '1.25em' }}
                aria-live="polite"
                aria-atomic="true"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={prefersReducedMotion ? undefined : { y: '100%', opacity: 0 }}
                    animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { y: '-100%', opacity: 0 }}
                    transition={prefersReducedMotion ? undefined : { duration: 0.25, ease: "easeInOut" }}
                    className="absolute left-0 top-0 leading-[1.25em]"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </div>
        </motion.div>

        <motion.section {...fadeProps} className="mt-10 sm:mt-12 max-w-sm" aria-label="About Tomas">
          <p className="text-sm leading-relaxed text-foreground font-bold">
            Conceptual designer with a focus on digital products, motion, and branding —
            working with optimistic teams and founders since 2017.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col gap-1">
            <a
              href="mailto:tomas.obrimcak@gmail.com"
              className="text-sm font-bold underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors w-fit min-h-[44px] flex items-center"
              aria-label="Contact Tomas about freelance work"
            >
              Open to freelance
            </a>
            <span className="text-xs text-muted-foreground font-bold">On-demand · Projects from $10K</span>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="flex justify-between items-end">
        <p className="text-xs text-foreground font-bold">©2026, Tomas Obrimcak</p>
        <p className="text-xs text-foreground font-bold">Based in Remote</p>
      </footer>
    </div>
  );
};

export default Index;
