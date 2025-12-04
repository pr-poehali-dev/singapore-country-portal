import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const sections = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'developer', label: 'О разработчике', icon: 'User' },
    { id: 'info', label: 'Сведения', icon: 'Info' },
    { id: 'cities', label: 'Города', icon: 'MapPin' },
    { id: 'cuisine', label: 'Кухня', icon: 'UtensilsCrossed' },
    { id: 'culture', label: 'Музыка и кино', icon: 'Music' },
    { id: 'holidays', label: 'Праздники', icon: 'Calendar' },
    { id: 'dream', label: 'Моя мечта', icon: 'Heart' },
  ];

  const galleryImages = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/6d0c0797-706d-4214-a2a3-b5cf3bfb4ae2.jpg',
      title: 'Marina Bay Sands',
      category: 'singapore',
      city: 'Сингапур'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/18bee093-cc36-4ff8-87ca-57a6b47b058c.jpg',
      title: 'Haji Lane',
      category: 'singapore',
      city: 'Сингапур'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/2367590a-f601-46fb-9d8b-68d2f95598b8.jpg',
      title: 'Мерлион',
      category: 'singapore',
      city: 'Сингапур'
    },
  ];

  const cities = [
    {
      name: 'Сингапур',
      description: 'Столица и крупнейший город-государство, современный мегаполис с уникальным сочетанием культур.',
      attractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Chinatown']
    },
    {
      name: 'Джуронг',
      description: 'Промышленный район с птичьим парком Jurong Bird Park и китайским садом.',
      attractions: ['Jurong Bird Park', 'Chinese Garden', 'Science Centre']
    },
    {
      name: 'Район Марина',
      description: 'Современная набережная с небоскребами, отелями и развлекательными комплексами.',
      attractions: ['Marina Bay', 'The Shoppes at Marina Bay Sands', 'ArtScience Museum']
    }
  ];

  const dishes = [
    { name: 'Чили краб', description: 'Национальное блюдо - краб в остром томатном соусе' },
    { name: 'Хайнаньский рис с курицей', description: 'Нежная курица с ароматным рисом' },
    { name: 'Лакса', description: 'Пряный суп-лапша на кокосовом молоке' },
    { name: 'Сатай', description: 'Шашлычки из курицы или говядины с арахисовым соусом' }
  ];

  const holidays = [
    { name: 'Китайский Новый год', date: 'Январь-февраль', description: 'Самый важный праздник для китайской общины' },
    { name: 'Весак', date: 'Май', description: 'День рождения Будды' },
    { name: 'День независимости', date: '9 августа', description: 'Национальный праздник Сингапура' },
    { name: 'Дивали', date: 'Октябрь-ноябрь', description: 'Праздник огней индийской общины' }
  ];

  const links = [
    { 
      category: 'Визы и посольство',
      items: [
        { name: 'Посольство Сингапура в России', url: 'https://www.mfa.gov.sg/moscow' }
      ]
    },
    {
      category: 'Отзывы путешественников',
      items: [
        { name: 'TripAdvisor - Сингапур', url: 'https://www.tripadvisor.ru/Tourism-g294265-Singapore-Vacations.html' },
        { name: 'Отзывы на Туристер.Ру', url: 'https://www.tourister.ru/world/asia/singapore/reviews' }
      ]
    },
    {
      category: 'Бронирование отелей',
      items: [
        { name: 'Booking.com', url: 'https://www.booking.com/country/sg.html' },
        { name: 'Agoda.com', url: 'https://www.agoda.com/country/singapore.html' }
      ]
    },
    {
      category: 'Туристические агентства Абакана',
      items: [
        { name: 'Турагентства Абакана на 2ГИС', url: 'https://2gis.ru/abakan/search/турагентство' },
        { name: 'Турфирмы Абакана', url: 'https://abakan.cataloxy.ru/firms/turagentstva.htm' }
      ]
    },
    {
      category: 'Авиабилеты',
      items: [
        { name: 'Aviasales - поиск дешевых билетов', url: 'https://www.aviasales.ru/' }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50 animate-slide-in">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Сингапур 🇸🇬
            </h1>
            <div className="hidden lg:flex gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className="hover:bg-primary/10"
                >
                  <Icon name={section.icon as any} size={16} className="mr-2" />
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/6d0c0797-706d-4214-a2a3-b5cf3bfb4ae2.jpg"
              alt="Singapore"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
                Добро пожаловать в Сингапур
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                Город будущего, где традиции встречаются с инновациями
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 animate-fade-in">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Галерея</h3>
                <p>
                  Яркие фотографии достопримечательностей Сингапура с возможностью фильтрации по городам
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Медиа</h3>
                <p>
                  Видео и аудио файлы о культуре и жизни в современном Сингапуре
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-heading font-bold mb-8 text-center">Полезные ссылки</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {links.map((linkGroup, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <h4 className="font-heading font-semibold text-lg mb-4">
                      {linkGroup.category}
                    </h4>
                    <div className="space-y-2">
                      {linkGroup.items.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:underline"
                        >
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-heading font-bold mb-8 text-center">Интерактивная галерея</h3>
            <div className="flex gap-2 justify-center mb-8 flex-wrap">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
                className="rounded-full"
              >
                Все фото
              </Button>
              <Button
                variant={activeFilter === 'singapore' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('singapore')}
                className="rounded-full"
              >
                Сингапур
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">{image.title}</h4>
                    <p className="text-sm text-gray-600">{image.city}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="developer" className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/6d0c0797-706d-4214-a2a3-b5cf3bfb4ae2.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(5px) brightness(1.1)' }}
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">О разработчике</h2>
            <Card className="text-left">
              <CardContent className="p-8">
                <p className="text-lg mb-4">
                  <strong>Разработчик:</strong> Захар Куратов
                </p>
                <p className="text-lg mb-4">
                  <strong>Учебное заведение:</strong> Хакасский государственный университет
                </p>
                <p className="text-lg">
                  <strong>Группа:</strong> 225
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="info" className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/2367590a-f601-46fb-9d8b-68d2f95598b8.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(5px) brightness(1.1)' }}
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">Исторические сведения</h2>
          <Card>
            <CardContent className="p-8 space-y-4 text-lg leading-relaxed">
              <p>
                <strong>Сингапур</strong> — город-государство в Юго-Восточной Азии, основанный в 1819 году сэром Стэмфордом Раффлзом. С момента обретения независимости в 1965 году Сингапур превратился из небольшого торгового порта в один из самых развитых и богатых городов мира.
              </p>
              <p>
                Благодаря стратегическому расположению на перекрестке торговых путей, Сингапур стал важным финансовым центром Азии. Сегодня это многонациональное государство, где гармонично сосуществуют китайская, малайская, индийская и европейская культуры.
              </p>
              <p>
                Сингапур известен своей чистотой, безопасностью, высоким уровнем жизни и впечатляющей современной архитектурой, соседствующей с историческими районами и природными заповедниками.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="cities" className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/18bee093-cc36-4ff8-87ca-57a6b47b058c.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(5px) brightness(1.1)' }}
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Города для посещения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cities.map((city, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-4">{city.name}</h3>
                  <p className="mb-6">{city.description}</p>
                  <div>
                    <p className="font-semibold text-sm mb-2">Достопримечательности:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {city.attractions.map((attraction, aIdx) => (
                        <li key={aIdx} className="text-sm">{attraction}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cuisine" className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/6d0c0797-706d-4214-a2a3-b5cf3bfb4ae2.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(5px) brightness(1.1)' }}
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Кухня Сингапура</h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-center">
              Сингапурская кухня — это уникальное сочетание китайских, малайских, индийских и европейских кулинарных традиций. Хокер-центры (hawker centres) — главные места, где можно попробовать настоящую уличную еду.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dishes.map((dish, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">{dish.name}</h3>
                  <p className="text-sm">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/2367590a-f601-46fb-9d8b-68d2f95598b8.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(5px) brightness(1.1)' }}
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl font-heading font-bold mb-8 text-center">Музыка и кинематограф</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Музыка</h3>
                <p className="leading-relaxed">
                  Сингапурская музыкальная сцена разнообразна: от традиционных китайских и малайских мелодий до современного поп-рока и электронной музыки. Популярные артисты: Stefanie Sun, JJ Lin, The Sam Willows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Кинематограф</h3>
                <p className="leading-relaxed">
                  Сингапурское кино известно такими фильмами как "Crazy Rich Asians" (2018). Ежегодно проводится Singapore International Film Festival, привлекающий режиссеров со всего мира.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="holidays" className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/18bee093-cc36-4ff8-87ca-57a6b47b058c.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(5px) brightness(1.1)' }}
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Главные праздники</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {holidays.map((holiday, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">{holiday.name}</h3>
                  <p className="text-sm font-semibold mb-2">{holiday.date}</p>
                  <p>{holiday.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="dream" className="py-16 px-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/453e926c-caed-4d4b-a2b0-7ead4278a171/files/6d0c0797-706d-4214-a2a3-b5cf3bfb4ae2.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(5px) brightness(1.1)' }}
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-heading font-bold mb-6">Почему Сингапур — моя мечта?</h2>
          </div>
          <Card>
            <CardContent className="p-8 text-lg leading-relaxed space-y-4">
              <p>
                Сингапур для меня — это воплощение идеального баланса между традициями и инновациями, природой и урбанистикой. Это место, где можно прогуляться по футуристическим садам Gardens by the Bay, а через час оказаться в историческом квартале с колониальной архитектурой.
              </p>
              <p>
                Меня восхищает, как в этом небольшом городе-государстве гармонично уживаются разные культуры, религии и традиции. Сингапур — это страна возможностей, где чистота, безопасность и высокие технологии создают комфортную среду для жизни и путешествий.
              </p>
              <p>
                Особенно привлекает возможность попробовать аутентичную азиатскую кухню в хокер-центрах, посетить знаменитый ботанический сад (объект ЮНЕСКО) и увидеть ночное шоу у Marina Bay Sands. Сингапур — это мечта, которую хочется осуществить!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">Сингапур — страна мечты</h3>
          <p className="text-white/90 mb-6">Разработано студентом ХГУ Захаром Куратовым, группа 225</p>
          <div className="flex justify-center gap-4">
            {sections.slice(0, 4).map((section) => (
              <Button
                key={section.id}
                variant="outline"
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;