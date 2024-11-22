export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">自己紹介</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Webやモバイルアプリのフロントエンドおよびインフラ開発を専門としています。
            現在、同志社大学大学院で学びながら、直感的で効率的なデジタルソリューションの
            創造に情熱を注いでいます。
          </p>
          <p>
            大学でプログラミングを始め、その後インターンシップを通じてWebやモバイルアプリ
            開発の実践的な経験を積んできました。常に新しい技術を学び、開発のベストプラクティス
            を追求しています。
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">主要技術</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Java', 'Flutter', 'Python', 'AWS', 'Terraform', 'CI/CD'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}