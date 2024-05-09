export type Hotel = {
  id: string;
  name: string;
  location: string;
  rooms: string[];
  rating: number;
};

export type UpdateHotelParams = {
  name: string;
  location: string;
  rooms: string[];
};
