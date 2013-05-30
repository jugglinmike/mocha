
var mocha = require('../')
  , utils = mocha.utils;

describe("Utils", function (){

  describe('.clean()', function() {
    var clean = utils.clean;

    it('should remove the wrapping function declaration', function(){
      clean('function  (one, two, three)  {\n//code\n}').should.equal('//code');
    })

    it('should remove space character indentation from the function body', function(){
      clean('  //line1\n    //line2\n').should.equal('//line1\n  //line2');
    })

    it('should remove tab character indentation from the function body', function(){
      clean('\n	//line1\n		//line2').should.equal('//line1\n	//line2');
    })
  })
})
