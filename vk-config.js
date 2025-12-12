// VK Learning Platform Configuration
// ID приложения VK: 54396624
// Дата создания: 12 декабря 2025

const VK_CONFIG = {
  appId: 54396624,
  appName: 'SMM школа',
  appUrl: 'https://belhoz.github.io/vk-learning-platform',
  appVersion: '1.0.0',
  apiVersion: '5.131',
  
  // Параметры инициализации
  init: function() {
    // Инициализация VK SDK
    VK.init({
      apiId: this.appId,
      onlyWidgets: true
    });
  },
  
  // Получение информации о пользователе
  getUserInfo: function(callback) {
    VK.api('users.get', {
      fields: 'id,first_name,last_name,photo_200'
    }, callback);
  },
  
  // Логирование событий
  logEvent: function(eventName, data) {
    console.log('VK Event:', eventName, data);
    // Здесь можно добавить отправку событий на аналитику
  }
};

// Экспорт конфигурации
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VK_CONFIG;
}
