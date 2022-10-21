import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Testovyjj proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Testovyjj proekt',
          title: 'Testovyjj proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
