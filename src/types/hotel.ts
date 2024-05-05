interface Hotel {
  id: string;
  name: string;
  location: string;
  rooms: string[];
  rating: number;
}

interface UpdateHotelParams {
  name: string;
  location: string;
  rooms: string[];
}
