import { Serializer as ПродажаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-testovyjj-proekt-продажа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПродажаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
