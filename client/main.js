import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';

import {routes, onAuthChange} from '../imports/routes/routes';

import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun( () => {
  const isAuthd = !!Meteor.userId();
  onAuthChange(isAuthd);
});

Meteor.startup( () => {
  ReactDOM.render(routes, document.getElementById('app'));
})
