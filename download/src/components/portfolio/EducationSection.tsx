import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import eduSibermu from "@/assets/edu-sibermu.jpg";
import eduMaKudus from "@/assets/edu-makudus.jpg";

const education = [
  {
    school: "Universitas Siber Muhammadiyah",
    location: "Yogyakarta",
    period: "Oct 2022 - Apr 2026 (Expected)",
    degree: "Sarjana Komputer (S.Kom)",
    gpa: "3.94 / 4.00",
    image: eduSibermu,
    highlights: [
      "Juara 2 Video Profile Kampus",
      "Narasumber pelatihan digital berbasis masyarakat",
      "Sertifikasi Red Hat Academy & AWS",
    ],
  },
  {
    school: "MA Muhammadiyah Kudus",
    location: "Kudus, Jawa Tengah",
    period: "Jul 2018 - Jun 2022",
    degree: "SMA/MA - IPA",
    gpa: null,
    image: eduMaKudus,
    highlights: [
      "Juara 2 Nilai Terbaik Ujian Semester (2019 & 2021)",
      "Juara Terbaik Cinematic Videography tingkat sekolah",
    ],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Riwayat <span className="text-gradient">Pendidikan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="glass rounded-xl overflow-hidden hover:glow-border transition-shadow duration-500 group"
            >
              {/* School image */}
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{edu.school}</h3>
                    <p className="text-sm text-accent-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.location} • {edu.period}</p>
                  </div>
                </div>

                {edu.gpa && (
                  <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-sm font-mono text-primary mb-4">
                    IPK: {edu.gpa}
                  </div>
                )}

                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Award size={14} className="text-secondary mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
