import Ember from 'ember';
import DefaultQueryParamsMixin from 'ember-data-table/mixins/default-query-params';

export default Ember.Controller.extend(DefaultQueryParamsMixin, {
  enableFilter: true,
  enableSizes: true,
  enableLineNumbers: false,
  size: 5,
  code: `{{#data-table content=model sort=sort page=page size=size filter=filter lineNumbers=true sizeOptions=true as |t|}}
        {{#t.menu as |menu|}}
          {{#menu.general}}
            {{#paper-button onClick=(action "export") accent=true noInk=true}}Export{{/paper-button}}
            {{#paper-button onClick=(action "print") accent=true noInk=true}}Print{{/paper-button}}
          {{/menu.general}}
          {{#menu.selected as |selection datatable|}}
            {{#paper-button onClick=(action "delete" selection datatable) accent=true noInk=true}}Delete{{/paper-button}}
          {{/menu.selected}}
        {{/t.menu}}
        {{#t.content as |c|}}
          {{#c.header}}
            {{th-sortable field='title' currentSorting=sort label='Title'}}
            <th>Author</th>
            {{th-sortable field='isbn' currentSorting=sort label='ISBN'}}
            {{th-sortable field='genre' currentSorting=sort label='Genre'}}
            {{th-sortable field='publicationDate' currentSorting=sort label='Published'}}
            {{th-sortable field='language' currentSorting=sort label='Language'}}
            <th># pages</th>
          {{/c.header}}
          {{#c.body as |row|}}
            <td>{{row.title}}</td>
            <td>{{join ", " (map-by "name" row.authors)}}</td>
            <td><a href="https://www.google.be/#q=isbn:+{{row.isbn}}&*">{{row.isbn}}</a></td>
            <td>{{row.genre}}</td>
            <td>{{moment-format row.publicationDate 'MM/DD/YYYY'}}</td>
            <td>{{row.language}}</td>
            <td>{{row.numberOfPages}}</td>
          {{/c.body}}
        {{/t.content}}
      {{/data-table}}
`,
  actions: {
    export() {
      alert("This should export the data table");
    },
    print() {
      window.print();
    },
    delete(selection, datatable) {
      const titles = selection.map(function(book) { return book.get('title') });
      alert(`${selection.length} items selected: ${titles}`);
      datatable.clearSelection();
    }
  }
});
