interface Project {
  name: string;
  description: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Tax-PJ",
      description: "税務相談サービスプラットフォーム。税務関連の問い合わせを簡素化し、専門家のガイダンスを提供します。"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">プロジェクト</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}