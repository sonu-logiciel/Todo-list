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
  isDisabled:Ember.computed('emailAddress',function(){
    return this.get('emailAddress')==='';
  })
});
