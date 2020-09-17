describe("Calls with FaleMais plans:", () => {
  test("Should return 0 if FaleMais30 plan call is from 011 - 016", () => {
    expect(calculateWithPlan(1.9, 20, 30)).toBe(0);
  });
  test("Should return 37.4 if FaleMais60 plan call is from 011 - 017", () => {
    expect(calculateWithPlan(1.9, 80, 60)).toBe(37.4);
  });

  test("Should return 167.2 if FaleMais120 plan call is from 018 - 011", () => {
    expect(calculateWithPlan(1.9, 200, 120)).toBe(167.2);
  });
});
