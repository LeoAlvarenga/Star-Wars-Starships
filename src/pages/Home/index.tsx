import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { StarshipCard } from "../../components/StarshipCard";
import { api } from "../../services/api";
import { SWAPIStarshipsResponse } from "../../types/apiTypes";
import { Container, Header, SpaceshipList } from "./styles";
import { ReactComponent as Left } from "../../assets/svg/left.svg";
import { ReactComponent as Right } from "../../assets/svg/right.svg";

export const Home = () => {
  const [response, setResponse] = useState<SWAPIStarshipsResponse>();
  const [loading, setloading] = useState<boolean>(true);
  const [distanceToTravel, setDistanceToTravel] = useState<string>("");

  useEffect(() => {
    api.get(`/starships`).then((res) => {
      setResponse(res.data);
      setloading(false);
    });
  }, []);

  const handlePageChange = (pageLink: string) => {
    const path = pageLink.substring(api.defaults.baseURL?.length!);
    setloading(true);
    api.get(path).then((res) => {
      setResponse(res.data);
      setloading(false);
    });
  };

  return (
    <Container>
      <Header>
        <h1>
          Star Wars
          <br />
          Spaceships
        </h1>
        <Input
          type="number"
          value={distanceToTravel}
          onChange={(e) => setDistanceToTravel(e.target.value)}
          placeholder="Insert a travel distance"
        />
        <div className="buttonsContainer">
          <button
            onClick={() => handlePageChange(response?.previous!)}
            disabled={!response?.previous}
          >
            <Left />
            previous
          </button>
          <button
            onClick={() => handlePageChange(response?.next!)}
            disabled={!response?.next}
          >
            next
            <Right />
          </button>
        </div>
      </Header>
      {loading ? (
        <div className="loading">
          <h2>...Loading...</h2>
        </div>
      ) : (
        <SpaceshipList>
          {response?.results.length! > 0 &&
            response?.results.map((starship, idx) => (
              <StarshipCard
                key={idx}
                name={starship.name}
                mglt={starship.MGLT}
                distance={Number(distanceToTravel)}
                consumables={starship.consumables}
              />
            ))}
        </SpaceshipList>
      )}
    </Container>
  );
};
