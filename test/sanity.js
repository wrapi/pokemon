var expect = require('chai').expect;
var pokeWrapi = require('../index');

describe("API Test", function() {
  before(function() {
    this.client = new pokeWrapi();
  });

  after(function() {
  });

  describe("Endpoints", function() {
    it("pokemon.species.list", function(done) {
      this.client.pokemon.species.list(function(err, data) {
        expect(err).to.equal(null);
        expect(data.results[0].name).to.equal("bulbasaur");
        done();
      });
    });    

    it("pokemon.species", function(done) {
      this.client.pokemon.species('ivysaur', function(err, data) {
        expect(err).to.equal(null);
        expect(data.name).to.equal("ivysaur");
        done();
      });
    });    

  });
});