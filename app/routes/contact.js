import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('contact');
  },
  actions:{
    sendResponse(newContact){
      newContact.save().then(()=>
        this.controller.set('responseAlert','Your message are save we will contact you shortly'));
        setTimeout(function(){
            window.location.reload(true);
        }, 3000);
    },
    willTransition(){
      console.log(this.set('newContact',''));
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
      this.controller.set('responseAlert', false);

    }
  }
});
