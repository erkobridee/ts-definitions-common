# typescript common definitions

⚠️&nbsp;&nbsp;This library must be used as a dev dependency on a project that uses [TypeScript](https://www.typescriptlang.org/)

## Instalation

```
npm install --save-dev @erkobridee/ts-definitions-common
```

## Documentation

[@erkobridee/ts-definitions-common](http://erkobridee.github.io/ts-definitions-common/)

## Examples

[codesandbox example](https://codesandbox.io/s/hello-ts-definitions-common-lib-pjrql?file=/src/index.ts)

### TFunction

```javascript
import { TFunction } from '@erkobridee/ts-definitions-common';

// or

import { TFunction } from '@erkobridee/ts-definitions-common/types/functions';



const myFunction: TFunction = () =>  undefined;

const greetings: TFunction<[string], string> => value => `greetings ${value}!`;
```

### TDOMEventHandler

```javascript
import { TDOMEventHandler } from '@erkobridee/ts-definitions-common';

// or

import { TDOMEventHandler } from '@erkobridee/ts-definitions-common/types/dom';

const clickHandler: TDOMEventHandler = (event) => console.log(event);

window.addEventListener('click', clickHandler);
```
