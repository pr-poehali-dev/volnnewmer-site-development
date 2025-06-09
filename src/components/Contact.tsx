import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const handleTelegramContact = () => {
    window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank");
  };

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Локация",
      details: ["Санкт-Петербург", "пн-вс 10-20"],
    },
    {
      icon: "Clock",
      title: "Режим работы",
      details: ["Пн-Пт: 9:00 - 21:00", "Сб-Вс: 10:00 - 19:00"],
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "Звонки принимаются ежедневно"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Записаться на консультацию
          </h2>
          <p className="text-xl text-gray-600">
            Получите персональную консультацию специалиста и узнайте, подходят
            ли вам наши услуги
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Icon name="MessageCircle" size={28} />
                  Быстрая связь в Telegram
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-100">
                  Самый быстрый способ получить консультацию и записаться на
                  процедуру. Ответим на все ваши вопросы в течение 15 минут.
                </p>
                <Button
                  onClick={handleTelegramContact}
                  className="bg-white text-blue-600 hover:bg-blue-50 w-full"
                  size="lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name={info.icon as any}
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Что включает консультация
            </h3>

            <div className="space-y-4">
              {[
                "Осмотр и диагностика состояния кожи",
                "Определение показаний и противопоказаний",
                "Составление индивидуального плана процедур",
                "Расчет стоимости курса со скидками",
                "Ответы на все ваши вопросы",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    className="text-green-600 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start gap-3">
                <Icon
                  name="AlertTriangle"
                  className="text-yellow-600 flex-shrink-0 mt-1"
                  size={20}
                />
                <div className="text-sm text-yellow-800">
                  <strong>Важно:</strong> Консультация врача-косметолога
                  обязательна перед началом процедур. Услуги имеют
                  противопоказания. Возможны индивидуальные реакции.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
