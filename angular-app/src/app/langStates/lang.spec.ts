import { languages } from './character.lang';

describe('Languages array', () => {
  it('should have 4 elements', () => {
    expect(languages.length).toBe(4);
  });

  it('should not contain any language object with lang property different than "en" or "es"', () => {
    const langObj = languages.find(lang => lang.lang !== 'en' && lang.lang !== 'es');
    expect(langObj).not.toBeDefined();
  });
});