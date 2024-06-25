import { bootstrap } from '@tok/generation';

import App from './App.vue';
import { default as config } from './config';

bootstrap(App, config);

// @ts-expect-error ...
window.navigation.addEventListener('navigate', (event) => {
  console.log('location changed!', event);

  if (event.destination?.url?.includes('finish')) {
    console.log('send data');
    // @ts-expect-error ...
    window.Telegram?.WebApp?.send('finish');
    // @ts-expect-error ...
    window.Telegram?.WebApp?.close();
  }
});
