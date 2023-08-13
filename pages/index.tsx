"use client";

import React from "react";
import Search from "./pokemon/Search";
import { useForm } from "react-hook-form";

export default function Page() {
  const [pokeSearch, setPokeSearch] = React.useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    setPokeSearch(data.name);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        Search Pokemon :
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: "10px" }}>
          <input
            {...register("name")}
            id="search-box"
            placeholder="search pokemon"
            aria-label="search"
            type="text"
          />
          <input type="submit" id="submit-button" value="submit" />
        </form>
      </div>
      <Search pokemonName={pokeSearch} setPokemonSeach={setPokeSearch}/>
    </div>
  );
}
