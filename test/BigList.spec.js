import { Take } from "@taystack/js-helpers";
import BigList from "../src";


describe("BigList", () => {
  let items;
  beforeEach(() => {
    items = new Array(100).fill().map((_, i) => (i));
  });

  it("should only return the desired number of items", () => {
    const manage = BigList(20, items);
    expect(manage.length).toEqual(20);
  });

  it("should only return the desired number of items that pass a predicate", () => {
    let manage = BigList(20, items, x => x % 2);
    expect(manage.length).toEqual(20);
    manage = BigList(20, items, x => x < 2);
    expect(manage.length).toEqual(2);
  });
});
