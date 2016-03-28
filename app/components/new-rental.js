import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    save1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city') ? this.get('owner') : "",
        type: this.get('type') ? this.get('owner') : "",
        image: this.get('image') ? this.get('owner') : "",
        bedrooms: this.get('bedrooms') ? this.get('owner') : "",
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
