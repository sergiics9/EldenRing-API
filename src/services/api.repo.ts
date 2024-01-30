import { ApiResponse, CharacterStructure } from '../models/eldenring.api';
export class ApiRepo {
  url: string;
  page: number;
  characterUrl: string;
  constructor(page: number) {
    this.url = 'https://eldenring.fanapis.com/api/classes?limit=3&page=';
    this.page = page;
    this.characterUrl = this.url + this.page;
  }

  async getClasses(): Promise<CharacterStructure[]> {
    const response = await fetch(this.characterUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const fullData = (await response.json()) as ApiResponse;
    return fullData.data;
  }
}

export class PrivateApi {
  privateApiUrl = 'http://localhost:3000/CustomCharacters';

  async getCustomCharacters(): Promise<CharacterStructure[]> {
    const response = await fetch(this.privateApiUrl);
    if (!response.ok) throw new Error(response.status + '' + response.status);
    return response.json();
  }

  async createCharacter(
    newCharacter: Partial<CharacterStructure>
  ): Promise<CharacterStructure> {
    const response = await fetch(this.privateApiUrl, {
      method: 'POST',
      body: JSON.stringify(newCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async modifyCharacter(
    id: CharacterStructure['id'],
    updatedCharacter: Partial<CharacterStructure>
  ): Promise<CharacterStructure> {
    const finalUrl = `${this.privateApiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async deleteCharacter(
    id: CharacterStructure['id']
  ): Promise<CharacterStructure[]> {
    const finalUrl = `${this.privateApiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    return response.json();
  }
}
