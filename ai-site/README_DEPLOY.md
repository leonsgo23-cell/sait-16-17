# Deploy (Vercel / Netlify) — без Lovable

Это React+Vite лендинг. Его можно опубликовать за 3–5 минут и получить ссылку.

## 1) Локальный запуск

```bash
npm i
npm run dev
```

## 2) Сборка

```bash
npm run build
```

После сборки статические файлы будут в `dist/`.

## 3) Публикация на Vercel (самый простой)

1. Загрузи проект в GitHub (или просто импортируй папку в Vercel).
2. В Vercel: **New Project → Import**.
3. Framework: Vite (обычно определяется автоматически).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Добавь переменные окружения (Project Settings → Environment Variables):
   - `VITE_STRIPE_PAYMENT_LINK` — ссылка Stripe Payment Link (когда будет готово)
   - `VITE_TELEGRAM_LINK` — ссылка на Telegram группу/инвайт
7. Deploy.

## 4) Публикация на Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: те же `VITE_*`

## 5) Страница "Спасибо" после оплаты

Есть статичная страница: `/success.html`.

Когда будешь настраивать Stripe:
- в Stripe укажи Redirect/Success URL на `https://ТВОЙ_ДОМЕН/success.html`
- на самой странице поменяй TG ссылку (или мы сделаем её динамической через параметры).

