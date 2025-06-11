import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Термолифтинг лица",
      description:
        "Безоперационная подтяжка кожи лица с помощью радиочастотного воздействия. Стимуляция выработки коллагена и эластина.",
      duration: "45-60 мин",
      sessions: "1-2 процедуры",
    },
    {
      icon: "Heart",
      title: "Коррекция контуров тела",
      description:
        "Моделирование фигуры и уменьшение объемов проблемных зон. Борьба с целлюлитом и дряблостью кожи.",
      duration: "60-90 мин",
      sessions: "2-6 процедур",
    },
    {
      icon: "Star",
      title: "Омоложение кожи шеи, декольте и век",
      description:
        "Восстановление упругости и эластичности деликатных зон. Разглаживание морщин и улучшение текстуры кожи.",
      duration: "30-45 мин",
      sessions: "1-2 процедуры",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши косметологические услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные процедуры с использованием инновационного аппарата
            Volnewmer для достижения видимых результатов омоложения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-gray-200"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Длительность: 30-60 мин
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CalendarDays"
                      size={16}
                      className="text-gray-400"
                    />
                    <span className="text-sm text-gray-600">
                      Курс: 1-4 процедуры
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
