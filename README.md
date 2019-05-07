[![NPM version][npm-version-image]][npm-url] [![MIT License][license-image]][license-url]

moment-lunar
===

Moment-lunar is moment.js plugin for chinese lunar calendar.

## What is chinese lunar calendar?

A lunar calendar is a calendar based upon cycles of the Moon's phases (synodic months), in contrast to solar calendars based solely upon the solar year. A purely lunar calendar is also distinguished from lunisolar calendars whose lunar months are brought into alignment with the solar year through some process of intercalation. The details of when months begin varies from calendar to calendar, with some using new, full, or crescent moons and others employing detailed calculations. [more](https://en.wikipedia.org/wiki/Lunar_calendar)

## How to use

### Webpack

1. install

```sh
$ npm install moment-lunar
```

2. import

```js
import moment from 'moment';
import 'moment-lunar';

// convert to 1995-02-09 (1995/03/09 was 1995/02/29 in lunar calendar)
moment().year(1995).month(2).date(9).lunar().format('YYYY-MM-DD');
// get lunar new year's day
moment().year(2017).month(0).date(1).solar().format('YYYY-MM-DD');
```

### Browser

```html
<html>
    <!-- ... -->
    <body>
    <!-- ... -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://unpkg.com/moment-lunar@0.0.4/moment-lunar.min.js"></script>
    <script>
        // convert to 1995-02-09 (1995/03/09 was 1995/02/29 in lunar calendar)
        moment().year(1995).month(2).date(9).lunar().format('YYYY-MM-DD');
        // get lunar new year's day
        moment().year(2017).month(0).date(1).solar().format('YYYY-MM-DD');
    </script>
    <!-- ... -->
    </body>
</html>
```
## License

MIT

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/moment-lunar
[npm-version-image]: http://img.shields.io/npm/v/moment-lunar.svg?style=flat
