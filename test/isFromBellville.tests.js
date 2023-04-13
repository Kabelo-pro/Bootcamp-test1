
describe('Test my isFromBellville function', function () {
  it("Write a function called isFromBellville that returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY", function () {
    assert.equal(true, isFromBellville("CY 123"));


  });
  it("Write a function called isFromBellville that returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY", function () {
    assert.equal(false, isFromBellville("HDK 374 GP"));

  });

  it("Write a function called isFromBellville that returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY", function () {
    assert.equal(true, isFromBellville("CY 937 293"));
    
  });

  it("Write a function called isFromBellville that returns true if a registration number is for Bellville otherwise returns false. Registration numbers for Bellville starts with CY", function () {
    assert.equal(false, isFromBellville("YUS 832 MP"));
    
  });
});