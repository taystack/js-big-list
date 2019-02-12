# js-big-list

[![codecov](https://codecov.io/gh/taystack/js-big-list/branch/master/graph/badge.svg)](https://codecov.io/gh/taystack/js-big-list)
<!-- [![Build Status](https://travis-ci.org/taystack/js-big-list.svg?branch=master)](https://travis-ci.org/taystack/js-big-list) -->

 - [Installation](#installation)
 - [Use](#use)
 - [Example](#example)
 - [Documentation](#documentation)
 - [Benchmarks](#benchmarks)

# Installation

```bash
yarn add @taystack/js-big-list
```

or with `npm`

```bash
npm i @taystack/js-big-list
```

# Use

Small JavaScript library to help with managing the render process of large datasets on a frontend.

You don't want to render all of your items at once

# Example
```javascript
import BigList from "@taystack/js-big-list";


const items = new Array(100000).fill().map((_, i) => i); // 100,000 things

const itemsToRender = new BigList(100, items, x => x % 10 === 0);

itemsToRender.items;
// => [0, 10, 20,...,990];

itemsToRender.nextPage().items;
// => [1000, 1010,...,1990];
```


# Documentation

## new BigList(`Number` count, `Array` items, `Function` predicate)

#### Params:

|param|type|use|default|
|-----|----|---|-------|
|count|Number|Maximum number of items returned|`0`|
|items|Array|The original items to be filtered|`[]`|
|predicate|Function|Works the same as Array.filter|() => true|


# Benchmarks

```bash
*** BigList benchmark against Array.filter.slice ***

*** filterPredicate = x => x % 10 === 0 ***
Items                BigList              Array.filter.slice
-----                -------              ------------------
10,000               0ms                  0ms
100,000              0ms                  2ms
1,000,000            0ms                  15ms
10,000,000           0ms                  149ms
```
