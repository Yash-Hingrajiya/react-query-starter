import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heros", fetchSuperHeros, {
    // staleTime: 30000,
    // cacheTime: 5000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: "always",
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superheroes = data.data.map((hero) => hero.name);
    //   return superheroes;
    // },
  });
};
