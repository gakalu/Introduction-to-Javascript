"use strict";

    describe("addend", function() {
        
        it("sum", function() {

        assert.equal(addend(2,4,6,7,4,8), 11);
        assert.equal(addend(2,4,6,7,4,8), 16);

        })})
    describe("getMiddle", function() {
        
        it("getMiddle", function() {
    
        assert.equal(getMiddle([2,4,6,2,4,50,80],2));
        assert.equal(getMiddle([2,4,6,2,4,50,80],4));
    
        })});
    describe("rotateleft", function() {
        
        it("rotateleft", function() {
        
        assert.equal(rotate1([4,6,8,5,3,9]),[6,8,5,3,9,4]);
        assert.equal(rotate1([4,6,8,5,3,9]), [5,7,8,9,4,3]);
        
        })});
    describe("rotateright", function() {
        
        it("rotateright", function() {
            
        assert.equal(rotate2([4,6,8,5,3,9]),[6,8,5,3,9,4]);
        assert.equal(rotate2([4,6,8,5,3,9]), [5,7,8,9,4,3]);
            
            })});
    describe("array", function() {
        
        it("array", function() {
                
        assert.equal(array([4,6,8,5,3,9]),[6,8,5,3,9,4]);
        assert.equal(array([4,6,8,5,3,9]), [5,7,8,9,4,3]);
                
            })});
    describe("filterRange", function() {
        
        it("filterRange", function() {
            
        assert.equal(filterRange([2,6,3,8,4,5,9,2,7,8],3,6), [3,4,5,6]);
        assert.equal(filterRange([2,6,3,8,4,5,9,2,7,8],3,6), [3,8,5,6]);
            
        })});
    describe("palindrome", function() {
        
        it("palindrome", function() {
                
        assert.equal(palindrome('Getachew'),'');
        assert.equal(palindrome('wow'), 'wow');
                
        })});
    describe("materix", function() {
                
        it("materix", function() {
                    
        assert.equal(materix(([[0,1,2],[9,8,7]], [[6,5,4],[3,4,5]]),[[6,6,6],[12,12,12]]));
        assert.equal(materix(([[0,1,2],[9,8,7]], [[6,5,4],[3,4,5]]),[[12,6,6],[12,12,12]]));
                    
        })});
                            
                    