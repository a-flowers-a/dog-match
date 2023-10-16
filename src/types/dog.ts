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
  next: number;
  prev: number;
}
