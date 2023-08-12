import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { pokemonData } from "../../pages";

const MainPokemon = styled.div<{ type?: string }>`
  background: transparent;
  display: flex;
  margin: 30px;
`;
const Detail = styled.div<{ type?: string }>`
  background: transparent;
`;
const EvolutionChain = styled.div<{}>`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
const Attack = styled.div`
  display: flex;
`;

interface card {
  pokemon: pokemonData;
  setSearch: any;
}

const Card = ({ pokemon, setSearch }: card) => {
  console.log(
    pokemon.evolutions?.map((i: any, index: number) =>
      console.log(i.evolutionRequirements)
    )
  );
  const handle = (e: string) => {
    console.log("set search card" + e);
    setSearch(e);
  };

  return (
    <div>
      <MainPokemon>
        <Image
          alt=""
          src={`${pokemon.image}`}
          width={200}
          height={200}
          style={{ margin: "0 30px" }}
        ></Image>
        <Detail>
          <div>Pokedex Number : {pokemon.number}</div>
          <div>Name : {pokemon.name}</div>
          <div style={{ display: "flex" }}>
            Type :
            {pokemon.types.map((type, index) => (
              <div key={index} style={{ margin: "0 10px", color: type }}>
                {type}
              </div>
            ))}
          </div>
          <div>Class : {pokemon.classification}</div>
          <div>
            Weight: {pokemon.weight.minimum} ~ {pokemon.weight.maximum}
          </div>
          <div>
            Height : {pokemon.height.minimum} ~ {pokemon.height.maximum}
          </div>
          <div>
            Resistant :{" "}
            {pokemon.resistant.map((types, index) => (
              <div key={index}> {types}</div>
            ))}
          </div>
          <div>
            Weaknesses:
            {pokemon.weaknesses.map((types, index) => (
              <div key={index}> {types}</div>
            ))}
          </div>
          <div>Flee rate : {pokemon.fleeRate}</div>
          <div>Max HP : {pokemon.maxHP}</div>
          <div>Max CP : {pokemon.maxCP}</div>
        </Detail>
      </MainPokemon>
      <Attack>
        <div> Attack </div>
        <div>
          Fast Attack
          {pokemon.attacks?.fast?.map((i: any, index: number) => (
            <li key={index}>{i.name}</li>
          ))}
        </div>
        <div>
          Special Attack
          {pokemon.attacks?.special?.map((i: any, index: number) => (
            <li key={index}>{i.name}</li>
          ))}
        </div>
      </Attack>
      <EvolutionChain>
        <div>Evolution</div>
        <div style={{ display: "flex" }}>
          {pokemon.evolutions?.map((i: any, index: number) => (
            <div key={index} onClick={() => handle(i.name)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  margin: "20px",
                }}
              >
                {i.name}
                <Image
                  alt=""
                  src={`${i.image}`}
                  width={100}
                  height={100}
                ></Image>
                {/* {i.evolutionRequirements?.map((item: any, index: number) => {
                  <div key={index}>
                    <div>
                      {item.name} : {item.usage}
                    </div>
                  </div>;
                })} */}
              </div>
            </div>
          ))}
        </div>
      </EvolutionChain>
    </div>
  );
};

export default Card;
