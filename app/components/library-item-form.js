import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',
  actions:{
    buttonClicked(params){
      this.sendAction('action',params); 
    }
  }
});
