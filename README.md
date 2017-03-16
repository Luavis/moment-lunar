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
moment().year(1995).month(2).date(9).lunar().format('YYYY-MM-DD');  // convert to 1995-03-09
moment().year(2017).month(0).date(1).solar().format('YYYY-MM-DD');  // get lunar new year's day
```

## License 
```
Copyright (c) 2017 Luavis

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
```
