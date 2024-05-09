export type Booking = {
  id: string;
  UserID: string;
  RoomID: string;
  NumPersons: number;
  FromDate: string;
  TillDate: string;
  Canceled: boolean;
};

export type BookRoomParams = {
  FromDate: string;
  TillDate: string;
  NumPersons: number;
};
