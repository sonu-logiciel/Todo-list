import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('contact');
  },
  actions:{
    deletecontact(contact){
      let confirmation= confirm('are you sure');
      if(confirmation){
        contact.destroyRecord();
      }
    }
  }
});
