type Size = "small" | "medium" | "large";

export type Room = {
  id: string;
  size: Size;
  seaSide: boolean;
  price: number;
  hotelID: string;
};
