
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ChevronDown, 
  BrainCircuit, 
  Calendar, 
  Zap, 
  ShieldCheck, 
  Users, 
  Clock, 
  Sparkles,
  Target,
  PlusCircle,
  Moon,
  Stars,
  Sun
} from 'lucide-react';

// UI Components
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <BrainCircuit className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-tight tracking-wider uppercase text-[10px] sm:text-sm">AI Lunar Focus</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
        <a href="#problems" className="hover:text-white transition-colors">Проблема</a>
        <a href="#lunar" className="hover:text-white transition-colors">Почему сейчас?</a>
        <a href="#program" className="hover:text-white transition-colors">Программа</a>
        <a href="#pricing" className="hover:text-white transition-colors">Стоимость</a>
      </div>
<a
  href="#pricing"
>
  Участвовать
</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    {/* Lunar Glow Effects */}
    <div className="blur-glow bg-blue-500 w-[600px] h-[600px] -top-40 -left-40 opacity-10" />
    <div className="blur-glow bg-indigo-400 w-[500px] h-[500px] top-40 -right-20 opacity-20" />
    <div className="absolute top-20 right-[10%] opacity-20 animate-pulse">
      <Moon size={120} className="text-blue-200 filter blur-[1px]" />
    </div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/5 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8">
        <Moon size={14} className="animate-spin-slow" />
        16-17 Февраля • В гармонии с лунным циклом
      </div>
      <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[1] tracking-tighter">
        Постановка целей и построение <span className="gradient-text">системы достижения</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Первый день — избавление от старого и мешающего.<br />
        Второй день — построение планов и целей на весь год.<br />
        <span className="text-blue-300 font-semibold">Бонус: Соберём AI-ассистента, который будет помогать достичь ваших целей весь год.</span>
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
       <a
  href="https://buy.stripe.com/6oU4gsd5fcBFgHc09U0ZW07"
  target="_blank"
  rel="noreferrer"
  className="w-full sm:w-auto inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 border-2 border-blue-400/30 ring-2 ring-blue-500/20 animate-pulse"
      >
          📖 Забронировать место на 16-17 февраля
          <ArrowRight size={24} />
        </a>
      </div>
      
      <div className="mt-20 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-50"></div>
        <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center grayscale opacity-60">
          <div className="flex flex-col items-center gap-2"><Target className="w-8 h-8 text-blue-400" /> <span className="text-xs uppercase font-bold tracking-widest">Цели 2026</span></div>
          <div className="flex flex-col items-center gap-2"><Clock className="w-8 h-8 text-blue-400" /> <span className="text-xs uppercase font-bold tracking-widest">Ежедневный спринт</span></div>
          <div className="flex flex-col items-center gap-2"><BrainCircuit className="w-8 h-8 text-blue-400" /> <span className="text-xs uppercase font-bold tracking-widest">AI Агент</span></div>
          <div className="flex flex-col items-center gap-2"><Stars className="w-8 h-8 text-blue-400" /> <span className="text-xs uppercase font-bold tracking-widest">Лунный ритм</span></div>
        </div>
      </div>
    </div>
  </section>
);

