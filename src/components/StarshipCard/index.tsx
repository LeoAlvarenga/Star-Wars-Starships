import {
  parseConsumablesToHours,
  stopsPerMGLTDistance,
} from "../../utils/utils";
import { Container } from "./styles";

interface StarshipCardProps {
  name: string;
  mglt: string;
  distance: number;
  consumables: string;
}

export const StarshipCard: React.FC<StarshipCardProps> = ({
  name,
  mglt,
  distance,
  consumables,
}) => {
  const consumableTime = parseConsumablesToHours(consumables);
  const stops = stopsPerMGLTDistance(distance, Number(mglt), consumableTime);
  return (
    <Container>
      <h2>{name}</h2>
      <p>MGLT: {mglt}</p>
      <p>Consumables: {consumables}</p>
      <p>
        Stops:{" "}
        {stops! >= 0 ? stops : "Unable to calculate the number of stops."}
      </p>
    </Container>
  );
};
