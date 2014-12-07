
# hearthstone-card-cost

  Hearthstone card cost predictor

## Installation

  Install with npm

    $ npm install hearthstone-card-cost

## Accuracy

  This was generated from a linear model taking most card properties into
  account.  Some cards such as spells should use attack as their damage value.
  AOE effects are not yet modelled.

  Cards that have special effects are not modelled, such as Molten Giant. These
  cards can have a prediction error of >2 mana. If you take a random card in
  hearthstone, this model will give you a correct answer about `50%` of the
  time.  It's correct within `± 1` mana roughly `80%` of the time.

  After I get a better dataset, I will be able to update the model to better
  reflect the special effects.

## Example

```js
var predict = require('hearthstone-card-cost')

// Predict Al'Akir!
var cost = predict({ 
  attack: 3,
  health: 5,
  taunt: 1,
  charge: 1,
  divineShield: 1,
  windfury: 1
})

// predicted cost === 6
// Al'Akir is overpriced!
```

## API

### predict(attributes)

Returns a rounded cost estimate, for non-rounded estimates use `predict.real`

attributes:

  * attack: `number`
  * health: `number`
  * battlecry: `0 | 1`
  * charge: `0 | 1`
  * divineShield: `0 | 1`
  * freeze: `0 | 1`
  * stealth: `0 | 1`
  * taunt: `0 | 1`
  * windfury: `0 | 1`

### predict.real(attributes)

  Non-rounded cost estimate

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
