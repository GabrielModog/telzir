describe("Calls with FaleMais plans:", () => {
  test("Should return 38 if pass 20 minutes of call between 011 - 016", () => {
    expect(calculatePerMinute(1.9, 20)).toBe(38);
  });

  test("Should return 116 if pass 40 minutes of call between 016 - 011", () => {
    expect(calculatePerMinute(2.9, 40)).toBe(116);
  });

  test("Should return 136 if pass 80 minutes of call between 011 - 017", () => {
    expect(calculatePerMinute(1.7, 80)).toBe(136);
  });

  test("Should return 324 if pass 120 minutes of call between 017 - 011", () => {
    expect(calculatePerMinute(2.7, 120)).toBe(324);
  });

  test("Should return 380 if pass 200 minutes of call between 011 - 018", () => {
    expect(calculatePerMinute(0.9, 60)).toBe(54);
  });

  test("Should return 380 if pass 200 minutes of call between 018 - 011", () => {
    expect(calculatePerMinute(2.9, 200)).toBe(380);
  });
});
