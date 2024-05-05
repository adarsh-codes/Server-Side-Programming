const returnTime = (minute) => {
  const hours = Math.floor(minute / 60);
  const minutes = minute % 60;
  str =
    minute + ' minute(s) = ' + hours + ' hour(s) and ' + minutes + ' minute(s)';
  return str;
};

const main = () => {
  console.log(returnTime(200));
};

main();
