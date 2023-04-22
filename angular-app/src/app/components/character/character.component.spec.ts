import { languages } from '../../langStates/character.lang';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from './character.interface';

describe('Languages array', () => {
  it('should have 4 elements', () => {
    expect(languages.length).toBe(4);
  });

  it('should not contain any language object with lang property different than "en" or "es"', () => {
    const langObj = languages.find(
      (lang) => lang.lang !== 'en' && lang.lang !== 'es'
    );
    expect(langObj).not.toBeDefined();
  });
});

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService],
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve characters from the API', () => {
    const charactersMock: Character[] = [
      {name: 'Harry Potter', image: 'https://link-to-image.com'},
      {name: 'Hermione Granger', image: 'https://link-to-image.com'},
      {name: 'Ron Weasley', image: 'https://link-to-image.com'},
    ];

    service.getCharacters().subscribe((characters: Character[]) => {
      expect(characters.length).toBe(3);
      expect(characters).toEqual(charactersMock);
    });

    const request = httpMock.expectOne(service['apiUrl']);
    expect(request.request.method).toBe('GET');
    request.flush(charactersMock);
  });
});
