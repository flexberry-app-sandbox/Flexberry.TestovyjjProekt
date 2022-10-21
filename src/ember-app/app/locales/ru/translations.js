import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTestovyjjProektКлиентLForm from './forms/i-i-s-testovyjj-proekt-клиент-l';
import IISTestovyjjProektПродажаLForm from './forms/i-i-s-testovyjj-proekt-продажа-l';
import IISTestovyjjProektТоварLForm from './forms/i-i-s-testovyjj-proekt-товар-l';
import IISTestovyjjProektКлиентEForm from './forms/i-i-s-testovyjj-proekt-клиент-e';
import IISTestovyjjProektПродажаEForm from './forms/i-i-s-testovyjj-proekt-продажа-e';
import IISTestovyjjProektТоварEForm from './forms/i-i-s-testovyjj-proekt-товар-e';
import IISTestovyjjProektКлиентModel from './models/i-i-s-testovyjj-proekt-клиент';
import IISTestovyjjProektПродажаModel from './models/i-i-s-testovyjj-proekt-продажа';
import IISTestovyjjProektСтрокаModel from './models/i-i-s-testovyjj-proekt-строка';
import IISTestovyjjProektТоварModel from './models/i-i-s-testovyjj-proekt-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-testovyjj-proekt-клиент': IISTestovyjjProektКлиентModel,
    'i-i-s-testovyjj-proekt-продажа': IISTestovyjjProektПродажаModel,
    'i-i-s-testovyjj-proekt-строка': IISTestovyjjProektСтрокаModel,
    'i-i-s-testovyjj-proekt-товар': IISTestovyjjProektТоварModel
  },

  'application-name': 'Testovyjj proekt',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Testovyjj proekt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testovyjj proekt',
          title: 'Testovyjj proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        продажи: {
          caption: 'Продажи',
          title: 'Продажи',
          'i-i-s-testovyjj-proekt-продажа-l': {
            caption: 'Продажа',
            title: ''
          },
          'i-i-s-testovyjj-proekt-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-testovyjj-proekt-товар-l': {
            caption: 'Товар',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-testovyjj-proekt-клиент-l': IISTestovyjjProektКлиентLForm,
    'i-i-s-testovyjj-proekt-продажа-l': IISTestovyjjProektПродажаLForm,
    'i-i-s-testovyjj-proekt-товар-l': IISTestovyjjProektТоварLForm,
    'i-i-s-testovyjj-proekt-клиент-e': IISTestovyjjProektКлиентEForm,
    'i-i-s-testovyjj-proekt-продажа-e': IISTestovyjjProektПродажаEForm,
    'i-i-s-testovyjj-proekt-товар-e': IISTestovyjjProektТоварEForm
  },

});

export default translations;
