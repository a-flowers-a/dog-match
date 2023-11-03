export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export interface DogsIdsResponse {
  resultIds: string[];
  total: number;
  next: string;
  prev?: number;
}

export interface MatchResponse {
  match: string;
}
