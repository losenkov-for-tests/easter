export interface Tradition {
  id: number;
  title: string;
  description: string;
  details: string;
  image?: string;
  symbolism?: string;
  origin?: string;
  geography?: string;
}

export const traditions: Tradition[] = [
  {
    id: 1,
    title: 'Крашение пасхальных яиц',
    description: 'Традиция украшения яиц с глубоким символическим значением',
    details: `Эта традиция восходит к временам Римской империи. Согласно преданию, Мария Магдалина преподнесла императору Тиберию яйцо как символ Воскресения Христова со словами "Христос Воскрес!". С тех пор яйца красят в красный цвет, символизирующий кровь Христа, а позже стали использовать и другие цвета.`,
    symbolism: 'Яйцо — символ жизни и воскресения, скорлупа — Гроба Господня',
    origin: 'I век н.э.',
    geography: 'Православные и католические страны',
    image: '/content/1.jpg',
  },
  {
    id: 2,
    title: 'Освящение куличей',
    description: 'Церковный обряд благословения пасхальной выпечки',
    details: `Традиция освящения пасхальных угощений в храме происходит от древнего обычая приносить первую пищу после поста в церковь для благословения. Кулич символизирует присутствие Христа за трапезой, а творожная пасха — Гроб Господень. Освящение проводится в Великую Субботу специальным чином.`,
    symbolism: 'Дрожжевой кулич — символ Воскресения и новой жизни',
    origin: 'XII век',
    geography: 'Восточная Европа, Россия',
    image: '/content/2.jpg',
  },
  {
    id: 3,
    title: 'Пасхальный крестный ход',
    description: 'Торжественное ночное шествие вокруг храма',
    details: `Главное богослужение года начинается с полунощницы и крестного хода. Участники с зажженными свечами трижды обходят храм, символизируя шествие жен-мироносиц ко Гробу Господню. В России сохранилась традиция украшать шествие фонарями и хоругвями.`,
    symbolism: 'Свет свечей — символ Воскресения Христова',
    origin: 'IV век',
    geography: 'Православные страны',
    image: '/content/3.jpg',
  },
  {
    id: 4,
    title: 'Игра в «битки»',
    description: 'Народная забава с пасхальными яйцами',
    details: `После освящения яиц принято устраивать соревнования: участники по очереди бьют яйца друг об друга. Чье яйцо останется целым — тот победитель. Традиция символизирует победу жизни над смертью и имеет языческие корни.`,
    origin: 'Древняя Русь',
    geography: 'Россия, Украина, Беларусь',
    image: '/content/4.jpeg',
  },
  {
    id: 5,
    title: 'Пасхальный агнец',
    description: 'Символическое изображение ягненка из теста',
    details: `В западной традиции принято печь фигурку агнца из теста, украшенную хоругвью. Этот символ восходит к ветхозаветному пасхальному агнцу, прообразу Христа. В России аналогичный символ — творожная пасха в форме усеченной пирамиды.`,
    symbolism: 'Агнец — символ жертвенной любви Христа',
    geography: 'Католические страны',
    image: '/content/5.jpg',
  },
  {
    id: 6,
    title: 'Пасхальный огонь',
    description: 'Благодатный огонь из Иерусалима',
    details: `Ежегодно в Великую Субботу в Храме Гроба Господня в Иерусалиме сходит Благодатный огонь. Его специальными авиарейсами доставляют в православные страны. Верующие зажигают от него свечи и лампады, сохраняя огонь весь год как святыню.`,
    origin: 'IV век',
    geography: 'Православный мир',
    image: '/content/6.jpg',
  },
];
