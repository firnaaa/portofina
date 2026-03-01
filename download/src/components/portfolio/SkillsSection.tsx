import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Wrench, Heart } from "lucide-react";

const skillGroups = [
  {
    icon: Code,
    title: "Programming",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Web App Design", "MySQL"],
  },
  {
    icon: Palette,
    title: "Design & Media",
    skills: ["Figma", "Canva", "Adobe Lightroom", "Filmora", "CapCut", "VN"],
  },
  {
    icon: Wrench,
    title: "Tools & Produktivitas",
    skills: ["Microsoft Office", "Google Suite", "Visual Studio Code", "WavePad"],
  },
  {
    icon: Heart,
    title: "Soft Skills",
    skills: ["Komunikasi", "Kepemimpinan", "Kerjasama Tim", "Manajemen Waktu", "Administrasi", "Pemahaman Visual"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">About my skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7, type: "spring", stiffness: 80 }}
              whileHover={{ 
                scale: 1.04,
                boxShadow: "0 0 30px hsl(174, 72%, 50%, 0.4), 0 0 60px hsl(174, 72%, 50%, 0.15)",
              }}
              className="glass rounded-xl p-6 transition-all duration-500 group hover:border-primary/50"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(174,72%,50%,0.4)] transition-all duration-500">
                <group.icon className="text-primary group-hover:drop-shadow-[0_0_8px_hsl(174,72%,50%,0.8)]" size={20} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-4 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_hsl(174,72%,50%,0.5)] transition-all duration-500">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_10px_hsl(174,72%,50%,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
