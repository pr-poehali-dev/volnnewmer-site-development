import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна К.",
      age: "35 лет",
      text: "После курса процедур кожа стала заметно более упругой. Овал лица подтянулся, морщинки разгладились. Очень довольна результатом!",
      rating: 5,
      procedure: "RF-лифтинг лица",
    },
    {
      name: "Марина Д.",
      age: "42 года",
      text: "Долго решалась на аппаратные процедуры. Volnewmer превзошел все ожидания - безболезненно и эффективно. Кожа как в 30!",
      rating: 5,
      procedure: "Омоложение шеи и декольте",
    },
    {
      name: "Елена М.",
      age: "38 лет",
      text: "Проблемные зоны на бедрах и животе заметно подтянулись. Целлюлит стал менее выраженным. Рекомендую всем подругам!",
      rating: 5,
      procedure: "Коррекция контуров тела",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Истории успешных преображений с косметологическими услугами
            Volnewmer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={20}
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.age}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-blue-600 font-medium">
                          {testimonial.procedure}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Результаты индивидуальны и могут отличаться. Отзывы получены с
            согласия клиентов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
