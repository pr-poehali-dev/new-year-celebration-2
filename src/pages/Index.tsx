import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-background to-red-900/20" />
      
      <div className="absolute top-10 left-10 text-6xl animate-float">🎄</div>
      <div className="absolute top-20 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>🎁</div>
      <div className="absolute bottom-32 right-32 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>⭐</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-8xl mb-8 animate-float">🥂</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">
            С Новым 2025 Годом!
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Пусть новый год принесёт радость, вдохновение и творческие успехи! 🎉
          </p>
        </div>

        <Card className="mb-12 overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm animate-scale-in">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto">
              <img
                src="https://cdn.poehali.dev/files/IMG_1043.jpeg"
                alt="Праздничная атмосфера"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-5xl mb-6">🎊</div>
              <h2 className="text-4xl font-bold mb-4">
                Отдыхаем и встречаем праздник!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Время волшебства, уюта и тёплых моментов с близкими. Наслаждайтесь каждой минутой этого особенного времени!
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                  🎄 Ёлка
                </span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                  🥂 Шампанское
                </span>
                <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
                  🎁 Подарки
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all hover:shadow-xl hover:shadow-green-500/20 animate-scale-in">
            <div className="text-5xl mb-4">🎄</div>
            <h3 className="text-2xl font-bold mb-3">Уютная атмосфера</h3>
            <p className="text-muted-foreground">
              Создайте магию праздника с красивой ёлкой и гирляндами
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/60 transition-all hover:shadow-xl hover:shadow-accent/20 animate-scale-in" style={{ animationDelay: '100ms' }}>
            <div className="text-5xl mb-4">🥂</div>
            <h3 className="text-2xl font-bold mb-3">Праздничный тост</h3>
            <p className="text-muted-foreground">
              За исполнение желаний и новые возможности в наступающем году!
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/20 animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-3">Волшебство момента</h3>
            <p className="text-muted-foreground">
              Наслаждайтесь каждой секундой этого особенного времени
            </p>
          </Card>
        </div>

        <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/30 backdrop-blur-sm animate-fade-in">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold mb-4">
            Пожелания на Новый Год
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Пусть 2025 год станет годом больших свершений, крепкого здоровья, искренней любви и безграничного счастья. 
            Пусть каждый день приносит радость и новые возможности! 🌟
          </p>
          <Button size="lg" className="group text-lg px-8 py-6">
            <Icon name="Sparkles" className="mr-2 group-hover:rotate-12 transition-transform" size={24} />
            Загадать желание
          </Button>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;
