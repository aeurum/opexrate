# Opexrate
Opexrate can help you access [Open Exchange Rate](https://openexchangerates.org/) [API](https://docs.openexchangerates.org/).

## Installation
```
npm i opexrate
```

## Usage
```
const Opexrate = require('opexrate')
// import Opexrate from 'opexrate'

const opexrate = new Opexrate('your_app_id')
```

### Methods
Opexrate supports all Open Exchange Rates endpoints as of March 30, 2025.

#### `.latest([ parameters ]): Promise`
Get the latest exchange rates available from the Open Exchange Rates API.

##### `parameters`
| Parameter | Type | Necessity | Description | Default |
| --- | --- | --- | --- | --- |
| base | String | Optional | Base currency 3-letter code. | **USD** |
| symbols | String | Optional | Comma-separated list of specific currencies 3-letter codes. | `.currencies()` |
| prettyprint | Boolean | Optional | Pass _True_ to format the output. | _False_ |
| show_alternative | Boolean | Optional | Pass _True_ to extend returned values with alternative, black market, and digital currency rates. | _False_ |

#### `.historical(date [, parameters ]): Promise`
Get historical exchange rates for any date available from the Open Exchange Rates API, currently going back to 1st January 1999.

##### `date`
The requested date in YYYY-MM-DD format.

##### `parameters`
| Parameter | Type | Necessity | Description | Default |
| --- | --- | --- | --- | --- |
| base | String | Optional | Base currency 3-letter code. | **USD** |
| symbols | String | Optional | Comma-separated list of specific currencies 3-letter codes. | `.currencies()` |
| prettyprint | Boolean | Optional | Pass _True_ to format the output. | _False_ |
| show_alternative | Boolean | Optional | Pass _True_ to extend returned values with alternative, black market, and digital currency rates. | _False_ |

#### `.currencies([ parameters ]): Promise`
Get a JSON list of all currency symbols available from the Open Exchange Rates API, along with their full names.

##### `parameters`
| Parameter | Type | Necessity | Description | Default |
| --- | --- | --- | --- | --- |
| prettyprint | Boolean | Optional | Pass _True_ to format the output. | _False_ |
| show_alternative | Boolean | Optional | Pass _True_ to extend returned values with alternative, black market, and digital currency rates. | _False_ |
| show_inactive | Boolean | Optional | Pass _True_ to include historical/inactive currencies. | _False_ |

#### `.timeSeries([ parameters ]): Promise`
Get historical exchange rates for a given time period, where available.

##### `parameters`
| Parameter | Type | Necessity | Description | Default |
| --- | --- | --- | --- | --- |
| start | Date | **Required** | The time series start date in YYYY-MM-DD format. | |
| end | Date | **Required** | The time series end date in YYYY-MM-DD format. | |
| base | String | Optional | Base currency 3-letter code. | **USD** |
| symbols | String | Optional | Comma-separated list of specific currencies 3-letter codes. | `.currencies()` |
| prettyprint | Boolean | Optional | Pass _True_ to format the output. | _False_ |
| show_alternative | Boolean | Optional | Pass _True_ to extend returned values with alternative, black market, and digital currency rates. | _False_ |

#### `.convert(value, from, to [, parameters ]): Promise`
Convert any money value from one currency to another at the latest API rates.

##### `value`
The numeric value to be converted.

##### `from`
The base currency 3-letter code.

##### `to`
The quote currency 3-letter code.

##### `parameters`
| Parameter | Type | Necessity | Description | Default |
| --- | --- | --- | --- | --- |
| prettyprint | Boolean | Optional | Pass _True_ to format the output. | _False_ |

#### `.ohlc([ parameters ]): Promise`
Get historical Open, High Low, Close (OHLC) and Average exchange rates for a given time period, ranging from 1 month to 1 minute, where available.

##### `parameters`
| Parameter | Type | Necessity | Description | Default |
| --- | --- | --- | --- | --- |
| start_time | Date | **Required** | The start time for the requested OHLC period (ISO-8601 format, UTC only). | |
| period | String | **Required** | The requested period (starting on the start_time). Shall be one of the following: "1m", "5m", "15m", "30m", "1h", "12h", "1d", "1w", "1mo". | |
| base | String | Optional | Base currency 3-letter code. | **USD** |
| symbols | String | Recommended | Comma-separated list of specific currencies 3-letter codes. | `.currencies()` |
| prettyprint | Boolean | Optional | Pass _True_ to format the output. | _False_ |

#### `.usage([ parameters ]): Promise`
Get basic plan information and usage statistics for an Open Exchange Rates App ID.

##### `parameters`
| Parameter | Type | Necessity | Description | Default |
| --- | --- | --- | --- | --- |
| prettyprint | Boolean | Optional | Pass _True_ to format the output. | _False_ |

## Contributing
Contributions are only allowed in TON:
```
UQCYqT9-ycmXE3o57Cac1sM5ntIKdjqIwP3kzWmiZik0VU_b
```
