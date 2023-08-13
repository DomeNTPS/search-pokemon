import React, { useCallback, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import GET_POKEMON from "../../gql/queries/pokemon";
import Card from "../../components/pokemon-card/card";

export interface pokemonData {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  attacks: any;
  evolutions: any;
  image: string;
}

interface searchProps {
  pokemonName: string;
  setPokemonSeach?: any
}

const Search = ({ pokemonName, setPokemonSeach }: searchProps) => {
  let pokeData: pokemonData = {
    id: "",
    number: "",
    name: "",
    weight: {
      minimum: "",
      maximum: "",
    },
    height: {
      minimum: "",
      maximum: "",
    },
    classification: "",
    types: [""],
    resistant: [""],
    weaknesses: [""],
    fleeRate: 0,
    maxCP: 0,
    maxHP: 0,
    attacks: {
      fast: [],
      special: [],
    },
    evolutions: {
      name: "",
    },
    image: "",
  };
  // const [pokeSearch, setPokeSearch] = React.useState("");
  const [pokemonData, setPokemonData] = React.useState<pokemonData>(pokeData);
  const [notFound, setnotFound] = React.useState(false);

  const [getPokemonData, { loading, error }] = useLazyQuery(GET_POKEMON, {
    variables: { name: pokemonName },
    onCompleted(data) {
      if (data.pokemon === null) {
        setPokemonData(pokeData);
        setnotFound(true);
      } else {
        setPokemonData({
          id: data.pokemon.id,
          name: data.pokemon.name,
          number: data.pokemon.number,
          classification: data.pokemon.classification,
          fleeRate: data.pokemon.fleeRate,
          height: data.pokemon.height,
          weight: data.pokemon.weight,
          maxCP: data.pokemon.maxCP,
          maxHP: data.pokemon.maxHP,
          resistant: data.pokemon.resistant,
          weaknesses: data.pokemon.weaknesses,
          attacks: {
            fast: data.pokemon.attacks.fast,
            special: data.pokemon.attacks.special,
          },
          evolutions: data.pokemon.evolutions,
          image: data.pokemon.image,
          types: data.pokemon.types,
        });
        setnotFound(false);
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    console.log(pokemonName)
    getPokemonData({ variables: { name: pokemonName } });
  }, [pokemonName]);

  const changeByEvolution = (newName: string) => {
    setPokemonSeach(newName);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {error && <div> You need to enter name of the Pokémon</div>}
      {!loading && notFound && <div>Not Found Pokemon</div>}
      {loading && <div> Loading Pokemon ...</div>}
      {!error && !loading && pokemonData.name !== "" && (
        <Card pokemon={pokemonData} setSearch={changeByEvolution} />
      )}
    </div>
  );
};

export default Search;
