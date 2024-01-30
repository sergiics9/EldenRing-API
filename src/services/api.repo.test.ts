import { CharacterStructure } from '../models/eldenring.api';
import { ApiRepo, PrivateApi } from './api.repo';

describe('Given ApiRepo class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest
        .fn()
        .mockResolvedValue({ data: [] as CharacterStructure[] });
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getClasses should be used', async () => {
      const repo = new ApiRepo(1);
      const expected = [] as CharacterStructure[];
      const result = await repo.getClasses();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getClasses should be used', async () => {
      const repo = new ApiRepo(1);
      expect(repo.getClasses()).rejects.toThrow();
    });
  });
});

describe('Given PrivateApi class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getCustomCharacters should be used', async () => {
      const repo = new PrivateApi();
      const expected: CharacterStructure[] = [];
      const result = await repo.getCustomCharacters();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
    test('Then method createCharacters should be used', async () => {
      const newCharacter = { Nombre: 'Great Wizard', id: '6' };
      const repo = new PrivateApi();
      const createdCharacter = await repo.createCharacter(newCharacter);
      expect(createdCharacter).toBeDefined();
    });
  });

  describe('When calling the create method', () => {
    test('Then it should fetch data from the Api and return the response', async () => {
      const privateData = {} as unknown as Partial<CharacterStructure>;
      const expectedUrl = 'http://localhost:3000/CustomCharacters';
      const repo = new PrivateApi();

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(privateData),
      });
      const response = await repo.createCharacter(privateData);
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'POST',
        body: JSON.stringify(privateData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(privateData);
    });
  });

  describe('When calling the delete method', () => {
    test('Then it should fecth data from the API and return the response', async () => {
      const mockId = '1';
      const expectedUrl = `http://localhost:3000/CustomCharacters/${mockId}`;
      const repo = new PrivateApi();

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      });
      const response = await repo.deleteCharacter(mockId);
      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'DELETE',
      });
      expect(response).toEqual({});
    });
  });

  describe('When calling the modify method', () => {
    test('Then it should fecth data from the API and return the response', async () => {
      const mockId = '1';
      const privateData = { id: 1 } as unknown as Partial<CharacterStructure>;
      const expectedUrl = 'http://localhost:3000/CustomCharacters/1';
      const repo = new PrivateApi();

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(privateData),
      });

      const response = await repo.modifyCharacter(mockId, privateData);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: 'PATCH',
        body: JSON.stringify(privateData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(response).toEqual(privateData);
    });

    describe('When we instantiate it and response is bad', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValueOnce({
          ok: false,
        });
      });

      test('Then method getCustomCharacters should not be used', async () => {
        const repo = new PrivateApi();
        expect(repo.getCustomCharacters()).rejects.toThrow();
      });
    });
  });
});
