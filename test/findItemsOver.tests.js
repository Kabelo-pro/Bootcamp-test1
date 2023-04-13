
var itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

describe('Test my findItemsOver function' , function(){
    it("Write a function called findItemsOver that takes a list of objects each with a name and qty attribute. And also a second parameter which is a threshold for the quantity of items available. The function should return products that have quantity higher than the threshold.", function(){
        assert.deepEqual([
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27}
        ], findItemsOver(itemList, 25));

        
    });
    it("Write a function called findItemsOver that takes a list of objects each with a name and qty attribute. And also a second parameter which is a threshold for the quantity of items available. The function should return products that have quantity higher than the threshold.", function(){
        assert.deepEqual([
            { name: 'pears', qty: 37 }
        ], findItemsOver(itemList, 30));

        
    });
    it("Write a function called findItemsOver that takes a list of objects each with a name and qty attribute. And also a second parameter which is a threshold for the quantity of items available. The function should return products that have quantity higher than the threshold.", function(){
        assert.deepEqual([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ], findItemsOver(itemList, 5));

        
    });

});