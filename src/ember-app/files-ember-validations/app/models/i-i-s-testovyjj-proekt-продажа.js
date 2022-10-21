import {
  defineNamespace,
  defineProjections,
  Model as ПродажаMixin
} from '../mixins/regenerated/models/i-i-s-testovyjj-proekt-продажа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПродажаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
