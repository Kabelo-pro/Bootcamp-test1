

describe('Test my regCheck function', function () {
  it("It should return 'true' when called with a registration number that ends with GP", function () {
    assert.equal(true, regCheck("DV 23 NB GP", "GP"), "this should not be true");


  });
  it("It should return 'true' when called with a registration number that ends with GP", function () {
    assert.equal(false, regCheck("DV 23 NB MP", "GP"), "this should not be true");

  });
  it("It should return 'true' when called with a registration number that ends with GP", function () {
    assert.equal(true, regCheck("UI 83 OS GP", "GP"), "this should not be true");

  });
  it("It should return 'true' when called with a registration number that ends with GP", function () {
    assert.equal(false, regCheck("ER 09 TY FS", "GP"), "this should not be true");

  });
}); 