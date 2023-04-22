import { languages } from '../utils/langs';
import langStates from '../utils/langStates';

describe('languages', () => {
  test('should contain the correct language objects', () => {
    const expectedLanguages = [
      { lang: 'en', status: 'Status' },
      { lang: 'es', status: 'Estatus' },
      { lang: 'en', species: 'Species' },
      { lang: 'es', species: 'Especies' },
      { lang: 'en', prev: 'Prev' },
      { lang: 'es', prev: 'Anterior' },
      { lang: 'en', next: 'Next' },
      { lang: 'es', next: 'Siguiente' },
      { lang: 'en', page: 'Page' },
      { lang: 'es', page: 'Página' },
      { lang: 'en', of: 'of' },
      { lang: 'es', of: 'de' }
    ];

    expect(languages).toEqual(expectedLanguages);
  });
  test('should return the correct language states for "en"', () => {
    const result = langStates('en');
    expect(result).toEqual({
      langStatus: 'Status',
      langSpecies: 'Species',
      langPrevBtn: 'Prev',
      langNextBtn: 'Next',
      langPage: 'Page',
      langOf: 'of'
    });
  });

  test('should return the correct language states for "es"', () => {
    const result = langStates('es');
    expect(result).toEqual({
      langStatus: 'Estatus',
      langSpecies: 'Especies',
      langPrevBtn: 'Anterior',
      langNextBtn: 'Siguiente',
      langPage: 'Página',
      langOf: 'de'
    });
  });
});