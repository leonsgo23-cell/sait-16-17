
import React, { useState } from 'react';
import { supabase } from './src/integrations/supabase/client';
const authorPhoto = '/images/author-photo.png';
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
  Award,
  Globe,
  GraduationCap,
  Sun
} from 'lucide-react';

// UI Components
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <BrainCircuit className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-tight tracking-wider uppercase text-[10px] sm:text-sm text-slate-800">Фокус с Аи</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-slate-500 font-medium">
        <a href="#problems" className="hover:text-slate-900 transition-colors">Проблема</a>
        <a href="#lunar" className="hover:text-slate-900 transition-colors">Почему сейчас?</a>
        <a href="#program" className="hover:text-slate-900 transition-colors">Программа</a>
        <a href="#pricing" className="hover:text-slate-900 transition-colors">Стоимость</a>
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
    {/* Glow Effects */}
    <div className="blur-glow bg-blue-400 w-[600px] h-[600px] -top-40 -left-40 opacity-20" />
    <div className="blur-glow bg-purple-300 w-[500px] h-[500px] top-40 -right-20 opacity-20" />
    <div className="absolute top-20 right-[10%] opacity-10 animate-pulse">
      <Moon size={120} className="text-blue-400 filter blur-[1px]" />
    </div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-300/40 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8">
        <Moon size={14} className="animate-spin-slow" />
        16-17 Февраля • В гармонии с лунным циклом
      </div>
      <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[1] tracking-tighter text-slate-900">
        Постановка целей и построение <span className="gradient-text">системы достижения</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        Первый день — избавление от старого и мешающего.<br />
        Второй день — построение планов и целей на весь год.<br />
        <span className="text-blue-600 font-semibold">Бонус: Соберём AI-ассистента, который будет помогать достичь ваших целей весь год.</span>
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
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-3xl blur-2xl opacity-50"></div>
        <div className="relative bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center shadow-lg">
          <div className="flex flex-col items-center gap-2"><Target className="w-8 h-8 text-blue-600" /> <span className="text-xs uppercase font-bold tracking-widest text-slate-600">Цели 2026</span></div>
          <div className="flex flex-col items-center gap-2"><Clock className="w-8 h-8 text-blue-600" /> <span className="text-xs uppercase font-bold tracking-widest text-slate-600">Ежедневный спринт</span></div>
          <div className="flex flex-col items-center gap-2"><BrainCircuit className="w-8 h-8 text-blue-600" /> <span className="text-xs uppercase font-bold tracking-widest text-slate-600">AI Агент</span></div>
          <div className="flex flex-col items-center gap-2"><Stars className="w-8 h-8 text-blue-600" /> <span className="text-xs uppercase font-bold tracking-widest text-slate-600">Лунный ритм</span></div>
        </div>
      </div>
    </div>
  </section>
);

