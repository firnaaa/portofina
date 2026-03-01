import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code, Palette, Briefcase } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.png";

const floatingIcons = [
  { icon: Code, label: "Code", x: -60, y: -40, delay: 0 },
  { icon: Palette, label: "Design", x: 60, y: -30, delay: 0.3 },
  { icon: Briefcase, label: "Product", x: -50, y: 50, delay: 0.6 },
  { icon: Sparkles, label: "Creative", x: 55, y: 60, delay: 0.9 },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">About me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Mengenal <span className="text-gradient">Lebih Dekat</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Decorated Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Background glow circles */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 blur-2xl" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-secondary/15 to-primary/10 blur-xl animate-float" />
              
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full border border-dashed border-secondary/15"
              />

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
                <img
                  src={aboutPhoto}
                  alt="Fina Khoirul Muna"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Floating icon badges */}
              {floatingIcons.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + item.delay, type: "spring", stiffness: 200 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${item.x}%)`,
                    top: `calc(50% + ${item.y}%)`,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="glass rounded-xl p-2.5 glow-border shadow-lg"
                  >
                    <item.icon size={18} className="text-primary" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Sparkle dots */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: [0, 1, 0] } : {}}
                  transition={{ delay: 1 + i * 0.2, duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Mahasiswa jurusan Informatika di Universitas Siber Muhammadiyah yang aktif dalam 
              organisasi dan kegiatan sosial kemasyarakatan. Memiliki passion di bidang teknologi, 
              desain grafis, dan pengembangan produk digital.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Terampil menggunakan berbagai tools teknologi termasuk media sosial, Microsoft Office, 
              dan design grafis. Berpengalaman sebagai Staff IT Administrasi dan Associate Product Officer 
              di industri digital. Memiliki kemampuan komunikasi dan kerjasama tim yang baik.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Berpartisipasi sebagai narasumber pelatihan digital dalam proyek berbasis masyarakat 
              dan mengikuti pelatihan bersertifikat Red Hat Academy dan AWS.
            </p>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-4 gap-3 pt-6"
            >
              {[
                { label: "IPK", value: "3.94" },
                { label: "Pengalaman", value: "3+" },
                { label: "Prestasi", value: "5+" },
                { label: "Organisasi", value: "4+" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(174, 72%, 50%, 0.3)" }}
                  className="glass rounded-lg p-3 text-center cursor-default transition-all"
                >
                  <p className="text-lg font-bold text-primary">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
