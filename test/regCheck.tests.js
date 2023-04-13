

describe('Test my regCheck function', function () {
  it("Write a function called regCheck that can check if a registration number is for GP, L, EC, MP registration plates.", function () {
    assert.equal(true, regCheck("DV 23 NB GP", "GP"));


  });
  it("Write a function called regCheck that can check if a registration number is for GP, L, EC, MP registration plates.", function () {
    assert.equal(false, regCheck("DV 23 NB MP", "GP"));

  });
  it("Write a function called regCheck that can check if a registration number is for GP, L, EC, MP registration plates.", function () {
    assert.equal(true, regCheck("UI 83 OS GP", "GP"));

  });
  it("Write a function called regCheck that can check if a registration number is for GP, L, EC, MP registration plates.P", function () {
    assert.equal(false, regCheck("ER 09 TY FS", "GP"));

  });
}); 