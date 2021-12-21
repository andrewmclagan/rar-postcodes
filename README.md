# How it works

You need to add the following between the `<body>` tags on your site

```html
<link rel="stylesheet" href="https://ripe-n-raw.s3-ap-southeast-2.amazonaws.com/postcode/v3/dist/app.336f1dca.css" type="text/css" media="all">
<div id="delivery-area-search"></div><script>!function(e){function r(r){for(var n,l,f=r[0],i=r[1],a=r[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,f=1;f<t.length;f++){var i=t[f];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/";var f=window.webpackJsonp=window.webpackJsonp||[],i=f.push.bind(f);f.push=r,f=f.slice();for(var a=0;a<f.length;a++)r(f[a]);var p=i;t()}([]);</script><script src="https://ripe-n-raw.s3-ap-southeast-2.amazonaws.com/postcode/v3/dist/vendor.1e9161c9.js"></script><script src="https://ripe-n-raw.s3-ap-southeast-2.amazonaws.com/postcode/v3/dist/app.2e6675c5.js"></script>
```

Your also need to have the following code embded in the site to configure the tool:

```html
<script>
  // Configuration
  window.__config = {
    success: {
      title: "Yes, we sell at... {address}!",
      sub_title: "Your smells {address}",
      button_text: "Start Shopping",
      url: "https://sluts.com",
    },
    failure: {
      title: "Non Perishables Only {address}",
      sub_title:
        "We only deliver non-perishable products to your area via Australia Post.",
      button_text: "View non-perishable products",
      url: "https://ripenraworganics.com.au",
    },
  };

  // Delivery options
  window.__options = {
    "wed-mon": "10pm Wednesday for Monday delivery",
    "thu-tue": "10pm Thursday for Tuesday delivery",
    "sun-wed": "10pm Sunday for Wednesday delivery",
    "tue-fri": "10pm Tuesday for Friday delivery",
    "wed-sat": "10pm Wednesday for Saturday delivery",
    "wed-sun": "10pm Wednesday for Sunday delivery",
  };

  // Delivery areas
  window.__areas = [
    {
      id: "brisbane-metro",
      name: "Brisbane Metro",
      note: "$8.50 delivery or FREE delivery over $150.",
      suburbs: ["Saint Lucia", "ACACIA RIDGE", "ALBANY CREEK", "ALBION"],
      options: [
        "wed-mon",
        "thu-tue",
        "sun-wed",
        "tue-fri",
        "wed-sat",
        "wed-sun",
      ],
    },
    {
      id: "gold-coast",
      name: "Gold Coast",
      note: "$8.50 delivery or FREE delivery over $150.",
      suburbs: ["ARUNDEL", "ASHMORE", "ASHMORE CITY"],
      options: ["wed-mon", "tue-fri"],
    },
    {
      id: "sunshine-coast",
      name: "Sunshine Coast",
      note: "$9.50 delivery or FREE delivery over $150.",
      suburbs: ["ALEXANDRA HEADLAND", "AROONA", "BALD KNOB"],
      options: ["thu-tue", "tue-fri", "wed-sat"],
    },
    {
      id: "toowoomba",
      name: "Toowoomba",
      note: "$9.50 delivery or FREE delivery over $150.",
      suburbs: ["BALLARD", "BIRNAM", "BLUE MOUNTAIN HEIGHTS"],
      options: ["wed-mon", "tue-fri"],
    },
    {
      id: "byron-bay",
      name: "Byron Bay",
      note: "$9.50 delivery or FREE delivery over $150.",
      suburbs: ["BALLINA", "BALLINA", "BANORA POINT"],
      options: ["tue-fri"],
    },
    {
      id: "bowen",
      name: "Bowen",
      note: "$9.50 delivery or FREE delivery over $150.",
      suburbs: ["AIRLIE BEACH", "BOWEN", "CANNONVALE"],
      options: ["thu-tue"],
    },
    {
      id: "bundaberg",
      name: "Bundaberg",
      note: "Minimum Order $150. Delivery fee $20 or FREE delivery over $300.",
      suburbs: ["ALLOWAY", "ASHFIELD", "AVENELL HEIGHTS"],
      options: ["thu-tue"],
    },
    {
      id: "cairns",
      name: "Cairns",
      note: "Minimum Order $150. Delivery fee $20 or FREE delivery over $300.",
      suburbs: ["AEROGLEN", "BARRON", "BARRON GORGE"],
      options: ["wed-mon"],
    },
    {
      id: "Gladstone",
      name: "gladstone",
      note: "Minimum Order $150. Delivery fee $20 or FREE delivery over $300.",
      suburbs: ["Barney Point", "Benaraby", "Boyne Island"],
      options: ["thu-tue"],
    },
    {
      id: "mackay",
      name: "Mackay",
      note: "Minimum Order $150. Delivery fee $20 or FREE delivery over $300.",
      suburbs: ["Alligator Creek", "Andergrove", "Balnagowan"],
      options: ["wed-mon"],
    },
    {
      id: "rockhampton",
      name: "Rockhampton",
      note: "Minimum Order $150. Delivery fee $20 or FREE delivery over $300.",
      suburbs: ["Allentown", "Allentown", "Barlows Hill"],
      options: ["wed-mon"],
    },
    {
      id: "townsville",
      name: "Townsville",
      note: "Minimum Order $150. Delivery fee $20 or FREE delivery over $300.",
      suburbs: ["Aitkenvale", "Alice River", "Annandale"],
      options: ["wed-mon"],
    },
  ];
</script>
```

You will also need to add the following to the `<head>` of your site:

```html
<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAh6nHe48BO9vpCF9QDuDAxd3bftfY6Bg0&libraries=places"></script>
```
