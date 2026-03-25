import { useFetch } from "./Components/useFetch";

export const OtherApp = () => {
  const { ApiValue, isLoading, isError } = useFetch(
    // 'https://fakestoreapi.com/products'
    // "https://reqres.in/api/users",
    `http://localhost:8000/profile`,
    {
      headers: {
        'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
      }
    },
  );
  console.log("ApiValue", ApiValue?.data.data);

  return (
    <>
      <h1>UseFetch</h1>
    </>
  );
};
