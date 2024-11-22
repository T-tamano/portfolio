interface ExperienceItem {
  title: string;
  role: string;
  company: string;
  description: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "モバイルアプリのインフラ構築",
      role: "インフラエンジニア",
      company: ".log()",
      description: "モバイルアプリケーションのインフラ構築を担当し、堅牢でスケーラブルなソリューションを実装しました。"
    },
    {
      title: "モバイルアプリ開発",
      role: "モバイルアプリエンジニア",
      company: "ソニー株式会社",
      description: "2週間のインターンシップに参加し、モバイルアプリケーションのフロントエンドとバックエンド開発に携わりました。"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">経歴</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute w-4 h-4 bg-white border-2 border-gray-200 rounded-full -left-[9px] top-0" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600 mt-1">{exp.company} - {exp.role}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}