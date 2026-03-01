import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mari <span className="text-gradient">Terhubung</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          <a
            href="mailto:fkhoirulm24@gmail.com"
            className="glass rounded-xl p-6 hover:glow-border transition-all duration-500 group"
          >
            <Mail className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-xs text-foreground mt-1">fkhoirulm24@gmail.com</p>
          </a>

          <a
            href="tel:+6281226964284"
            className="glass rounded-xl p-6 hover:glow-border transition-all duration-500 group"
          >
            <Phone className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
            <p className="text-sm text-muted-foreground">Telepon</p>
            <p className="text-xs text-foreground mt-1">+62 812 2696 4284</p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-6 hover:glow-border transition-all duration-500 group"
          >
            <Linkedin className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
            <p className="text-sm text-muted-foreground">LinkedIn</p>
            <p className="text-xs text-foreground mt-1 flex items-center justify-center gap-1">
              Profile <ArrowUpRight size={12} />
            </p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 justify-center text-sm text-muted-foreground"
        >
          <MapPin size={14} className="text-primary" />
          Demak, Jawa Tengah, Indonesia
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          ©2025 Fina Khoirul Muna.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
