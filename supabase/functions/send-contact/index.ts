import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, phone } = await req.json();

    if (!email || !phone) {
      return new Response(JSON.stringify({ error: 'Email и телефон обязательны' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Некорректный email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (phone.length < 6 || phone.length > 20) {
      return new Response(JSON.stringify({ error: 'Некорректный номер телефона' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Фокус с Аи <onboarding@resend.dev>',
        to: ['aleks5maridi@gmail.com'],
        subject: 'Новая заявка с сайта "Фокус с Аи"',
        html: `
          <h2>Новая заявка с сайта</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><em>Отправлено с сайта "Фокус с Аи"</em></p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error('Resend error:', errorData);
      return new Response(JSON.stringify({ error: 'Ошибка отправки письма' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Внутренняя ошибка сервера' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
