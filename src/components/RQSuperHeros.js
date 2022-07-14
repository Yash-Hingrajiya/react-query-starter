import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/superHeroesData";

export const RQSuperHeros = () => {
  const { heroid } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroid);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};
