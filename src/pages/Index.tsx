import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Leader", "Storyteller", "Strategist", "Maker", "Visionary"];

const Index = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col px-6 sm:px-10 md:px-16 py-8 bg-background text-foreground">
      {/* Top bar */}
      <header className="flex justify-between items-center">
        <div />
        <a
          href="mailto:tomas@pyri.co"
          className="text-xs tracking-widest uppercase text-foreground hover:text-foreground transition-colors"
        >
          Email
        </a>
      </header>

      {/* Center content */}
      <main className="flex-1 flex flex-col justify-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Tomas
            <br />
            Obrimcak
          </h1>

          <div className="mt-6 flex items-baseline gap-3">
            <div className="h-px w-8 bg-foreground opacity-30 shrink-0 translate-y-[-2px]" />
            <p className="text-sm text-foreground whitespace-nowrap">
              Designer, Creative,{" "}
              <span
                className="relative inline-block align-bottom text-foreground overflow-hidden"
                style={{ width: 85, height: '1.25em' }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute left-0 top-0 leading-[1.25em]"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 max-w-sm"
        >
          <p className="text-sm leading-relaxed text-foreground">
            Conceptual designer with a focus on digital products, motion, and branding —
            working with optimistic teams and founders since 2017.
          </p>

          <div className="mt-8 flex flex-col gap-1">
            <a
              href="mailto:tomas@pyri.co"
              className="text-sm underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors w-fit"
            >
              Open to freelance
            </a>
            <span className="text-xs text-foreground">On-demand · Projects from $10K</span>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-end">
        <p className="text-xs text-foreground">©2026, Tomas Obrimcak</p>
        <p className="text-xs text-foreground">Based in Remote</p>
      </footer>
    </div>
  );
};

export default Index;
