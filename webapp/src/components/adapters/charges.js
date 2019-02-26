import { decamelize, underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: 'api/stripe',
  //session: Ember.inject.service('session'),
  pathForType: function(modelName) {
    var decamelized = decamelize(modelName);
    var pluralised  = pluralize(decamelized);
    return underscore(pluralised);
  },
});