const fs = require('fs'),
      assert = require('assert');

describe('fs', function() {
  it('should find an existing file', function(done) {
    fs.stat('test.json', function (err, stats) {
      assert.ok(stats);
      done();
    });
  });
});
