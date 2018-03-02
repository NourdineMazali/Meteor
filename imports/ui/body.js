/*
* @Author: nmazali
* @Date:   2018-03-02 11:29:36
* @Last Modified by:   nmazali
* @Last Modified time: 2018-03-02 14:48:47
*/
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';
import './task.js';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort : { createdAt: -1 } });
    }
});
Template.body.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();
            // Get value from form element
        const target = event.target;
        const text = target.text.value;
        // Insert a task into the collection
        Tasks.insert({
          text,
          createdAt: new Date(), // current time
        });
        // Clear form
        target.text.value = '';
  },
    'click .close' (event) {
        event.preventDefault();
        const target = event.target;
        const id = target.getAttribute('data-id');
        Tasks.remove(id);
    }
});
