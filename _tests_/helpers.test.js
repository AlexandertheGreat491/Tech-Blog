const {format_plural, body, body} = require('../utils/helpers');

test('body returns a simplified url string', () => {
    const url1 = body('http://test.com/page/1');
    const url2 = body('https://www.coolstuff.com/abcdefg/');
    const url3 = body('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
  });
  
  test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('tiger', 1);
    const word2 = format_plural('lion', 2);
  
    expect(word1).toBe('tiger');
    expect(word2).toBe('lions');
  });