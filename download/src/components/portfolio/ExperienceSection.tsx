import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Users, ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";

import designNgobral from "@/assets/design-ngobral.jpg";
import designMilad from "@/assets/design-milad.jpg";
import designDirgahayu from "@/assets/design-dirgahayu.jpg";
import designSilador from "@/assets/design-silador.jpg";
import designIndonesiaku from "@/assets/design-indonesiaku.jpg";
import designFunrun from "@/assets/design-funrun.jpg";
import expAdmin1 from "@/assets/exp-admin-1.png";
import expAdmin2 from "@/assets/exp-admin-2.png";
import orgPdipm from "@/assets/org-pdipm.jpg";
import orgIpmHumaira from "@/assets/org-ipmhumaira.jpg";
import orgHw from "@/assets/org-hw.jpg";
import orgPdl from "@/assets/org-pdl.jpg";

const experiences = [
  {
    title: "Graphic Designer",
    company: "LPM PD IPM Demak",
    location: "Demak, Jawa Tengah",
    period: "Jul 2024 - Sekarang",
    description: [
      "Merancang materi visual untuk publikasi: poster, brosur, dan konten media sosial",
      "Mengelola proyek desain dari awal hingga akhir",
      "Juara 3 Publikasi Karya Tulis Lingkungan Hidup IPM se-Jawa Tengah 2024",
    ],
    gallery: [designNgobral, designMilad, designDirgahayu, designSilador, designIndonesiaku, designFunrun],
    galleryLink: "https://www.instagram.com/pdipm.demak?igsh=d3g5bnltaW16c2V5",
    mediaCards: [],
  },
  {
    title: "Associate Product Officer (Intern)",
    company: "PT Ousean Global Digital",
    location: "Tangerang Selatan, Banten",
    period: "Jun 2024 - Oct 2024",
    description: [
      "Berpartisipasi dalam pengembangan produk baru, dari riset pasar hingga peluncuran",
      "Menganalisis data pengguna untuk wawasan kebutuhan dan pengujian fitur",
      "Mengelola project pengembangan dan berkolaborasi dengan tim teknis, desain, dan pemasaran",
    ],
    gallery: [],
    galleryLink: null,
    mediaCards: [],
  },
  {
    title: "Staff Administrasi & IT",
    company: "MTs Muhammadiyah Al Manar",
    location: "Demak, Jawa Tengah",
    period: "May 2023 - Sep 2023",
    description: [
      "Pengadaan media aplikasi/software untuk administrasi guru",
      "Mengelola file administrasi berkaitan dengan akreditasi sekolah",
    ],
    gallery: [],
    galleryLink: null,
    mediaCards: [
      { type: "image" as const, src: expAdmin1, alt: "Brosur SPMB MTs Al Manar" },
      { type: "image" as const, src: expAdmin2, alt: "Brosur Fasilitas MTs Al Manar" },
      { type: "youtube" as const, videoId: "-OtDLJscbww", alt: "Video MTs Al Manar" },
    ],
  },
];

const organizations = [
  {
    name: "PD IPM Kabupaten Demak",
    role: "Ketua Bidang Lingkungan Hidup",
    period: "May 2024 - Sekarang",
    image: orgPdipm,
  },
  {
    name: "Hizbul Wathan Qobilah AR Fachruddin",
    role: "Sekretaris Umum",
    period: "Oct 2020 - Dec 2021",
    image: orgHw,
  },
  {
    name: "PR IPM Humaira Kota Kudus",
    role: "Bidang Perkaderan",
    period: "Nov 2020 - Dec 2021",
    image: orgIpmHumaira,
  },
  {
    name: "Pendidikan Dakwah Lapangan",
    role: "Ketua",
    period: "Mar 2022 - Apr 2022",
    image: orgPdl,
  },
];

const SmallCardCarousel = ({ images, link }: { images: string[]; link: string | null }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  if (images.length === 0) return null;

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -160 : 160, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative group/scroll">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-1 opacity-0 group-hover/scroll:opacity-100 transition-opacity"
          >
            <ChevronLeft size={14} className="text-foreground" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide py-1 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer"
              >
                <img src={img} alt={`Design ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-1 opacity-0 group-hover/scroll:opacity-100 transition-opacity"
          >
            <ChevronRight size={14} className="text-foreground" />
          </button>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Cek it out
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
};

const MediaCards = ({ cards }: { cards: typeof experiences[2]["mediaCards"] }) => {
  if (cards.length === 0) return null;

  return (
    <div className="mt-4 grid grid-cols-3 gap-2">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all hover:scale-[1.03] cursor-pointer"
        >
          {card.type === "image" ? (
            <img src={card.src} alt={card.alt} className="w-full h-28 sm:h-32 object-cover" />
          ) : (
            <a
              href={`https://youtu.be/${card.videoId}?si=EmE_hdOpNk7dXZ5A`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-28 sm:h-32 bg-muted"
            >
              <img
                src={`https://img.youtube.com/vi/${card.videoId}/hqdefault.jpg`}
                alt={card.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                  <Play size={16} className="text-destructive-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Pengalaman <span className="text-gradient">Kerja</span>
          </h2>
        </motion.div>

        <div className="relative mb-20">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary glow-border" />
                <div className="glass rounded-xl p-6 hover:glow-border transition-shadow duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Briefcase size={16} className="text-primary" />
                        {exp.title}
                      </h3>
                      <p className="text-sm text-accent-foreground">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-primary bg-accent/50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Small card carousel for gallery */}
                  <SmallCardCarousel images={exp.gallery} link={exp.galleryLink} />
                  
                  {/* Media cards for admin */}
                  <MediaCards cards={exp.mediaCards} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Pengalaman <span className="text-gradient">Organisasi</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {organizations.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="glass rounded-xl overflow-hidden hover:glow-border transition-shadow duration-500"
            >
              <div className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <Users className="text-secondary" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{org.name}</h3>
                  <p className="text-sm text-accent-foreground">{org.role}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">{org.period}</p>
                </div>
              </div>
              {/* Organization image */}
              <div className="px-4 pb-4">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
