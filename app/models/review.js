import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  comment: DS.attr('string'),
  item: DS.belongsTo('item', { async: true })
});