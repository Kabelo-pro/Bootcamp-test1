var itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    
    { name: 'apples', qty: 3 },
];

var itemList2 = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },   
    { name: 'strawberries', qty: 21 },
];

var itemList3 = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },   
    { name: 'apples', qty: 3 },
    { name: 'grapes', qty: 40 },
    { name: 'strawberries', qty: 21 }
    
];

describe('Test my findItemsOver20 function', function () {
    it("Write a function called findItemsOver20 that takes a list of objects, each object having 2 attributes one called name and the other qty. The function should return all the products that have a quantity higher than 20.", function () {
        assert.deepEqual([
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 }], findItemsOver20(itemList));
        
        })
    it("Write a function called findItemsOver20 that takes a list of objects, each object having 2 attributes one called name and the other qty. The function should return all the products that have a quantity higher than 20.", function () {
        assert.deepEqual([
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'strawberries', qty: 21 }], findItemsOver20(itemList2));
        
        });
    it("Write a function called findItemsOver20 that takes a list of objects, each object having 2 attributes one called name and the other qty. The function should return all the products that have a quantity higher than 20.", function () {
        assert.deepEqual([
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'grapes', qty: 40 },
            { name: 'strawberries', qty: 21 }], findItemsOver20(itemList3));
        
        });

    });

   