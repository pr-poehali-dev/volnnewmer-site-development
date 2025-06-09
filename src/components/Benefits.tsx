import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Инновационная технология",
      description:
        "Volnewmer использует уникальную комбинацию RF-энергии и вакуумного воздействия для максимального эффекта",
    },
    {
      icon: "ShieldCheck",
      title: "Безопасность процедур",
      description:
        "Неинвазивный метод без хирургического вмешательства. Минимальные побочные эффекты",
    },
    {
      icon: "TrendingUp",
      title: "Видимые результаты",
      description:
        "Первые изменения заметны сразу. Накопительный эффект до 2-4 месяцев. После 1-2 мес оценивается необходимость повторения процедуры",
    },
    {
      icon: "Clock",
      title: "Быстрая реабилитация",
      description:
        "Отсутствие реабилитационного периода. Можно сразу вернуться к обычной жизни",
    },
    {
      icon: "Users",
      title: "Подходит всем возрастам",
      description:
        "Эффективно как для профилактики старения, так и для коррекции возрастных изменений",
    },
    {
      icon: "Smile",
      title: "Комфортные ощущения",
      description:
        "Приятные warming-ощущения во время процедуры. Возможность расслабиться и отдохнуть",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Преимущества аппаратного метода
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Почему клиенты выбирают косметологические услуги с использованием
            Volnewmer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon
                    name={benefit.icon as any}
                    className="text-purple-600"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Технология Volnewmer
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Монополярный радиочастотный аппарат 6,78МГц с контактной системой
              водного охлаждения
            </p>
            <div className="max-w-5xl mx-auto">
              <img
                src="https://cdn.poehali.dev/files/127c49d5-7e0d-48b1-bd53-793f709639e9.jpg"
                alt="Технические характеристики и принцип работы Volnewmer"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Важная информация
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong>Внимание!</strong> Данные услуги имеют противопоказания.
              Перед процедурой обязательна консультация врача-косметолога.
              Результаты могут индивидуально варьироваться.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
