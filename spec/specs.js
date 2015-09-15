describe('palindrome', function() {
  it("returns true if the arrays are equal", function() {
    expect(palindrome("toot")).to.equal(true);
  });

  it("returns false if the arrays are not equal", function() {
    expect(palindrome("fred")).to.equal(false);
  });

  it("returns false for numbers if both arrays are not equal", function() {
    expect(palindrome("12345")).to.equal(false);
  });

  it("returns true for numbers if that are a palindrome", function() {
    expect(palindrome("123321")).to.equal(true);
  });

  it("returns false if empty string is entered", function() {
    expect(palindrome(" ")).to.equal(false);
  });


});

