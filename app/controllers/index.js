import Ember from 'ember';

export default Ember.Controller.extend({
  // isDisabled:true,
  headerMessage: 'Coming Soon',
  responseMessage: '',
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
      const email=this.get('emailAddress');
  
      const newInvitation=this.store.createRecord('invitation',{email:email});
      newInvitation.save();
      
      this.set('responseMessage',`thank you we just save your EmailAdress:${this.get('emailAddress')}`);
      this.set('emailAddress','');
    }
  }

});
