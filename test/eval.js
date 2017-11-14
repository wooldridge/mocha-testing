'use strict';

const should    = require('chai').should(),
      marklogic = require('marklogic');

const db = marklogic.createDatabaseClient({
  user:     'admin',
  password: 'admin',
  port:     8000
});

describe('JSON property word query', function() {
  it('in JavaScript', function(done) {
    db.eval(`xdmp.toJSON(
      cts.jsonPropertyWordQuery('name', 'Hildy')
      );`)
      .result(function(values) {
        const result = values[0].value;
        // console.log(JSON.stringify(result, null, 2));
        result.jsonPropertyWordQuery.property[0].should.equal('name');
        result.jsonPropertyWordQuery.text[0].should.equal('Hildy');
        done();
        })
      .catch(done);
  });
  it('in XQuery', function(done) {
    db.xqueryEval(`<a>{
      cts:json-property-word-query("name", "Hildy")
      }</a>/*`)
      .result(function(values) {
        const result = values[0].value;
        // console.log(JSON.stringify(result));
        result.should.match(
/<cts:json-property-word-query\b[^>]*>\s*<cts:property>name<\/cts:property>\s*<cts:text\b[^>]*>Hildy<\/cts:text>\s*<\/cts:json-property-word-query>/
          );
        done();
        })
      .catch(done);
  });
  // ... other tests ...
});
