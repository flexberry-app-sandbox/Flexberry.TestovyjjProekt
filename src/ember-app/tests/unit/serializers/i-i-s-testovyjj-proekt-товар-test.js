import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-testovyjj-proekt-товар', 'Unit | Serializer | i-i-s-testovyjj-proekt-товар', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-testovyjj-proekt-товар',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
