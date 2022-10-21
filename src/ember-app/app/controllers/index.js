import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.продажи.caption'),
          title: i18n.t('forms.application.sitemap.продажи.title'),
          children: [{
            link: 'i-i-s-testovyjj-proekt-продажа-l',
            caption: i18n.t('forms.application.sitemap.продажи.i-i-s-testovyjj-proekt-продажа-l.caption'),
            title: i18n.t('forms.application.sitemap.продажи.i-i-s-testovyjj-proekt-продажа-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-testovyjj-proekt-клиент-l',
            caption: i18n.t('forms.application.sitemap.продажи.i-i-s-testovyjj-proekt-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.продажи.i-i-s-testovyjj-proekt-клиент-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-testovyjj-proekt-товар-l',
            caption: i18n.t('forms.application.sitemap.продажи.i-i-s-testovyjj-proekt-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.продажи.i-i-s-testovyjj-proekt-товар-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})