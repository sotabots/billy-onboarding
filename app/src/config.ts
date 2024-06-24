import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro

        // 1
        {
          media: {
            type: 'image',
            src: import('./assets/img/logo_koala_no_background.png'),
            size: 150,
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Привет, это Билли',
          description: "Я бот для ведения общих расходов, записи групповых трат и финального расчёта друг с другом в путешествии, в компании, в паре.",
          button: 'ДА КТО ТАКОЙ ЭТОТ ВАШ БИЛЛИ?!',
        },

        // 2
        {
          media: {
            type: 'image',
            src: import('./assets/img/buble_message.webp'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Революционная запись трат',
          description:
            'Просто добавь меня в ваш чат, чтобы начать пользоваться ботом. Траты можно записывать как текстом, так и голосовыми сообщениями! Я найду эти сообщения в чате и всё учту.',
          button: 'ТОП-3 проблемы группового расчёта',
        },

        // 3
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/utya_count_ducks.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Надоело переводить друг другу деньги после каждой общей оплаты и напоминать об этом?',
          description:
            'Достаточно, чтобы кто-то один написал о трате в чат – бот это увидит и запишет в историю. В конце периода я просуммирую все траты и скажу, кто кому сколько должен.',
          button: 'Согласны?',
        },

        // 4
        {
          media: {
            type: 'image',
            src: import('./assets/img/cashback.webp'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Никто не хочет брать ответственность за оплату общих расходов?',
          description:
            'Плати за друзей - получай кэшбэк в Билли реальными деньгами!',
          button: 'Узнали?',
        },

        // 5
        {
          media: {
            type: 'image',
            src: import('./assets/img/late_calculate.webp'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Не встанем из-за стола, пока не посчитаем, кто сколько съел?',
          description:
            'Запиши трату сейчас, а друзья заполнят свои доли потом.',
          button: 'Это всё?',
        },

        // 6
        {
          media: {
            type: 'image',
            src: import('./assets/img/late_calculate.webp'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Самое удобное ведение группового бюджета!',
          description: '',
          list: [
            'Конвертация валют: <br>упростит финальные расчёты, пересчитав все траты в выбранную валюту. Особенно актуально в путешествиях!',
            'Категории: Билли автоматически определит и проставит категорию для каждой траты, а в конце предоставит анализ самых больших из них.',
          ],
          button: 'Попробовать записать трату',
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
