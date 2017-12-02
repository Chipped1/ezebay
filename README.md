# ezEbay
An easy-to-use npm package used to shop items on Ebay.

## Example
An example on how to use this package.

```js
var ebay = require('ezebay');

const appID = 'ID'; // Get your app ID at https://developer.ebay.com/join/

music('iPhone', appID, function(res) {
    console.log(res)
});
```

Output:

```js
{ 
  name: 'Apple iPhone 6 Factory Unlocked AT&T Verizon TMobile Gray Gold Silver 16 64 128',
  price: 319.99,
  image: 'http://thumbs4.ebaystatic.com/pict/3321823939398080_11.jpg',
  category: 'Cell Phones & Accessories:Cell Phones & Smartphones',
  url: 'http://www.ebay.com/itm/Apple-iPhone-6-Factory-Unlocked-AT-T-Verizon-TMobile-Gray-Gold-Silver-16-64-128-/332182393939?var=null',
  status: 'Active',
  id: '332182393939',
  categoryId: '9355',
  searchURL: 'http://search.ebay.com/ws/search/SaleSearch?DemandData=1&fsop=32&satitle=iPhone' 
}
```

## Licence
Licensed under the MIT License
