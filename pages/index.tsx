"use client";

import React, { useEffect } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import GET_POKEMON from "../gql/queries/pokemon";
import Card from "../components/pokemon-card/card";

interface pokemonData {
  name: string;
  attacks: any;
  evolutions: any;
  image: string;
}

export default function Page() {
  let pokeData: pokemonData = {
    name: "",
    image: "",
    attacks: {
      fast: [],
      special: [],
    },
    evolutions: {
      name: "",
    },
  };
  const [pokeSearch, setPokeSearch] = React.useState("");
  const [pokemonData, setPokemonData] = React.useState<pokemonData>(pokeData);
  console.log(pokeSearch);

  const [getPokemonData, { loading, error, data }] = useLazyQuery(GET_POKEMON, {
    variables: { name: pokeSearch },
    onCompleted(data) {
      // console.log(data),
      setPokemonData({
        name: data.pokemon.name,
        attacks: {
          fast: data.pokemon.attacks.fast,
          special: data.pokemon.attacks.special,
        },
        evolutions: data.pokemon.evolutions,
        image: data.pokemon.image,
      });
    },
  });
  useEffect(() => {
    getPokemonData({ variables: { name: pokeSearch } });
  }, [getPokemonData, pokeSearch]);
  // console.log(data);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    // console.log(data);
    setPokeSearch(data.name);
    getPokemonData();
  };
  // console.log(pokemonData);
  const changeByEvolution = (newName: string) => {
    setPokeSearch(newName)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <input type="submit" />
      </form>
      {/* <button onClick={() => getPokemonData()}>click</button> */}
      {pokemonData.name !== "" && (
        <Card
          attacks={pokemonData.attacks}
          name={pokemonData.name}
          evolutions={pokemonData.evolutions}
          image={pokemonData.image}
          setSearch={changeByEvolution}
        />
      )}
    </div>
  );
}

// const query = gql`
//   query xxx($first: Int!) {
//     pokemons(first: $first) {
//       id
//       number
//       name
//       types
//       resistant
//       image
//     }
//   }
// `;
// const queryData = gql`
//   query pokemon($id: String, $name: String) {
//     pokemon(id: $id, name: $name) {
//       id
//       name
//       attacks {
//         fast {
//           name
//         }
//         special {
//           name
//         }
//       }
//       evolutions {
//         id
//         name
//         image
//       }
//       image
//     }
//   }
// `;
