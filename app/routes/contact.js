import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('contact');
  },
  actions:{
    sendResponse(newContact){
      newContact.save().then(()=>
        this.controller.set('responseAlert','Your message are save we will contact you shortly'));
    },
    willTransition(){
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
      this.controller.set('responseAlert', false);
    }
  }
});
