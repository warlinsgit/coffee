console.log('service worker loaded');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('Push Recieved...');

  self.registration.showNotification(data.title, {
    body: 'Notified by Tino coffee!',
    icon: 'images/logo.png'
  });
});
