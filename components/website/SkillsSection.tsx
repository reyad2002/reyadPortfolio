"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  level: number; // 0..100
  category: "Frontend" | "Backend" | "Databases" | "Tools";
};

const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "Next.js", level: 84, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Material-UI", level: 80, category: "Frontend" },
  { name: "Bootstrap", level: 82, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 86, category: "Backend" },
  { name: "Express", level: 84, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },
  { name: "Auth (JWT/RBAC)", level: 82, category: "Backend" },
  { name: "GraphQL (Basics)", level: 65, category: "Backend" },

  // Databases
  { name: "MongoDB", level: 82, category: "Databases" },
  { name: "PostgreSQL", level: 78, category: "Databases" },
  { name: "Prisma / ODM", level: 72, category: "Databases" },

  // Tools
  { name: "Git & GitHub", level: 88, category: "Tools" },
  { name: "CI/CD (GitHub Actions)", level: 62, category: "Tools" },
  { name: "Docker (Basics)", level: 60, category: "Tools" },
  { name: "Vercel / Netlify", level: 80, category: "Tools" },
];

const CATS: Skill["category"][] = ["Frontend", "Backend", "Databases", "Tools"];

function groupByCategory(skills: Skill[]) {
  return CATS.map((cat) => ({
    cat,
    items: skills.filter((s) => s.category === cat),
  }));
}

function avgLevel(arr: Skill[]) {
  if (!arr.length) return 0;
  return Math.round(arr.reduce((a, b) => a + b.level, 0) / arr.length);
}

function SkillPill({ name, level }: { name: string; level: number }) {
  return (
    <div className="rounded-full bg-slate-700/60 border border-slate-600 px-3 py-2 flex items-center gap-3">
      <span className="text-slate-200 text-sm">{name}</span>
      <div className="flex-1 h-1.5 rounded-full bg-slate-600 overflow-hidden">
        <motion.div
          className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <span className="text-slate-400 text-xs tabular-nums w-8 text-right">{level}%</span>
    </div>
  );
}

export default function SkillsSectionCompact() {
  const groups = useMemo(() => groupByCategory(SKILLS), []);
  const fullstackAvg = useMemo(
    () =>
      Math.round(
        (avgLevel(SKILLS.filter(s => s.category === "Frontend")) +
          avgLevel(SKILLS.filter(s => s.category === "Backend")) +
          avgLevel(SKILLS.filter(s => s.category === "Databases"))) / 3
      ),
    []
  );

  // تحكم إظهار باقي عناصر كل مجموعة
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header صغير وواضح */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Expertise</h2>
          <p className="text-slate-300 mt-2">
            Full-Stack Developer — see everything at a glance without clutter
          </p>
          <div className="mt-4 inline-flex items-center gap-2">
            <Badge className="bg-cyan-600">Full-Stack ~{fullstackAvg}%</Badge>
            <Badge variant="secondary" className="bg-slate-700 text-slate-200">
              Frontend {avgLevel(SKILLS.filter(s=>s.category==="Frontend"))}%
            </Badge>
            <Badge variant="secondary" className="bg-slate-700 text-slate-200">
              Backend {avgLevel(SKILLS.filter(s=>s.category==="Backend"))}%
            </Badge>
            <Badge variant="secondary" className="bg-slate-700 text-slate-200">
              Databases {avgLevel(SKILLS.filter(s=>s.category==="Databases"))}%
            </Badge>
          </div>
        </motion.div>

        {/* مجموعات مختصرة: أول 5 + Show more */}
        <div className="grid gap-6">
          {groups.map(({ cat, items }) => {
            const open = expanded[cat];
            const visible = open ? items : items.slice(0, 5);
            const restCount = Math.max(0, items.length - 5);

            return (
              <Card key={cat} className="border-slate-600 bg-slate-900/40">
                <CardContent className="p-5 md:p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-semibold">{cat}</h3>
                      <span className="text-xs text-slate-400">
                        {items.length} skills • Avg {avgLevel(items)}%
                      </span>
                    </div>

                    {restCount > 0 && (
                      <button
                        onClick={() => setExpanded((e) => ({ ...e, [cat]: !open }))}
                        className="text-xs rounded-full border border-slate-600 px-3 py-1 text-slate-200 hover:bg-slate-800"
                      >
                        {open ? "Show less" : `Show ${restCount} more`}
                      </button>
                    )}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: "auto", opacity: 1 }}
                    className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {visible.map((s) => (
                      <SkillPill key={s.name} name={s.name} level={s.level} />
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ملاحظة صغيرة في الأسفل */}
        <p className="text-center text-xs text-slate-500">
          Compact view: shows the top skills per category. Expand to see the rest.
        </p>
      </div>
    </section>
  );
}
