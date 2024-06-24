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
            size: 250,
          },
          shape: 'rounded',
          title: 'Привет, это Билли',
          description: "Я бот для ведения общих расходов, записи групповых трат и финального расчёта друг с другом в путешествии, в компании, в паре.",
          button: 'ДА КТО ТАКОЙ ЭТОТ ВАШ БИЛЛИ?!',
        },

        // 2
        {
          media: {
            type: 'image',
            src: import('./assets/img/buble_message.webp'),
            size: 50,
          },
          shape: 'square',
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
            size: 250,
          },
          shape: 'square',
          title: 'Надоело переводить друг другу деньги после каждой общей оплаты?',
          description:
            'Достаточно, чтобы кто-то один написал о трате в чат – Билли это увидит и запишет в историю. В конце периода он просуммирует все траты и скажет, кто кому сколько должен.',
          button: 'Согласны?',
        },

        // 4
        {
          media: {
            type: 'image',
            src: import('./assets/img/cashback.webp'),
            size: 250,
          },
          shape: 'square',
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
            size: 250,
          },
          shape: 'square',
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
            size: 250,
          },
          shape: 'square',
          title: 'Самое удобное ведение группового бюджета!',
          description: '',
          list: [
            '<b>Конвертация валют</b><br>упростит финальные расчёты, пересчитав все траты в выбранную валюту. Особенно актуально в путешествиях!',
            '<b>Категории</b><br>Билли автоматически определит и проставит категорию для каждой траты, а в конце предоставит анализ самых больших из них.',
            '<b>Настройки языка и валюты</b><br>Выбери удобный язык и валюту для ведения общих трат.',
          ],
          button: 'Попробовать записать трату',
        },
      ],
    },
  ],
});
