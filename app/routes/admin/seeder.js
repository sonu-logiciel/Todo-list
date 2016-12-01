import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      libraries:this.store.findAll('library'),
      // authors:this.store.findAll('author'),
      // books:this.store.findAll('book')
    });
  },
  setupController(controller, model){
    console.log(controller);
    console.log(model);
    controller.set('libraries',model.libraries);
    controller.set('authors',model.authors);
    controller.set('books',model.books);

  }
});
