var assert = require('chai').assert;
var db;

describe('When starting up the Loopback Connector for Gcloud', function(){
  before(function(){
    db = getDataSource();
  });

  it('should have a datasource defined', function(){
     assert.isDefined(db, 'The connector loaded correctly');
     assert(typeof(db.connect) === 'function', 'The connect function exists');
     assert(typeof(db.disconnect) === 'function', 'The disconnect function exists');
  });

  describe('when connecting', function() {
    it('should return the callback', function(done){
      var afterMethod = function(){
        assert(true, 'This should run if the connect method runs correctly');
        done();
      };
      db.connect(afterMethod);
    });
  });

  describe('when disconnecting', function() {
    it('should return the callback', function(done){
      var afterMethod = function(){
        assert(true, 'This should run if the disconnect method runs correctly');
        done();
      };
      db.disconnect(afterMethod);
    });
  });
});
