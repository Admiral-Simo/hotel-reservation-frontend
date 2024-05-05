interface Booking {
  id: string;
  UserID: string;
  RoomID: string;
  NumPersons: number;
  FromDate: string;
  TillDate: string;
  Canceled: boolean;
}

interface BookRoomParams {
  FromDate: string;
  TillDate: string;
  NumPersons: number;
}
