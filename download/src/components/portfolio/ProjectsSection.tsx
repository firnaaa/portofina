import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Instagram } from "lucide-react";
import projectBundaAdaptif from "@/assets/project-bundaadaptif.png";
import projectDigitalkind from "@/assets/project-digitalkind.png";
import projectCemilGila from "@/assets/project-cemilgila.png";
import socialPdipm from "@/assets/social-pdipm.png";
import socialKaderhijau from "@/assets/social-kaderhijau.png";
import socialDigitalkind from "@/assets/social-digitalkind.png";
import socialOusean from "@/assets/social-ousean.png";

const webProjects = [
  {
    title: "Bunda Adaptif",
    description:
      "Platform edukasi perlindungan ibu hamil dari dampak perubahan iklim. Proyek berbasis masyarakat dari Universitas Siber Muhammadiyah dengan fitur pencatatan kesehatan, pelaporan data, dan info cuaca.",
    url: "https://www.bundaadaptif.com/home",
    image: projectBundaAdaptif,
    tags: ["Google Sites", "Community Project", "Health"],
  },
  {
    title: "Digitalkind",
    description:
      "Platform kesehatan mental yang membantu mengenali dan mengatasi kecemasan (anxiety) dengan pendekatan lembut dan berbasis edukasi. Dilengkapi Anxiety First Aid Kit dan AI chatbot.",
    url: "https://digitalkind.vercel.app",
    image: projectDigitalkind,
    tags: ["React", "TypeScript", "Project Akhir", "Mental Health"],
  },
  {
    title: "CemilGila",
    description:
      "Website e-commerce camilan ringan dari Kudus, Jawa Tengah. Menampilkan katalog produk, sistem pemesanan via WhatsApp, dan testimoni pelanggan. Sudah dipercaya 10.000+ pelanggan.",
    url: "https://cemilg-68130894-ad7f1.web.app/",
    image: projectCemilGila,
    tags: ["E-Commerce", "Food & Beverage", "React", "CSS", "TypeScript"],
  },
];

const socialProjects = [
  {
    title: "LPM PD IPM DEMAK",
    image: socialPdipm,
    url: "https://www.instagram.com/pdipm.demak?igsh=d3g5bnltaW16c2V5",
  },
  {
    title: "Kader Hijau Demak",
    image: socialKaderhijau,
    url: "https://www.instagram.com/kaderhijau.demak?igsh=MWd6ejZhNWZiZjJobw==",
  },
  {
    title: "DigitalKind",
    image: socialDigitalkind,
    url: "https://www.instagram.com/digitalkind_?igsh=Y3RxZWE5cGV1eW55",
  },
  {
    title: "Ousean Digital",
    image: socialOusean,
    url: "https://www.instagram.com/ouseanschool?igsh=MTRiZ2xxdnFmZGUzeA==",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            My Project & Creativity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Website App */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-foreground mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-primary" />
          Website App
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {webProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden cursor-pointer block"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} - Screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="glass rounded-full p-3">
                    <ExternalLink size={20} className="text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Graphic Design & Social Media */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold text-foreground mb-8 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-secondary" />
          Graphic Design & Social Media
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass rounded-2xl overflow-hidden cursor-pointer block"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={project.image}
                  alt={`${project.title} - Instagram`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="glass rounded-full p-3">
                    <Instagram size={20} className="text-secondary" />
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h4 className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                  <Instagram size={12} /> Instagram
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
