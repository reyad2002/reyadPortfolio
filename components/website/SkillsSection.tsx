"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Palette } from "lucide-react";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Tools";
};

const categoryIcons = {
  Frontend: <Palette className="w-5 h-5" />,
  Backend: <Code2 className="w-5 h-5" />,
  Databases: <Database className="w-5 h-5" />,
  Tools: <Wrench className="w-5 h-5" />,
};

const categoryColors = {
  Frontend: "from-pink-400 to-rose-500",
  Backend: "from-cyan-400 to-blue-500",
  Databases: "from-green-400 to-emerald-500",
  Tools: "from-orange-400 to-amber-500",
};

const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Material-UI", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Auth (JWT/RBAC)", category: "Backend" },
  // { name: "GraphQL (Basics)", category: "Backend" },

  // Databases
  { name: "MongoDB", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  // { name: "PostgreSQL", category: "Databases" },
  { name: "Prisma / ODM", category: "Databases" },

  // Tools
  { name: "Git & GitHub", category: "Tools" },
  { name: "CI/CD (GitHub Actions)", category: "Tools" },
  // { name: "Docker (Basics)", category: "Tools" },
  { name: "Vercel / Netlify", category: "Tools" },
];

const CATS: Skill["category"][] = ["Frontend", "Backend", "Databases", "Tools"];

function groupByCategory(skills: Skill[]) {
  return CATS.map((cat) => ({
    cat,
    items: skills.filter((s) => s.category === cat),
  }));
}

function SkillPill({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="rounded-lg bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-slate-600 hover:border-cyan-400/50 px-4 py-2.5 flex items-center justify-center text-center transition-all duration-300 cursor-default"
    >
      <span className="text-slate-100 text-sm font-medium">{name}</span>
    </motion.div>
  );
}

export default function SkillsSectionCompact() {
  const groups = useMemo(() => groupByCategory(SKILLS), []);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block mb-4">
            <Badge className="bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 px-4 py-1.5">
              My Tech Stack
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
            Full-Stack Developer with expertise across modern technologies
          </p>
          <motion.div
            className="inline-flex flex-wrap justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {CATS.map((cat) => (
              <Badge
                key={cat}
                className={`bg-gradient-to-r ${categoryColors[cat]} text-white px-3 sm:px-4 py-1.5 text-xs sm:text-sm border-0`}
              >
                {cat}
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:gap-8">
          {groups.map(({ cat, items }) => {
            const open = expanded[cat];
            const visible = open ? items : items.slice(0, 6);
            const restCount = Math.max(0, items.length - 6);

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={`border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 overflow-hidden`}
                >
                  {/* Category Header */}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`p-2.5 rounded-lg bg-gradient-to-br ${categoryColors[cat]} text-white`}
                        >
                          {categoryIcons[cat]}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {cat}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-400">
                            {items.length}{" "}
                            {items.length === 1 ? "skill" : "skills"}
                          </p>
                        </div>
                      </div>

                      {restCount > 0 && (
                        <motion.button
                          onClick={() =>
                            setExpanded((e) => ({ ...e, [cat]: !open }))
                          }
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                        >
                          {open ? "Show less" : `+${restCount} more`}
                        </motion.button>
                      )}
                    </div>

                    {/* Skills Grid */}
                    <motion.div
                      layout
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"
                    >
                      {visible.map((s, idx) => (
                        <SkillPill key={s.name} name={s.name} index={idx} />
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.p
          className="text-center text-xs sm:text-sm text-slate-500 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Continuously learning and expanding my skill set
        </motion.p>
      </div>
    </section>
  );
}
