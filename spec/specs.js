describe('scoring', function() {
    it(" for the word 'cat' the number of points will be '5'", function(){
        scoring("CAT").should.equal(5);
    });
    it(" for the word 'Cat' the number of points will be '5'", function(){
        scoring("Cat").should.equal(5);
    });
    it(" for the empty ' ' the number of points will be '0'", function(){
        scoring("").should.equal(0);
    });
});