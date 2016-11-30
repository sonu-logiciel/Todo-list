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
			const email=this.get('email');
			const message =this.get('message');
			const messageDetails = this.store.createRecord('contact',{
				email:email,message:message
			});
			messageDetails.save().then((response)=>{
				this.set('responseAlert',`your detail are save with id: ${response.get('id')} `);
				this.set('message','');
				this.set('email','');
			});

		}

	}


});
