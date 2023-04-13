var itemList = [
    { name: 'apples', qty: 10 },
    { name: 'pears', qty: 37 },
    { name: 'bananas', qty: 27 },
    { name: 'apples', qty: 3 },
];

describe('Test my findItemsOver20 function', function () {
    it("Write a function called findItemsOver20 that takes a list of objects, each object having 2 attributes one called name and the other qty. The function should return all the products that have a quantity higher than 20.", function () {
        assert.deepEqual([
            { name: 'pears', qty: 37 },
            {name: 'bananas', qty: 27 }], findItemsOver20(itemList));
        
        });
        // it("Test my findItemsOver20 function.", function(){
        //     assert.deepEqual(, "this should not be true");


        // });

    });