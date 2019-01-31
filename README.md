# js-big-list

[![codecov](https://codecov.io/gh/taystack/js-big-list/branch/master/graph/badge.svg)](https://codecov.io/gh/taystack/js-big-list)
<!-- [![Build Status](https://travis-ci.org/taystack/js-big-list.svg?branch=master)](https://travis-ci.org/taystack/js-big-list) -->

 - [Installation](#installation)
 - [Documentation](#documentation)
 - [Use](#use)
 - [Example](#example)

# Documentation _coming soon_

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
const renderedItems = BigList(5, items, x => x % 10 === 0);
// => [0, 10, 20, 30, 40];
```
