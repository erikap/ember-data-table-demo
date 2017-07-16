import Ember from 'ember';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';

export default Ember.Controller.extend(DefaultQueryParamsMixin, {
  enableFilter: true,
  size: 5,
  code: `{{data-table content=model fields="title isbn genre publicationDate language numberOfPages" sort=sort page=page size=size filter=filter}}`
});
