import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToSimple() {
      this.transitionToRoute('books');
    },
    goToAdvanced() {
      this.transitionToRoute('advanced');
    }
  }
});
