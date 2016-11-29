import Ember from 'ember';

export default Ember.Controller.extend({
  // isDisabled:true,
  emailAddress:'',
  // actualEmailAddress:Ember.computed('emailAddress',function(){
  //   console.log('acutalemailAdree:',this.get('emailAddress'));
  // }),
  // emailAddressChange:Ember.observer('emailAddress',function(){
  //   console.log('emailAddressChange:',this.get('emailAddress'));
  // }),
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  actions:{
    saveInitations(){
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage',`thank you we just save your EmailAdress:${this.get('emailAddress')}`);
      this.set('emailAddress','');
    }
  }

});
