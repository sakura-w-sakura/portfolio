import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Your Name",
};

const skillGroups = [
  {
    category: "デザイン",
    skills: [
      { name: "UIデザイン", level: 90 },
      { name: "UXリサーチ", level: 80 },
      { name: "プロトタイピング", level: 85 },
      { name: "ブランディング", level: 75 },
    ],
  },
  {
    category: "ツール",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Illustrator", level: 80 },
      { name: "Adobe Photoshop", level: 70 },
      { name: "Notion", level: 85 },
    ],
  },
  {
    category: "その他",
    skills: [
      { name: "HTML / CSS", level: 70 },
      { name: "デザインシステム", level: 75 },
      { name: "アクセシビリティ", level: 65 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Skills</h1>
      <p className="text-neutral-400 mb-16">スキル</p>

      <div className="grid md:grid-cols-3 gap-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">
              {group.category}
            </h2>
            <ul className="space-y-5">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                    <span className="text-xs text-neutral-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-neutral-900 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
