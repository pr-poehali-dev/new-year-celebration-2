import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: 'Искусство минимализма в современном дизайне',
      excerpt: 'Как меньше становится больше в эпоху информационного шума',
      category: 'Дизайн',
      date: '28 декабря 2024',
      readTime: '5 мин',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'
    },
    {
      id: 2,
      title: 'Революция в веб-разработке',
      excerpt: 'Новые технологии меняют подход к созданию приложений',
      category: 'Технологии',
      date: '27 декабря 2024',
      readTime: '8 мин',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
    },
    {
      id: 3,
      title: 'Психология цвета в брендинге',
      excerpt: 'Как цветовые решения влияют на восприятие бренда',
      category: 'Маркетинг',
      date: '26 декабря 2024',
      readTime: '6 мин',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80'
    },
    {
      id: 4,
      title: 'Будущее искусственного интеллекта',
      excerpt: 'Прогнозы и тренды развития AI на ближайшие годы',
      category: 'Технологии',
      date: '25 декабря 2024',
      readTime: '10 мин',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      id: 5,
      title: 'Типографика как искусство',
      excerpt: 'Секреты создания гармоничных текстовых композиций',
      category: 'Дизайн',
      date: '24 декабря 2024',
      readTime: '7 мин',
      image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&q=80'
    },
    {
      id: 6,
      title: 'Продуктивность в эпоху отвлечений',
      excerpt: 'Методики фокусировки и управления временем',
      category: 'Продуктивность',
      date: '23 декабря 2024',
      readTime: '9 мин',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80'
    }
  ];

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Button
            variant="ghost"
            onClick={() => setSelectedArticle(null)}
            className="mb-8 hover:bg-primary/10 transition-colors"
          >
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад к статьям
          </Button>

          <article className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                {selectedArticle.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {selectedArticle.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  {selectedArticle.readTime}
                </span>
              </div>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-96 object-cover rounded-2xl mb-8"
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                {selectedArticle.excerpt}
              </p>
              
              <p className="leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Основные принципы</h2>
              
              <p className="leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-xl">
                "Простота — это высшая степень изощрённости"
              </blockquote>

              <p className="leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Практическое применение</h2>
              
              <p className="leading-relaxed mb-6">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
              Creative Blog
            </h1>
            <Button variant="outline" className="group">
              <Icon name="PenSquare" className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              Написать
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Creative Blog
              </h3>
              <p className="text-muted-foreground">
                Пространство для креативных идей и вдохновения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Дизайн</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Технологии</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Маркетинг</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Продуктивность</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
