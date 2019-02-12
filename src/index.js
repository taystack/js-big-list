
// Like Array.filter, but short-circuits when ANOUNT of ITEMS passes the PREDICATE
export const FilterAmount = (items = [], predicate = () => true, amount = Infinity) => {
  let ret = [];
  try {
    items.forEach((item) => {
      if (predicate(item)) {
        ret.push(item);
        if (ret.length === amount) throw FilterAmount.DONE;
      }
    });
  } catch (e) {
    if (e != FilterAmount.DONE) throw e;
  }
  return ret;
};

FilterAmount.DONE = {};


class BigList {
  constructor(count = 0, items = [], predicate = () => true) {
    this.__count__ = count;
    this.__items__ = items;
    this.__predicate__ = predicate;
    this.reset();
  }

  nextPage() {
    this.items = [];
    const lastIndex = this.__getSome();
    this.__indexes__.push(lastIndex);
    return this;
  }

  reset() {
    this.__passes__ = 0;
    this.__indexes__ = [];
    return this.nextPage();
  }

  __getSome() {
    const sliceIndex = this.__count__ * this.__passes__;
    if (sliceIndex > this.__items__.length) return;
    if (this.items.length < this.__count__) {
      const nextSlice = this.__items__.slice(sliceIndex, sliceIndex + this.__count__)
      const remaining = this.__count__ - this.items.length;
      const nextItems = FilterAmount(nextSlice, this.__predicate__, remaining);
      this.items = this.items.concat(nextItems);
      this.__passes__ += 1;
      this.__getSome();
    }
  }
}

export default BigList;
