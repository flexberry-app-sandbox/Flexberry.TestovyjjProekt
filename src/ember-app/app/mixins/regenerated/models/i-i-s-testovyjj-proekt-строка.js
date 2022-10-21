import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колич: DS.attr('number'),
  товар: DS.belongsTo('i-i-s-testovyjj-proekt-товар', { inverse: null, async: false }),
  продажа: DS.belongsTo('i-i-s-testovyjj-proekt-продажа', { inverse: 'строка', async: false })
});

export let ValidationRules = {
  колич: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-строка.validations.колич.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-строка.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  продажа: {
    descriptionKey: 'models.i-i-s-testovyjj-proekt-строка.validations.продажа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаE', 'i-i-s-testovyjj-proekt-строка', {
    колич: attr('Колич', { index: 0 }),
    товар: belongsTo('i-i-s-testovyjj-proekt-товар', 'Товар', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' })
  });
};
