export const resolvePath = (
  filePath,
  prefix = process.env.PUBLIC_URL.concat('/')
) => (filePath.startsWith('http') ? filePath : prefix.concat(filePath));

const expressionUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const regexUrl = new RegExp(expressionUrl);
