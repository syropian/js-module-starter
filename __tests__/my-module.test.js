import summify from "../src"
describe("my module", () => {
  it("adds two numbers together", () => {
    expect(summify(4, 6)).toBe(10)
  })
})
