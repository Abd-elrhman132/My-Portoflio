import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "./Reveal";

const projects = [
  {
    title: "Nourae E-commerce",
    description:
      "A premium accessories e-commerce platform featuring a modern customer storefront and a robust admin dashboard. Built for scale with optimized data management and comprehensive testing.",
    features: [
      "Full-featured customer storefront and protected admin panel",
      "Seamless authentication and real-time database via Supabase",
      "Advanced state management and optimized data fetching",
      "Rigorous unit and end-to-end testing coverage",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
      "Playwright",
    ],
    links: { github: "#", live: "#" },
    image: "/projects/nourae-mockup.png",
  },
  {
    title: "GlobeSync",
    description:
      "A sophisticated world-tracking and travel-logging application that allows users to visualize their global footprint. Built with interactive mapping technology and real-time state synchronization.",
    features: [
      "Interactive world map interface with Leaflet",
      "Dynamic travel logging and city tracking",
      "Synchronized state management for global data",
      "Performance-optimized geospatial data fetching",
    ],
    technologies: ["React", "TypeScript", "Leaflet", "React Query", "Vite"],
    links: { github: "#", live: "#" },
    image: "/projects/mockup.png",
  },
  {
    title: "DevBrand",
    description:
      "A modern developer portfolio and branding template designed for performance, elegant UI, and seamless user experience. Built with reusable components and optimized for responsiveness across all devices.",
    features: [
      "Reusable component-based architecture",
      "Smooth animations powered by Framer Motion",
      "Fully responsive and performance optimized",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Shadcn UI",
    ],
    links: { github: "#", live: "#" },
    image: "/projects/devbrand_1920x1080.png",
  },
  {
    title: "Bankist Web App",
    description:
      "An interactive banking simulation application that demonstrates real-world financial operations through dynamic UI updates and advanced DOM manipulation techniques.",
    features: [
      "Simulated transfers, loans, and account actions",
      "Scroll animations and modern UI interactions",
      "Structured logic using modular JavaScript",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Intl API",
      "DOM Manipulation",
      "OOP",
    ],
    links: { github: "#", live: "#" },
    image: "/projects/Bankist_1280x720.png",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  // Stack cards tightly with minimal offset
  const topOffset = 160 + index * 30;

  return (
    <div
      className="sticky h-auto w-full flex items-center justify-center mb-24 last:mb-0"
      style={{ top: `${topOffset}px` }}
    >
      <StaggerItem y={50}>
        <div className="group relative w-full rounded-5xl md:rounded-6xl overflow-hidden bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] origin-top hover:border-white/20 transition-all duration-700">
          <div className="flex flex-col lg:flex-row min-h-fit lg:min-h-120">
            {/* Visual Side (Padded & Elegant) */}
            <div className="lg:w-5/12 relative h-87.5 lg:h-auto bg-black/50 flex items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

              <div className="relative size-full max-h-100 rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 group-hover:shadow-accent transition-all duration-700 bg-black">
                <motion.div
                  className="absolute inset-0 size-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="size-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </motion.div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-7/12 flex flex-col justify-center p-8 md:p-14 z-20 bg-black/60">
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <h3 className="text-4xl md:text-6xl font-sans font-black text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
                <div className="flex gap-4 shrink-0">
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="size-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <GitBranch size={24} />
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="size-14 rounded-full bg-accent text-white flex items-center justify-center hover:bg-white hover:text-black shadow-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>

              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-12">
                <h4 className="text-white/40 font-display text-sm tracking-widest uppercase mb-6 drop-shadow-md">
                  Architecture Features
                </h4>
                <ul className="space-y-4">
                  {project.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start text-white/70 text-base"
                    >
                      <span className="text-accent mr-4 mt-1 opacity-80 text-sm">
                        ✦
                      </span>
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-white/5 text-white/60 text-sm font-mono border border-white/5 hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </StaggerItem>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16 bg-background relative z-10">
      <div className="max-w-[100rem] mx-auto w-full">
        <div className="mb-16 text-center relative">
          {/* Ambient Glowing Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-200 h-75 bg-accent/20 blur-[120px] rounded-full pointer-events-none z-[-1]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] max-w-100 h-37.5 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none z-[-1]" />

          <Reveal delay={0.2}>
            <span className="text-accent font-display tracking-[0.4em] uppercase text-sm drop-shadow-accent-strong mb-6 inline-block bg-white/5 py-2 px-6 rounded-full border border-white/10 backdrop-blur-md">
              Engineering Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tighter drop-shadow-xl">
              Capabilities.
            </h2>
          </Reveal>
        </div>

        <StaggerReveal delay={0.25}>
          <div className="flex flex-col relative z-10 w-full">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
