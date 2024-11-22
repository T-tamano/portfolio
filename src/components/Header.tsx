import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Tatsuki Tamano
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          2nd year master's student at Doshisha University
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Learn More <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}