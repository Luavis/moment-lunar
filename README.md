[![NPM version][npm-version-image]][npm-url] [![MIT License][license-image]][license-url]

moment-lunar
===

A lunar calendar(used in korea, chinese, ...) extension for moment.js.

## About

A lunar calendar is a calendar based upon cycles of the Moon's phases (synodic months), in contrast to solar calendars based solely upon the solar year. A purely lunar calendar is also distinguished from lunisolar calendars whose lunar months are brought into alignment with the solar year through some process of intercalation. The details of when months begin varies from calendar to calendar, with some using new, full, or crescent moons and others employing detailed calculations. [more](https://en.wikipedia.org/wiki/Lunar_calendar)

## Install
```sh
$ npm install moment-lunar
```

## Usage
```js
moment().year(1995).month(2).date(9).lunar().format('YYYY-MM-DD');  // convert to 1995-02-09 (1995/03/09 was 1995/02/29 in lunar calendar)
moment().year(2017).month(0).date(1).solar().format('YYYY-MM-DD');  // get lunar new year's day
```

## License

MIT

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/moment-lunar
[npm-version-image]: http://img.shields.io/npm/v/moment-lunar.svg?style=flat
