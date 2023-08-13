import React, { useCallback } from "react";
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

const Search = () => {
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
  const [pokeSearch, setPokeSearch] = React.useState("");
  const [pokemonData, setPokemonData] = React.useState<pokemonData>(pokeData);
  const [notFound, setnotFound] = React.useState(false);

  console.log(pokeSearch);

  const [getPokemonData, { loading, error }] = useLazyQuery(GET_POKEMON, {
    variables: { name: pokeSearch },
    onCompleted(data) {
      console.log(data);
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
  console.log(loading, error);
  useCallback(() => {
    getPokemonData({ variables: { name: pokeSearch } });
  }, [getPokemonData, pokeSearch]);
  // console.log(data);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    // console.log(data);
    setPokeSearch(data.name);
    getPokemonData();
  };
  console.log(pokemonData);
  const changeByEvolution = (newName: string) => {
    setPokeSearch(newName);
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: '20px' }}>
        Search Pokemon :
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: "10px" }}>
          <input
            {...register("name")}
            id="search-box"
            placeholder="search pokemon"
          />
          <input type="submit" id="submit-button" value="submit" />
        </form>
      </div>
      {!loading && notFound && <div>Not Found Pokemon</div>}
      {loading && <div> Loading Pokemon ...</div>}
      {!loading && pokemonData.name !== "" && (
        <Card pokemon={pokemonData} setSearch={changeByEvolution} />
      )}
    </div>
  );
};

export default Search;
