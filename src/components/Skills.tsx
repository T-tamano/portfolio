import { Code2, Server, Wrench, Laptop } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "フロントエンド",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"]
    },
    {
      title: "バックエンド",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express", "Python", "SQL", "C", "Java", "Kotlin"]
    },
    {
      title: "開発ツール",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "Docker", "Terraform"]
    },
    {
      title: "その他",
      icon: <Laptop className="w-6 h-6" />,
      skills: ["AWS", "CI/CD", "Flutter"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">スキル</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-2">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}