const LunarSection = () => (
  <section id="lunar" className="py-24 px-6 relative overflow-hidden border-y border-slate-200/60 bg-gradient-to-b from-blue-50/80 to-indigo-50/60">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-10 bg-blue-300/20 blur-[100px] rounded-full"></div>
          <div className="relative space-y-8">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
              Почему 16-17 февраля — <br /><span className="text-blue-600">идеальное время?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white/70 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">16.02</div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-800">День очищения (Тёмная Луна)</h4>
                  <p className="text-slate-500 text-sm">Идеальное время для аудита прошлого года, избавления от лишнего и составления стоп-листа. Энергия на спаде помогает легко отпускать ненужное и то, что мешает.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-200/60 ring-1 ring-blue-300/30 shadow-lg shadow-blue-200/30">
                <div className="w-12 h-12 shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold animate-pulse text-sm">17.02</div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-blue-700">Рождение нового (Новолуние. Китайский новый год)</h4>
                  <p className="text-blue-600/70 text-sm">Точка старта. Планы, заложенные в этот день, получают поддержку естественного цикла роста. Это фундамент на весь год.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-8 bg-white/70 border border-slate-200/60 rounded-3xl space-y-4 hover:border-blue-300/60 transition-all shadow-sm">
            <Stars className="text-yellow-500" />
            <h5 className="font-bold text-slate-800">Биоритмы</h5>
            <p className="text-slate-500 text-sm">Мозг лучше фокусируется на будущем, когда внешняя среда находится в фазе обновления.</p>
          </div>
          <div className="p-8 bg-white/70 border border-slate-200/60 rounded-3xl space-y-4 hover:border-blue-300/60 transition-all shadow-sm">
            <Sun className="text-orange-400" />
            <h5 className="font-bold text-slate-800">Лунный календарь</h5>
            <p className="text-slate-500 text-sm">Планирование по фазам Луны помогает синхронизировать действия с естественными циклами энергии и продуктивности.</p>
          </div>
          <div className="p-8 bg-white/70 border border-slate-200/60 rounded-3xl space-y-4 hover:border-blue-300/60 transition-all shadow-sm">
            <BrainCircuit className="text-purple-500" />
            <h5 className="font-bold text-slate-800">Помощник с искусственным интеллектом</h5>
            <p className="text-slate-500 text-sm">Будет знать ваши цели, напоминать о приоритетах и не даст вам слиться с намеченного пути.</p>
          </div>
          <div className="p-8 bg-white/70 border border-slate-200/60 rounded-3xl space-y-4 hover:border-blue-300/60 transition-all shadow-sm">
            <Calendar className="text-green-500" />
            <h5 className="font-bold text-slate-800">Мощная связка</h5>
            <p className="text-slate-500 text-sm">Осознание своих желаний, энергия вселенной и возможности искусственного интеллекта.</p>
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
    <section id="problems" className="py-24 px-6 bg-slate-50/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-slate-900">Вы узнаете себя, если…</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, idx) => (
            <div key={idx} className="p-6 bg-white/70 border border-slate-200/60 rounded-2xl flex items-start gap-4 hover:border-red-300/60 transition-colors shadow-sm">
              <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
              <p className="text-slate-600 font-medium leading-relaxed">{item}</p>
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
      <h2 className="text-4xl md:text-5xl font-black mb-12 text-slate-900">В чём реальная проблема?</h2>
      <div className="space-y-8 text-xl text-slate-500">
        <p>
          Проблема не в нехватке времени. <br />
          И не в количестве задач.
        </p>
        <div className="p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/40 rounded-[3rem] text-left relative overflow-hidden group shadow-lg">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={140} /></div>
          <h3 className="text-slate-800 font-bold mb-8 text-3xl">Проблема в отсутствии внешней системы, которая:</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-slate-700 text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Видит всю систему целиком
            </li>
            <li className="flex items-center gap-4 text-slate-700 text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Между задачами и направлениями
            </li>
            <li className="flex items-center gap-4 text-slate-700 text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Удерживает фокус на главном
            </li>
            <li className="flex items-center gap-4 text-slate-700 text-lg">
              <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> Анализирует твои результаты
            </li>
            <li className="flex items-center gap-4 text-slate-700 text-lg">
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
          <div className="bg-slate-900/40 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md">
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
    <section id="program" className="py-24 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">Программа тренинга</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {days.map((item) => (
            <div key={item.day} className="bg-white/70 border border-slate-200/60 rounded-[3rem] p-10 relative hover:border-blue-300/60 transition-all group overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl group-hover:bg-blue-300/20 transition-colors"></div>
              <div className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl mb-6">
                Этап {item.day}
              </div>
              <h3 className="text-3xl font-black mb-2 group-hover:text-blue-600 transition-colors leading-tight text-slate-800">{item.title}</h3>
              <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-8">{item.subtitle}</p>
              <ul className="space-y-6">
                {item.steps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0 mt-0.5 text-sm font-black text-blue-600">
                      {sIdx + 1}
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed">{step}</p>
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

const Author = () => {
  const achievements = [
    { icon: <Globe className="text-blue-500" size={24} />, text: "Выручка проектов более 10 млн € и 100 000+ пользователей по всему миру" },
    { icon: <GraduationCap className="text-purple-500" size={24} />, text: "Образование в области психологии, коучинга, НЛП и эриксоновского гипноза" },
    { icon: <Award className="text-yellow-500" size={24} />, text: "Авторская программа достижения целей: 80% участников достигают целей за 60 дней" },
    { icon: <Users className="text-green-500" size={24} />, text: "Физические офисы в 5 странах, обучение предпринимателей из разных стран" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-50/60 to-blue-50/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="blur-glow bg-blue-300 w-[400px] h-[400px] -top-20 -right-20 opacity-15" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900">Кто ведёт практикум</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Author Info */}
          <div className="lg:col-span-2 flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-2xl shadow-blue-300/30 border-4 border-blue-300/40">
              <img src={authorPhoto} alt="Александр Обулевич" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-black mb-2 text-slate-900">Александр Обулевич</h3>
            <p className="text-blue-600 font-bold text-lg mb-6">Бизнес-коуч • Серийный предприниматель</p>
            <p className="text-slate-500 leading-relaxed">
              Многолетний предпринимательский опыт и глубокое образование позволяют видеть слабые и сильные стороны бизнес-проектов, находить точки кратного роста и выстраивать стратегию масштабирования.
            </p>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-3 space-y-5">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-6 bg-white/70 rounded-2xl border border-slate-200/60 hover:border-blue-300/60 transition-all shadow-sm">
                <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-slate-700 font-medium text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
            
            <div className="p-6 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 rounded-2xl border border-blue-200/40">
              <p className="text-blue-700 font-bold text-lg leading-relaxed">
                🎯 Сейчас вместе с партнёрами строит международную сеть Арт Студий — цель на 2026: 100 студий по всему миру.
              </p>
            </div>
          </div>
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
    <section className="py-24 px-6 border-y border-slate-200/60 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[4rem] p-12 md:p-20 border border-slate-200/60 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-10 opacity-5"><Stars size={200} /></div>
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-slate-900">Что изменится через 30 дней</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-6 p-8 bg-white/70 rounded-[2rem] border border-slate-200/60 hover:border-blue-300/40 transition-all shadow-sm">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center border border-blue-200/40">
                  <Calendar className="text-blue-600" size={28} />
                </div>
                <p className="text-xl font-bold leading-tight text-slate-800">{item}</p>
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
  <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-50/80 to-blue-50/60">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-block p-6 bg-blue-100 border border-blue-200/40 rounded-[2.5rem] mb-12 shadow-xl shadow-blue-200/30">
        <BrainCircuit size={64} className="text-blue-600" />
      </div>
      <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-slate-900">Как искусственный интеллект будет вам помогать?</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        <div className="p-6 bg-white/70 rounded-2xl border border-slate-200/60 font-bold uppercase tracking-widest text-xs text-slate-600 shadow-sm">AI не устаёт</div>
        <div className="p-6 bg-white/70 rounded-2xl border border-slate-200/60 font-bold uppercase tracking-widest text-xs text-slate-600 shadow-sm">Не забывает</div>
        <div className="p-6 bg-white/70 rounded-2xl border border-slate-200/60 font-bold uppercase tracking-widest text-xs text-slate-600 shadow-sm">Не отвлекается</div>
      </div>
      <div className="space-y-8 text-xl text-slate-500 leading-relaxed mb-16">
        <p className="text-2xl font-medium">Вы превращаете его в персонального ассистента, который:</p>
        <div className="max-w-2xl mx-auto text-left space-y-5">
          <div className="flex items-center gap-4 text-slate-700 p-5 bg-white/70 rounded-2xl border border-slate-200/60 hover:bg-white transition-all shadow-sm">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Хранит вашу уникальную годовую структуру</span>
          </div>
          <div className="flex items-center gap-4 text-slate-700 p-5 bg-white/70 rounded-2xl border border-slate-200/60 hover:bg-white transition-all shadow-sm">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Знает все ваши проекты и реальные приоритеты</span>
          </div>
          <div className="flex items-center gap-4 text-slate-700 p-5 bg-white/70 rounded-2xl border border-slate-200/60 hover:bg-white transition-all shadow-sm">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Каждый день возвращает вас к самому главному</span>
          </div>
          <div className="flex items-center gap-4 text-slate-700 p-5 bg-white/70 rounded-2xl border border-slate-200/60 hover:bg-white transition-all shadow-sm">
            <CheckCircle2 className="text-blue-500 shrink-0" size={24} /> 
            <span className="font-bold">Помогает разбирать входящий хаос без стресса</span>
          </div>
        </div>
      </div>
      <div className="p-10 bg-white/70 border border-slate-200/60 rounded-[3rem] backdrop-blur-md shadow-lg">
        <p className="text-3xl font-black text-slate-800">Это не теория. Это калибровка вашей реальности под возможности будущего.</p>
      </div>
    </div>
  </section>
);

const Audience = () => (
  <section className="py-24 px-6 bg-white/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50/80 border border-green-200/40 rounded-[3rem] p-12 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users size={120} /></div>
          <h3 className="text-3xl font-black mb-10 flex items-center gap-4 text-slate-800">
             <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center"><CheckCircle2 className="text-green-600" /></div> Подойдёт, если вы:
          </h3>
           <ul className="space-y-6">
             <li className="flex gap-4 text-lg text-slate-600 font-medium">
                Предприниматель или руководитель с несколькими направлениями
             </li>
             <li className="flex gap-4 text-lg text-slate-600 font-medium">
                Устали от постоянного ощущения «недоделанных дел»
             </li>
             <li className="flex gap-4 text-lg text-slate-600 font-medium">
                Хотите навести порядок в голове через системную автоматизацию
             </li>
             <li className="flex gap-4 text-lg text-slate-600 font-medium">
                Уже пользуетесь ChatGPT, но чувствуете, что используете его на 5%
             </li>
           </ul>
        </div>
        <div className="bg-red-50/80 border border-red-200/40 rounded-[3rem] p-12 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><XCircle size={120} /></div>
          <h3 className="text-3xl font-black mb-10 flex items-center gap-4 text-slate-800">
             <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center"><XCircle className="text-red-500" /></div> Не подойдёт, если вы:
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4 text-lg text-slate-600 font-medium">
               Ищете просто мотивацию или «вдохновляющие лекции»
            </li>
            <li className="flex gap-4 text-lg text-slate-600 font-medium">
               Не готовы выделить 2 полных дня на глубокую настройку
            </li>
            <li className="flex gap-4 text-lg text-slate-600 font-medium">
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
    <div className="blur-glow bg-blue-400 w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-slate-300/40 relative overflow-hidden transform hover:-rotate-1 transition-transform border border-slate-200/60">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <BrainCircuit size={160} />
        </div>
        <div className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-black uppercase tracking-[0.2em] mb-8">
          16-17 Февраля
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-slate-400">Двухдневный Практикум</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-slate-800">Постановка целей и построение <br />системы достижения</h3>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="text-2xl text-slate-400 line-through font-bold">149 €</div>
          <div className="text-8xl font-black text-blue-600 leading-none">89 €</div>
        </div>
        <button onClick={goToCheckout} className="w-full py-8 bg-slate-900 text-white rounded-3xl font-black text-3xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 transform hover:scale-[1.02]">
          Зарегистрироваться
        </button>
      </div>
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200/60 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-black group-hover:text-blue-600 transition-colors tracking-tight text-slate-800">{question}</span>
        <ChevronDown className={`transition-transform duration-300 text-blue-500 ${isOpen ? 'rotate-180' : ''}`} size={28} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-500 text-xl font-medium leading-relaxed">{answer}</p>
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
    <section className="py-24 px-6 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center tracking-tighter text-slate-900">Вопросы и ответы</h2>
        <div className="space-y-2">
          {questions.map((q, idx) => (
            <FAQItem key={idx} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showSupport, setShowSupport] = useState(false);
  return (
  <footer className="py-20 px-6 border-t border-slate-200/60 bg-slate-900">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20">
            <BrainCircuit className="text-white w-7 h-7" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase text-white">Фокус с Аи</span>
        </div>
        <div className="relative flex flex-wrap justify-center gap-8 text-gray-400 font-bold uppercase tracking-widest text-xs">
          <button onClick={() => setShowSupport(!showSupport)} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none text-gray-400 font-bold uppercase tracking-widest text-xs">Поддержка</button>
          {showSupport && (
            <div className="absolute bottom-full mb-3 bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-2xl text-left normal-case tracking-normal min-w-[250px]">
              <p className="text-white font-bold text-sm mb-3">Связаться с нами</p>
              <p className="text-gray-400 text-sm mb-2">📧 support@ailunarfocus.com</p>
              <p className="text-gray-400 text-sm">📞 +49 123 456 7890</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-700">
        <p className="text-slate-500 text-sm font-medium">© 2024-2026 Фокус с Аи. Создано для смелых.</p>
        <div className="flex gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-slate-300 transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Условия использования</a>
        </div>
      </div>
    </div>
  </footer>
  );
};


const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { data, error } = await supabase.functions.invoke('send-contact', {
        body: { email, phone },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setStatus('success');
      setEmail('');
      setPhone('');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Произошла ошибка. Попробуйте позже.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Остались вопросы?</h2>
        <p className="text-slate-500 text-lg mb-10">Оставьте свои контакты, и мы свяжемся с вами в ближайшее время</p>

        {status === 'success' ? (
          <div className="p-8 bg-green-50 border border-green-200 rounded-2xl">
            <CheckCircle2 className="text-green-500 mx-auto mb-3" size={48} />
            <p className="text-green-700 font-bold text-xl">Спасибо! Мы скоро свяжемся с вами.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Телефон</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 123-45-67"
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            {status === 'error' && (
              <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Отправляем...' : 'Свяжитесь со мной'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// Links from env (set in Vercel/Netlify)
const STRIPE_PAYMENT_LINK = (import.meta as any).env?.VITE_STRIPE_PAYMENT_LINK as string | undefined;
const TELEGRAM_LINK = (import.meta as any).env?.VITE_TELEGRAM_LINK as string | undefined;

const goToCheckout = () => {
  window.open("https://buy.stripe.com/6oU4gsd5fcBFgHc09U0ZW07", "_blank");
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <LunarSection />
      <RealProblem />
      <WhatYouGet />
      <Schedule />
      <Author />
      <Outcomes />
      <WhyAI />
      <Audience />
      <Symptoms />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
      
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
       <a
  href="https://buy.stripe.com/6oU4gsd5fcBFgHc09U0ZW07"
  target="_blank"
  rel="noreferrer"
  className="block w-full py-5 bg-blue-600 text-white text-center rounded-2xl font-black text-lg shadow-2xl shadow-blue-500/30"
>
          Занять место — 89 €
        </a>
      </div>
    </div>
  );
}

export default App;
