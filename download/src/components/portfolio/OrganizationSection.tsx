import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

const organizations = [
  {
    name: "PD IPM Kabupaten Demak",
    role: "Ketua Bidang Lingkungan Hidup",
    period: "May 2024 - Sekarang",
  },
  {
    name: "Hizbul Wathan Qobilah AR Fachruddin",
    role: "Sekretaris Umum",
    period: "Oct 2020 - Dec 2021",
  },
  {
    name: "PR IPM Humaira Kota Kudus",
    role: "Bidang Perkaderan",
    period: "Nov 2020 - Dec 2021",
  },
  {
    name: "Pendidikan Dakwah Lapangan",
    role: "Ketua",
    period: "Mar 2022 - Apr 2022",
  },
];

const OrganizationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">{"// 05. Organisasi"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Pengalaman <span className="text-gradient">Organisasi</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 flex items-start gap-4 hover:glow-border transition-shadow duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <Users className="text-secondary" size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{org.name}</h3>
                <p className="text-sm text-accent-foreground">{org.role}</p>
                <p className="text-xs font-mono text-muted-foreground mt-1">{org.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
