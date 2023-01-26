export interface PositionI {
  id: number,
  name: string;
  url: string;
  desc: string;
  price: number;
  categories: string;
}

export interface FormI {
  name: string,
  secondName: string,
  address: string,
  phone: string,
  email: string,
  order: []
}

export interface BucketArrayI {
  categories: string,
  count: number,
  desc: string,
  id: number,
  name: string,
  price: number,
  url: string,
}