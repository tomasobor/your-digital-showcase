import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Builder", "Metalhead", "Skater", "Explorer", "Gamer", "Go-Getter"];

const Index = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-sm font-semibold leading-tight tracking-tight">
            Tomas Obrimcak —
          </h1>
          <p className="text-sm font-semibold leading-tight tracking-tight whitespace-nowrap">
            Designer, Creative,{" "}
            <span className="inline-flex items-baseline gap-1">
              <span className="relative overflow-hidden inline-block align-baseline" style={{ minWidth: 80 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-muted-foreground font-normal">(+5)</span>
            </span>
          </p>
        </div>

        <a
          href="mailto:nesetril.ales@gmail.com"
          className="text-sm font-medium hover:opacity-60 transition-opacity flex items-center gap-1 shrink-0"
        >
          → Email
        </a>
      </header>

      {/* Main content */}
      <main className="mt-8 sm:mt-12 max-w-md">
        <p className="text-sm leading-relaxed">
          Conceptual designer with a focus on digital products (web/mobile), motion, and branding,
          working with optimistic and ambitious teams and founders since 2012.
        </p>

        <div className="mt-6">
          <p className="text-sm">
            <a
              href="mailto:nesetril.ales@gmail.com"
              className="underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              Open to freelance
            </a>{" "}
            <span className="text-muted-foreground">(On-demand/Limited)</span>
          </p>
          <p className="text-sm mt-2">Projects start at $10K.</p>
        </div>
      </main>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <footer className="pt-8">
        <p className="text-sm text-muted-foreground">©2025, AN./92</p>
      </footer>
    </div>
  );
};

export default Index;
