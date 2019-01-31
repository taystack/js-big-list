import { Take } from "@taystack/js-helpers";


const BigList = (count, items, predicate = () => true) => {
  let passes = 0;

  let ret = [];

  function getSome(i) {
    const sliceIndex = count * passes;
    if (sliceIndex > items.length) return ret;
    if (ret.length < count) {
      const nextItems = items.slice(sliceIndex, sliceIndex + count).filter(predicate);
      ret = ret.concat(nextItems);
      passes += 1;
      getSome(i)
    }
    return ret;
  }

  return getSome(items);
};

export default BigList;
