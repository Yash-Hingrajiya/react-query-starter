// import axios from "axios";
// import { useQuery } from "react-query";
import { useSuperHeroesData } from "../hooks/useSuperHerosData";
import { Link } from "react-router-dom";

//first pass the query inside key

// const fetchSuperHeros = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect data fetching", data);
  };

  const onError = (data) => {
    console.log("Perform side effect data fetching error", data);
  };

  // const { isLoading, data, isError, error, isFetching, refetch } =
  //   useSuperHerosData(onSuccess, onError);

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "super-heros",
  //   fetchSuperHeros,
  //   {
  //     // staleTime: 30000,
  //     // cacheTime: 5000,
  //     // refetchOnMount: true,
  //     // refetchOnWindowFocus: "always",
  //     // refetchInterval: 2000,
  //     // refetchIntervalInBackground: true,
  //     // enabled: false,
  //     onSuccess,
  //     onError,
  //     select: (data) => {
  //       const superheroes = data.data.map((hero) => hero.name);
  //       return superheroes;
  //     },
  //   }
  // );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {/* <button onClick={refetch}>Fetch Herors</button> */}
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroname) => {
        return <div key={heroname}>{heroname}</div>;
      })} */}
      {/* {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>
      })} */}
    </>
  );
};
