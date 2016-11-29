import Ember from 'ember';

export default Ember.Controller.extend({
	email: '',
	message:'',

	isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	isMessageEnoughLong: Ember.computed.gte('message.length', 5),

	isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
	isNotValid: Ember.computed.not('isValid'),
	actions:{
		sendResponse(){
			alert(`we will contact you:${this.get('email')}`);
			this.set('responseAlert',`your message are save we will contact you: ${this.get('email')} `);
			this.set('message','');
			this.set('email','');
		}
	}


});