const LunarSection = () => (
  <section id="lunar" className="py-24 px-6 relative overflow-hidden border-y border-white/5 bg-[#050a18]">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full"></div>
          <div className="relative space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Почему 16-17 февраля — <br /><span className="text-blue-400">идеальное время?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-12 h-12 shrink-0 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">16.02</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">День очищения (Тёмная Луна)</h4>
                  <p className="text-gray-400 text-sm">Идеальное время для аудита прошлого года, избавления от лишнего и составления стоп-листа. Энергия на спаде помогает легко отпускать ненужное и то, что мешает.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-blue-600/20 rounded-2xl border border-blue-500/30 ring-1 ring-blue-500/20 shadow-lg shadow-blue-500/10">
                <div className="w-12 h-12 shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse text-sm">17.02</div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-blue-300">Рождение нового (Новолуние. Китайский новый год)</h4>
                  <p className="text-blue-100/70 text-sm">Точка старта. Планы, заложенные в этот день, получают поддержку естественного цикла роста. Это фундамент на весь год.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-8 bg-gray-900 border border-white/5 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all">
            <Stars className="text-yellow-500" />
            <h5 className="font-bold">Биоритмы</h5>
            <p className="text-gray-400 text-sm">Мозг лучше фокусируется на будущем, когда внешняя среда находится в фазе обновления.</p>
          </div>
          <div className="p-8 bg-gray-900 border border-white/5 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all">
            <Sun className="text-orange-400" />
            <h5 className="font-bold">Лунный календарь</h5>
            <p className="text-gray-400 text-sm">Планирование по фазам Луны помогает синхронизировать действия с естественными циклами энергии и продуктивности.</p>
          </div>
          <div className="p-8 bg-gray-900 border border-white/5 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all">
            <BrainCircuit className="text-purple-400" />
            <h5 className="font-bold">Помощник с искусственным интеллектом</h5>
            <p className="text-gray-400 text-sm">Будет знать ваши цели, напоминать о приоритетах и не даст вам слиться с намеченного пути.</p>
          </div>
          <div className="p-8 bg-gray-900 border border-white/5 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all">
            <Calendar className="text-green-400" />
            <h5 className="font-bold">Мощная связка</h5>
            <p className="text-gray-400 text-sm">Осознание своих желаний, энергия вселенной и возможности искусственного интеллекта.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Symptoms = () => {
  const list = [
    "У вас несколько проектов, и каждый день начинается с вопроса «за что хвататься»",
    "Вы уже используете ChatGPT, но хаотично и без системы",
    "Список задач растёт быстрее, чем вы его закрываете",
    "В голове постоянно ощущение перегруза и недоделанных дел",
    "Вы понимаете, что можете больше, но распыление съедает результат",
    "В конце недели сложно ответить себе: что реально продвинулось"
  ];

  return (
    <section id="problems" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Вы узнаете себя, если…</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-800/40 border border-white/5 rounded-2xl flex items-start gap-4 hover:border-blue-500/30 transition-colors">
              <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
              <p className="text-gray-300 font-medium leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RealProblem = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-12">В чём реальная проблема?</h2>
      <div className="space-y-8 text-xl text-gray-400">
        <p>
          Проблема не в нехватке времени. <br />
          И не в количестве задач.
        </p>
        <div className="p-10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-[3rem] text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={140} /></div>
          <h3 className="text-white font-bold mb-8 text-3xl">Проблема в отсутствии внешней системы, которая:</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-white text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Видит всю систему целиком
            </li>
            <li className="flex items-center gap-4 text-white text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Между задачами и направлениями
            </li>
            <li className="flex items-center gap-4 text-white text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Удерживает фокус на главном
            </li>
            <li className="flex items-center gap-4 text-white text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Анализирует твои результаты
            </li>
            <li className="flex items-center gap-4 text-white text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Даёт рекомендации для следующих шагов
            </li>
          </ul>
        </div>
        <p className="leading-relaxed">
          Чтобы не оставаться один на один с хаосом. <br />
          Персональный ассистент на базе искусственного интеллекта управляет вниманием и приоритетами.
        </p>
      </div>
    </div>
  </section>
);

const WhatYouGet = () => {
  const mainItems = [
    "Аудит года: поймём, куда утекала энергия",
    "«Что я НЕ буду точно делать в 2026»",
    "Стоп-лист: решим, от чего отказаться",
    "Ценности: определим ради чего вы достигаете своих целей",
    "Сгенерируем цели из ценностей",
    "Отфильтруем «чужие» цели",
    "Выберем 3 главных приоритета",
    "Построим план по шагам"
  ];

  const bonusItems = [
    "Настроите персонального AI-ассистента под себя и свои проекты",
    "Загрузите в него свой годовой план и структуру задач",
    "Научите его возвращать вас к приоритетам каждый день",
    "Создадите систему ежедневной работы через AI",
    "Получите готовую структуру взаимодействия с AI на каждый день"
  ];

  return (
    <section className="py-24 px-6 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tighter">
            Что вы получите за 2 дня
          </h2>
          <p className="text-blue-100 text-xl font-medium max-w-4xl mx-auto leading-relaxed">
            Систему целей на 2026 год. AI ассистента, который будет помогать, анализировать и находить лучшие способы достижения ваших целей
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Program */}
          <div className="bg-white/10 p-10 rounded-[3rem] border border-white/20 backdrop-blur-xl shadow-2xl">
            <h3 className="text-3xl font-black mb-10 text-white flex items-center gap-3">
               <Target className="text-white" size={32} /> Основная программа
            </h3>
            <div className="space-y-4">
              {mainItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-all transform hover:-translate-x-1">
                  <CheckCircle2 className="text-white mt-1 shrink-0" size={24} />
                  <span className="text-white font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Results (Gift) */}
          <div className="bg-gray-950/40 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-10 text-blue-200 flex items-center gap-3 leading-tight">
               <PlusCircle className="text-blue-400" /> Дополнительный результат: AI ассистент по достижению ваших целей
            </h3>
            <div className="space-y-4 mb-10">
              {bonusItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border-l-4 border-blue-500/40 bg-blue-500/5 rounded-r-xl">
                  <Zap className="text-blue-400 mt-1 shrink-0" size={20} />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-900/30 p-8 rounded-3xl border border-blue-500/20">
              <p className="text-blue-200/60 italic mb-3 text-sm font-bold uppercase tracking-widest">Результат практикума:</p>
              <p className="text-2xl font-black text-white leading-tight">У вас будет чёткий план на год</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Schedule = () => {
  const days = [
    {
      day: 1,
      title: "16 Февраля — Аудит & Структура",
      subtitle: "День Очищения",
      steps: [
        "Разбираем ваши проекты и направления",
        "Проводим глубокий аудит утечек энергии",
        "Формируем понятную годовую структуру",
        "Убираем всё лишнее и формируем Стоп-лист",
        "Загружаем эту структуру в AI для хранения контекста"
      ]
    },
    {
      day: 2,
      title: "17 Февраля — Цели & Практика",
      subtitle: "День Рождения Системы",
      steps: [
         "Синхронизируем цели с вашими ценностями",
         "Выбор приоритета — определим главное направление",
         "Сделаем декомпозицию цели на конкретные шаги",
         "Построим финансовый план для достижения целей",
         "Доводим систему до состояния «полная готовность»"
      ]
    }
  ];

  return (
    <section id="program" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Программа тренинга</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {days.map((item) => (
            <div key={item.day} className="bg-gray-900/50 border border-white/5 rounded-[3rem] p-10 relative hover:border-blue-500/50 transition-all group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="inline-block px-5 py-2 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest shadow-xl mb-6">
                Этап {item.day}
              </div>
              <h3 className="text-3xl font-black mb-2 group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h3>
              <p className="text-blue-400/80 font-bold text-sm uppercase tracking-widest mb-8">{item.subtitle}</p>
              <ul className="space-y-6">
                {item.steps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sm font-black text-blue-500">
                      {sIdx + 1}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const items = [
    "Чётко работаете по годовой структуре",
    "Перестаёте пытаться делать всё одновременно",
    "Начинаете каждый день с понятным фокусом",
    "Видите, как продвигаются именно ключевые направления",
    "Используете AI как ассистента, а не как игрушку для запросов"
  ];

  return (
    <section className="py-24 px-6 border-y border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/10 rounded-[4rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5"><Stars size={200} /></div>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Что изменится через 30 дней</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:border-blue-500/20 transition-all">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                  <Calendar className="text-blue-400" size={28} />
                </div>
                <p className="text-xl font-bold leading-tight">{item}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center p-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl shadow-blue-500/20">
               <Stars className="text-white/50 mb-4" />
               <p className="text-2xl font-black text-white leading-tight">Появляется ощущение тотального контроля и порядка в голове.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyAI = () => (
  <section className="py-24 px-6 relative overflow-hidden bg-gray-950">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-block p-6 bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] mb-12 shadow-2xl shadow-blue-500/10">
        <BrainCircuit size={64} className="text-blue-500" />
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Как искусственный интеллект будет вам помогать?</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 font-bold uppercase tracking-widest text-xs">AI не устаёт</div>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 font-bold uppercase tracking-widest text-xs">Не забывает</div>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 font-bold uppercase tracking-widest text-xs">Не отвлекается</div>
      </div>
      <div className="space-y-8 text-xl text-gray-400 leading-relaxed mb-16">
        <p className="text-2xl font-medium">Вы превращаете его в персонального ассистента, который:</p>
        <div className="max-w-2xl mx-auto text-left space-y-5">
          <div className="flex items-center gap-4 text-white p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Хранит вашу уникальную годовую структуру</span>
          </div>
          <div className="flex items-center gap-4 text-white p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Знает все ваши проекты и реальные приоритеты</span>
          </div>
          <div className="flex items-center gap-4 text-white p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Каждый день возвращает вас к самому главному</span>
          </div>
          <div className="flex items-center gap-4 text-white p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Помогает разбирать входящий хаос без стресса</span>
          </div>
        </div>
      </div>
      <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md">
        <p className="text-3xl font-black text-white">Это не теория. Это калибровка вашей реальности под возможности будущего.</p>
      </div>
    </div>
  </section>
);

const Audience = () => (
  <section className="py-24 px-6 bg-[#030712]">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-500/5 border border-green-500/20 rounded-[3rem] p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users size={120} /></div>
          <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center"><CheckCircle2 className="text-green-500" /></div> Подойдёт, если вы:
          </h3>
           <ul className="space-y-6">
             <li className="flex gap-4 text-lg text-gray-300 font-medium">
                Предприниматель или руководитель с несколькими направлениями
             </li>
             <li className="flex gap-4 text-lg text-gray-300 font-medium">
                Устали от постоянного ощущения «недоделанных дел»
             </li>
             <li className="flex gap-4 text-lg text-gray-300 font-medium">
                Хотите навести порядок в голове через системную автоматизацию
             </li>
             <li className="flex gap-4 text-lg text-gray-300 font-medium">
                Уже пользуетесь ChatGPT, но чувствуете, что используете его на 5%
             </li>
           </ul>
        </div>
        <div className="bg-red-500/5 border border-red-500/20 rounded-[3rem] p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><XCircle size={120} /></div>
          <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center"><XCircle className="text-red-500" /></div> Не подойдёт, если вы:
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4 text-lg text-gray-300 font-medium">
               Ищете просто мотивацию или «вдохновляющие лекции»
            </li>
            <li className="flex gap-4 text-lg text-gray-300 font-medium">
               Не готовы выделить 2 полных дня на глубокую настройку
            </li>
            <li className="flex gap-4 text-lg text-gray-300 font-medium">
               Ожидаете, что AI за вас сделает всю физическую работу
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 px-6 relative">
    <div className="blur-glow bg-blue-600 w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="bg-white text-black p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden transform hover:-rotate-1 transition-transform border-[12px] border-white/10">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <BrainCircuit size={160} />
        </div>
        <div className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] mb-8">
          16-17 Февраля
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-gray-500">Двухдневный Практикум</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight">Постановка целей и построение <br />системы достижения</h3>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="text-2xl text-gray-400 line-through font-bold">149 €</div>
          <div className="text-8xl font-black text-blue-600 leading-none">89 €</div>
        </div>
        <p className="text-xl font-bold text-gray-700 mb-12 max-w-xl mx-auto">
          Вы заходите с хаосом, а выходите с персональным ассистентом, который знает ваши цели на 2026.
        </p>
        <button onClick={goToCheckout} className="w-full py-8 bg-black text-white rounded-3xl font-black text-3xl hover:bg-gray-800 transition-all shadow-2xl shadow-black/20 transform hover:scale-[1.02]">
          Зарегистрироваться
        </button>
      </div>
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-black group-hover:text-blue-400 transition-colors tracking-tight">{question}</span>
        <ChevronDown className={`transition-transform duration-300 text-blue-500 ${isOpen ? 'rotate-180' : ''}`} size={28} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 text-xl font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const questions = [
    {
      question: "Нужно ли хорошо разбираться в AI?",
      answer: "Нет. Достаточно базового опыта с ChatGPT. Всё остальное мы настраиваем «за руку» на практикуме. Вы просто повторяете шаги."
    },
    {
      question: "Это теория или практика?",
      answer: "Это 90% практики. В первый день мы «чистим» сознание и структуру, во второй — собираем работающий софт на базе AI под ваши задачи."
    },
    {
      question: "Если у меня много проектов, это подойдёт?",
      answer: "Это создано именно для вас. Многозадачность — главный враг фокуса. AI-ассистент поможет держать все контексты под контролем."
    },
    {
      question: "Почему именно 16-17 февраля?",
      answer: "Мы используем энергию Новолуния. Это мощный природный драйвер для новых начинаний. Планирование в этот период дает кратно лучший результат."
    },
    {
      question: "Будет ли запись?",
      answer: "Да, запись будет доступна всем участникам бессрочно. Вы сможете освежить настройки системы в любой момент."
    },
    {
      question: "Во сколько и как?",
      answer: "С 18:00 до 20:00. Созвон в Zoom. Ссылка на Zoom придёт вам на почту за час до начала."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center tracking-tighter">Вопросы и ответы</h2>
        <div className="space-y-2">
          {questions.map((q, idx) => (
            <FAQItem key={idx} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20">
            <BrainCircuit className="text-white w-7 h-7" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">AI Lunar Focus</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-bold uppercase tracking-widest text-xs">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href={TELEGRAM_LINK ?? "#"} target={TELEGRAM_LINK ? "_blank" : undefined} rel={TELEGRAM_LINK ? "noreferrer" : undefined} className="hover:text-white transition-colors">Telegram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">Поддержка</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
        <p className="text-gray-600 text-sm font-medium">© 2024-2026 AI Lunar Focus Workshop. Создано для смелых.</p>
        <div className="flex gap-8 text-gray-600 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Условия использования</a>
        </div>
      </div>
    </div>
  </footer>
);


// Links from env (set in Vercel/Netlify)
const STRIPE_PAYMENT_LINK = (import.meta as any).env?.VITE_STRIPE_PAYMENT_LINK as string | undefined;
const TELEGRAM_LINK = (import.meta as any).env?.VITE_TELEGRAM_LINK as string | undefined;

const goToCheckout = () => {
  window.open("https://buy.stripe.com/6oU4gsd5fcBFgHc09U0ZW07", "_blank");
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <LunarSection />
      <RealProblem />
      <WhatYouGet />
      <Schedule />
      <Outcomes />
      <WhyAI />
      <Audience />
      <Symptoms />
      <Pricing />
      <FAQ />
      <Footer />
      
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
       <a
  href="https://buy.stripe.com/6oU4gsd5fcBFgHc09U0ZW07"
  target="_blank"
  rel="noreferrer"
  className="block w-full py-5 ..."
>
          Занять место — 89 €
        </a>
      </div>
    </div>
  );
}

export default App;
