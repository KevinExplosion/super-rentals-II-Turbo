import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyRental(rental) {
      this.sendAction('destroyRental', rental);
    }
  }
});
