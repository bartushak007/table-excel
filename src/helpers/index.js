export const resolvePath = (
  filePath,
  prefix = process.env.PUBLIC_URL.concat('/')
) => (filePath.startsWith('http') ? filePath : prefix.concat(filePath));

const expressionUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const regexUrl = new RegExp(expressionUrl);

export const decorateCurrency = (value, currency) => {
  const fixedNum = Number(value).toFixed(2);
  const fraction = String(fixedNum).slice(-3);
  const integer = String(fixedNum).slice(0, -3);

  const formattedNum = integer
    .split('')
    .reverse()
    .reduceRight((str, elem, i) => {
      return str + ((i + 1) % 3 === 0 && i ? ' ' + elem : elem);
    }, '');

  return formattedNum + fraction + ' ' + currency;
};
