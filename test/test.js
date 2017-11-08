const os = require('os'),
      fs = require('fs'),
      marklogic = require('marklogic'),
      assert = require('assert'),
      should = require('should'),
      expect = require('chai').expect;

// Test a synchronous method
describe('os', function() {
  it('should check the platform', function() {
    assert.ok(os.platform());
  });
});

// Test an asynchronous method
describe('fs', function() {
  it('should find an existing file', function(done) {
    fs.stat('test.json', function (err, stats) {
      assert.ok(stats);
      done();
    });
  });
});

const db = marklogic.createDatabaseClient({
  user: 'admin',
  password: 'admin',
  port: 8000
});

// Test with setup and teardown
describe('node client', function() {
  const uri = '/doc.json';
  before(function(done){
    db.documents.write({
      uri: uri,
      contentType: 'application/json',
      content: '{"foo": 321}'
      })
    .result(function(response){done();})
    .catch(done);
  });
  after(function(done){
    db.documents.remove({
      uris: uri
      })
    .result(function(response){done();})
    .catch(done);
  });
  it('should read a document', function(done) {
    db.documents.read(uri)
    .result(function(response) {
      assert.ok(response);
      done();
      })
    .catch(done);
  });
});

// Test with the should assertion library
describe('node client', function() {
  it('should read the "debug" server property', function(done) {
    //this.timeout(5000);
    db.config.serverprops.read()
    .result(function(response) {
      response.should.have.property('debug');
      done();
    })
    .catch(done);
  });
});

// Test with the chai assertion library
describe('node client', function() {
  it('should check for the server property object', function(done) {
    db.config.serverprops.read()
    .result(function(response) {
      expect(response).to.be.an('object');
      done();
    })
    .catch(done);
  });
});

// Test for an expected error
describe('node client', function() {
  it('should return an error if read without a URI', function(done) {
    try {
      db.documents.read()
        .result(function(response) {
          expect(false, 'expected error not thrown').to.be.ok;
          done();
        })
    }
    catch (error) {
      expect(error).to.be.ok;
      done();
    }
  });
});

// Skip a test
describe.skip('os', function() {
  it('should check the release', function() {
    assert.ok(os.release());
  });
});
