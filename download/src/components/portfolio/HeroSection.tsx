import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-secondary/15 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-primary font-mono text-sm mb-4 tracking-wider"
          >
            WELCOME TO MY PORTOFOLIO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Fina</span>
            <br />
            <span className="text-gradient">Khoirul Muna</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg mb-4 leading-relaxed"
          >
            Mahasiswa Informatika di Universitas Siber Muhammadiyah. Berpengalaman di bidang 
            Product Development, IT Administration, dan Graphic Design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <MapPin size={14} className="text-primary" />
            <span>Demak, Jawa Tengah, Indonesia</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              <Mail size={18} />
              Hubungi Saya
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Lanyard Name Card - drops from top */}
        <motion.div
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 10, 
            mass: 1.5,
            delay: 0.5 
          }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative flex flex-col items-center">
            {/* Lanyard string */}
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/60 to-primary/80" />
            
            {/* Lanyard clip */}
            <div className="w-8 h-4 rounded-b-md bg-muted border border-border/80 -mt-px mb-1 flex items-center justify-center">
              <div className="w-4 h-1 rounded-full bg-primary/50" />
            </div>

            {/* Name Card */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 md:w-80 rounded-2xl overflow-hidden glow-border glass"
            >
              {/* Photo area */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Fina Khoirul Muna - Portfolio"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              {/* Card info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-foreground">Fina Khoirul Muna</h3>
                <p className="text-xs text-primary font-mono mt-1">Informatika • SiberMu</p>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <MapPin size={12} className="text-primary" />
                  Demak, Jawa Tengah
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
