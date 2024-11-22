import { Mail, Github, BookOpen } from 'lucide-react';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export default function Contact() {
  const links: ContactLink[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "tatsuki.tamano@gmail.com",
      href: "mailto:tatsuki.tamano@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/T-tamano"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: "Zenn",
      href: "https://zenn.dev/ttama"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">連絡先</h2>
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}