import { FilterAmount } from "../src/index";


const getItems = () => (new Array(100).fill().map((_, i) => (i)));

describe("FilterAmount", () => {
  it("should not throw errors", () => {
    FilterAmount();
  });

  it("should work like Array.filter", () => {
    const arrFilter = getItems().filter(x => (x < 2));
    const filterAmount = FilterAmount(getItems(), x => (x < 2));

    expect(arrFilter).toEqual(filterAmount);
  });

  it("should stop filtering when the requested amount is reached", () => {
    const filterAmount = FilterAmount(getItems(), x => (x % 2), 10);
    expect(filterAmount.length).toEqual(10);
  });

  it("should bubble proper errors", () => {
    expect(() => {
      FilterAmount(getItems(), x => (x.foo.bar), 10)
    }).toThrowError();
  });
});
