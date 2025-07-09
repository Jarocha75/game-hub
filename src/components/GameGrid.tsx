import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isloading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding="10px"
    >
      {isloading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {error && <p>{error}</p>}
      {games.map((game) => (
        <GameCards key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
