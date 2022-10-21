import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-testovyjj-proekt-клиент', 'Unit | Model | i-i-s-testovyjj-proekt-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-testovyjj-proekt-клиент',
    'model:i-i-s-testovyjj-proekt-продажа',
    'model:i-i-s-testovyjj-proekt-строка',
    'model:i-i-s-testovyjj-proekt-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
