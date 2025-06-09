import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const handleTelegramContact = () => {
    window.open("https://t.me/your_username", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Инновационное
                <span className="text-blue-600"> омоложение</span> кожи
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональные косметологические услуги с использованием
                аппарата Volnewmer. Безоперационная подтяжка кожи с доказанной
                эффективностью.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                onClick={handleTelegramContact}
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Узнать цены
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Shield" className="text-green-600" size={24} />
                <span className="text-sm text-gray-600">
                  Сертифицированный аппарат
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" className="text-blue-600" size={24} />
                <span className="text-sm text-gray-600">
                  Опытные специалисты
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/files/705b989e-4dd9-46bb-84aa-9fde74cc17e3.jpg"
                alt="Аппарат Volnewmer для омоложения кожи"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">
                  Удовлетворены результатом
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
