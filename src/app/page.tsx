"use client";
import { useQuery } from "react-query";

export default function Home() {
  // use react query
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[], Error>("products", fetchTodos);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching todos</div>
      ) : (
        products?.map(({ price, title, id }) => (
          <div key={id}>
            <h1>{title}</h1>
            <h1>{price}</h1>
          </div>
        ))
      )}
    </main>
  );
}

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const fetchTodos = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    // Set the fetched todos in the state
    return data;
  } catch (error) {
    alert("Error fetching todos:" + error);
    throw new Error("Error fetching todos");
  }
};
