import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  клиент: DS.belongsTo('i-i-s-testovyjj-proekt-клиент', { inverse: null, async: false }),
  строка: DS.hasMany('i-i-s-testovyjj-proekt-строка', { inverse: 'продажа', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-продажа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-продажа.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строка: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-продажа.validations.строка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродажаE', 'i-i-s-testovyjj-proekt-продажа', {
    дата: attr('Дата', { index: 0 }),
    клиент: belongsTo('i-i-s-testovyjj-proekt-клиент', 'Клиент', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' }),
    строка: hasMany('i-i-s-testovyjj-proekt-строка', 'Строка', {
      колич: attr('Колич', { index: 0 }),
      товар: belongsTo('i-i-s-testovyjj-proekt-товар', 'Товар', {
        название: attr('Название', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ПродажаL', 'i-i-s-testovyjj-proekt-продажа', {
    дата: attr('Дата', { index: 0 }),
    клиент: belongsTo('i-i-s-testovyjj-proekt-клиент', 'Название', {
      название: attr('Название', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
