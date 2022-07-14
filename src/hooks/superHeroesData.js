import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = (heroid) => {
  return axios.get(`http://localhost:4000/superheroes/${heroid}`);
};

export const useSuperHeroData = (heroid) => {
  return useQuery(["super-id", heroid], () => fetchSuperHeros(heroid));
};
