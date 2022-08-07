// var assert = require('assert');
var assert = require('chai').assert
var expect = require('chai').expect
const { convertDate, loadInput, convertInput } = require('../functions');

const mockData = [
    'LA $ 30-4-1974 $ Nolan $ Rhiannon',
    'NYC $ 5-1-1962 $ Bruen $ Rigoberto'
  ]
  
describe('Assessment', function () {
  describe('Load input', function () {
    it('Should load input as array of string', function (done) {
        loadInput('./fixtures/people_by_dollar.txt')
        .then((inp)=>{
          assert.typeOf(inp, 'object');
          done()
        }).catch((e)=>{
          console.log(e)
          done()
        })
        
    });
  });

  describe('Process input', function () {
    it('should format date', function (done) {
        assert.equal(convertDate('5-1-1962', '$'), '1/5/1962');
        done()
    });

    it('should convert input from array of string to key value pair', function (done) {
        convertInput(mockData, '$')
        .then((result)=>{
          expect(result).to.equal([
            { first_name: 'Nolan', city: 'LA', birth_date: '4/30/1974' },
            { first_name: 'Bruen', city: 'NYC', birth_date: '1/5/1962' }
          ]);
          // assert.equal(result,[
          //   { first_name: 'Nolan', city: 'LA', birth_date: '4/30/1974' },
          //   { first_name: 'Bruen', city: 'NYC', birth_date: '1/5/1962' }
          // ])
          done()
        }).catch((e)=>{
          console.log(e)
          done()
        })
    });

  });

});