const url =
  'https://stackoverflow.com/questions/8761627/string-tochararray-equivalent-on-javascript';

const parsedUrl = new URL(url);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.origin);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.href);
