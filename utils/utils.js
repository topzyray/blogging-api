// Function to calculate word count
const countWords = (text) => {
  return text.split(/\s+/).length;
};

// Calculate reading time
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed in words per minute
  const wordCount = countWords(text);
  const minutes = wordCount / wordsPerMinute;
  const readingTime = Math.ceil(minutes); // Round up to nearest minute
  return readingTime;
};
