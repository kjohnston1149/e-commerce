import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      this.transitionTo('index');
    },

    logout() {
      this.transitionTo('index');
    }
  }
});
