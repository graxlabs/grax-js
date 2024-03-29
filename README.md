# grax_api

Javascript client for the GRAX api.

## Installation

### For [Node.js](https://nodejs.org/)

```shell
npm install https://github.com/graxlabs/grax-js --save
```

## Getting Started

```js
import axios from "axios";
import { backupsHealthGet } from "graxApi"

const graxUrl = process.env.GRAX_URL;
const graxToken = process.env.GRAX_TOKEN;

axios.defaults.baseURL = graxUrl;
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${graxToken}`;
  return config;
});

const health = backupsHealthGet();
```
