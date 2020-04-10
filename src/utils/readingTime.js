const readingTime = (text) => {
  const wordsPerMinute = 200;
  const numOfWords = text.split(/\s/g).length;
  const minutes = numOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `Tiempo de lectura ${readTime} min`;
}

export default readingTime