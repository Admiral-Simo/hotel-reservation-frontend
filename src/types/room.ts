type Size = "small" | "medium" | "large";

interface Room {
  id: string;
  size: Size;
  seaSide: boolean;
  price: number;
  hotelID: string;
}
