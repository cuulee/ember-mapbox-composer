import DS from 'ember-data';
const { JSONAPIAdapter } = DS;

export default class ApplicationnAdapter extends JSONAPIAdapter {
  namespace = 'api'
}
