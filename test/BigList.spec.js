import BigList from "../src";


describe("BigList", () => {
  const MAX = 100;
  let items;
  beforeEach(() => {
    items = new Array(MAX).fill().map((_, i) => (i));
  });

  it("should create without error", () => {
    new BigList();
  });

  it("should only return the desired number of items", () => {
    let manage = new BigList(20, items);
    expect(manage.items.length).toEqual(20);

    manage = new BigList(20, items, x => x < 2);
    expect(manage.items.length).toEqual(2);
  });

  it("should only return the desired number of items that pass a predicate", () => {
    // items - [0...MAX]
    let manage = new BigList(20, items, x => x % 2);
    // manage.items - [1,3...39]
    expect(manage.items.length).toEqual(20);
    expect(manage.items[0]).toEqual(1);

    manage.nextPage();
    // manage.items - [41...79]
    expect(manage.items.length).toEqual(20);
    expect(manage.items[0]).toEqual(41);
  });
});
