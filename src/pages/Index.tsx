import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-game-dark via-slate-900 to-game-blue">
      {/* Header */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <Icon name="Plane" className="text-game-orange" size={32} />
          <h1 className="text-2xl font-bold text-white">AVIAMASTERS</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-game-orange text-game-orange hover:bg-game-orange hover:text-white"
            onClick={() => window.open("https://1win.com/login", "_blank")}
          >
            Войти
          </Button>
          <Button
            className="bg-game-orange hover:bg-orange-600"
            onClick={() =>
              window.open("https://1win.com/registration", "_blank")
            }
          >
            1WIN Регистрация
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-game-orange/20 text-game-orange border-game-orange">
            🎯 ОФИЦИАЛЬНЫЙ ПАРТНЕР 1WIN
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AVIA<span className="text-game-orange">MASTERS</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Покори небеса в самой захватывающей авиационной игре! Делай ставки,
            следи за самолетом и забирай выигрыш до крушения.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-game-orange to-red-500 text-white text-xl px-8 py-4 hover:scale-105 transition-transform"
              onClick={() =>
                window.open("https://1win.com/game/aviator", "_blank")
              }
            >
              <Icon name="Play" className="mr-2" size={24} />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-game-dark text-xl px-8 py-4"
              onClick={() => window.open("https://1win.com/mobile", "_blank")}
            >
              <Icon name="Download" className="mr-2" size={20} />
              СКАЧАТЬ ПРИЛОЖЕНИЕ
            </Button>
          </div>

          {/* Game Preview */}
          <div className="relative max-w-2xl mx-auto">
            <img
              src="/img/e99d9dc7-bf28-4dcc-a682-d612ac88e07a.jpg"
              alt="Aviamasters Game Interface"
              className="rounded-2xl shadow-2xl border border-game-orange/50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-game-dark/60 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-sm opacity-80">ТЕКУЩИЙ КОЭФФИЦИЕНТ</p>
                  <p className="text-3xl font-bold text-game-orange">2.47x</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-80">ОНЛАЙН ИГРОКОВ</p>
                  <p className="text-xl font-semibold">1,247</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Game Section */}
      <section className="px-6 py-16 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Как играть в <span className="text-game-orange">Aviamasters</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/80 border-gray-700 hover:border-game-orange transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Coins"
                  className="text-game-orange mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-semibold text-white mb-3">
                  1. Сделай ставку
                </h4>
                <p className="text-gray-300">
                  Выбери размер ставки и жми "Ставка". Можешь делать две ставки
                  одновременно для большего азарта.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-700 hover:border-game-orange transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="TrendingUp"
                  className="text-game-orange mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-semibold text-white mb-3">
                  2. Следи за взлетом
                </h4>
                <p className="text-gray-300">
                  Самолет взлетает и коэффициент растет! Чем выше летит, тем
                  больше можешь выиграть.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-700 hover:border-game-orange transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Zap"
                  className="text-game-orange mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-semibold text-white mb-3">
                  3. Забери выигрыш
                </h4>
                <p className="text-gray-300">
                  Жми "Забрать" до того, как самолет исчезнет! Промедлишь —
                  потеряешь ставку.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-4">
            Бонусы от <span className="text-game-orange">1WIN</span>
          </h3>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Получи максимум от каждой игры с эксклюзивными предложениями
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-game-orange to-red-500 border-0 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center text-white">
                <Icon name="Gift" className="mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-2">+500%</h4>
                <p className="text-sm opacity-90 mb-3">НА ПЕРВЫЙ ДЕПОЗИТ</p>
                <p className="text-xs opacity-80">
                  До 75,000 рублей бонуса для новых игроков
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-game-blue to-purple-600 border-0 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center text-white">
                <Icon name="RotateCcw" className="mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-2">КЭШБЭК</h4>
                <p className="text-sm opacity-90 mb-3">КАЖДУЮ НЕДЕЛЮ</p>
                <p className="text-xs opacity-80">
                  Возврат до 30% от проигранных средств
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-game-green to-emerald-600 border-0 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center text-white">
                <Icon name="Star" className="mx-auto mb-4" size={48} />
                <h4 className="text-2xl font-bold mb-2">VIP</h4>
                <p className="text-sm opacity-90 mb-3">ПРОГРАММА</p>
                <p className="text-xs opacity-80">
                  Эксклюзивные бонусы и персональный менеджер
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-game-orange hover:bg-orange-600 text-xl px-8 py-4"
              onClick={() =>
                window.open("https://1win.com/registration", "_blank")
              }
            >
              ПОЛУЧИТЬ БОНУС
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="px-6 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Нужна помощь? Мы на связи 24/7
          </h3>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Icon
                name="MessageCircle"
                className="text-game-orange mb-3"
                size={40}
              />
              <h4 className="text-white font-semibold mb-1">Онлайн-чат</h4>
              <p className="text-gray-400 text-sm">Мгновенные ответы</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Send" className="text-game-orange mb-3" size={40} />
              <h4 className="text-white font-semibold mb-1">Telegram</h4>
              <p className="text-gray-400 text-sm">@1win_support</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" className="text-game-orange mb-3" size={40} />
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <p className="text-gray-400 text-sm">support@1win.com</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              FAQ
            </Button>
            <Button className="bg-game-orange hover:bg-orange-600">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Icon name="Plane" className="text-game-orange" size={24} />
              <span className="text-white font-semibold">AVIAMASTERS</span>
              <span className="text-gray-500">x</span>
              <span className="text-game-orange font-semibold">1WIN</span>
            </div>
            <div className="text-gray-400 text-sm text-center">
              <p>© 2024 Aviamasters. 18+ Играйте ответственно.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
