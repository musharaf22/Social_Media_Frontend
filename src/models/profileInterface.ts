export interface IProfile {
  data: Data;
  totalFriends: number;
  totalReq: number;
}

export interface Data {
  _id: string;
  name: string;
  email: string;
  address: string;
  image: any[];
  friends: string[];
  friendReq: string[];
  friendRes: string[];
  __v: number;
}
