import page from "../index";

describe("Test page", () => {
  it("should return the page", () => {
    const pageResult = page();

    expect(pageResult).toBe("Hello World");
  });
});
