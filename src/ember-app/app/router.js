import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-testovyjj-proekt-клиент-l');
  this.route('i-i-s-testovyjj-proekt-клиент-e',
  { path: 'i-i-s-testovyjj-proekt-клиент-e/:id' });
  this.route('i-i-s-testovyjj-proekt-клиент-e.new',
  { path: 'i-i-s-testovyjj-proekt-клиент-e/new' });
  this.route('i-i-s-testovyjj-proekt-продажа-l');
  this.route('i-i-s-testovyjj-proekt-продажа-e',
  { path: 'i-i-s-testovyjj-proekt-продажа-e/:id' });
  this.route('i-i-s-testovyjj-proekt-продажа-e.new',
  { path: 'i-i-s-testovyjj-proekt-продажа-e/new' });
  this.route('i-i-s-testovyjj-proekt-товар-l');
  this.route('i-i-s-testovyjj-proekt-товар-e',
  { path: 'i-i-s-testovyjj-proekt-товар-e/:id' });
  this.route('i-i-s-testovyjj-proekt-товар-e.new',
  { path: 'i-i-s-testovyjj-proekt-товар-e/new' });
});

export default Router;
