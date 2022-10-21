import {
  defineNamespace,
  defineProjections,
  Model as СтрокаMixin
} from '../mixins/regenerated/models/i-i-s-testovyjj-proekt-строка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтрокаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
