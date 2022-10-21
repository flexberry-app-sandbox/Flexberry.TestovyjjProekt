import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПродажаMixin
} from '../mixins/regenerated/models/i-i-s-testovyjj-proekt-продажа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПродажаMixin, Validations, {
});

defineProjections(Model);

export default Model;
