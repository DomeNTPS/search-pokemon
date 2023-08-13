import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { pokemonData } from "../../pages/pokemon/Search";
import { StyledType, Detail, Header } from "../styled-components/text-styled";

const MainPokemon = styled.div`
  background: transparent;
  display: flex;
  margin: 30px;
  align-items: center;
  justify-content: space-around;
`;
const Information = styled.div`
  background: transparent;
`;
const EvolutionChain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
`;

const Attack = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
`;

interface card {
  pokemon: pokemonData;
  setSearch: any;
}

const Card = ({ pokemon, setSearch }: card) => {
  const handle = (e: string) => {
    setSearch(e);
  };

  return (
    <div style={{ fontFamily: "monospace" }}>
      <MainPokemon>
        <Image
          alt=""
          src={`${pokemon.image}`}
          width={300}
          height={300}
          style={{ margin: "0 30px" }}
        ></Image>
        <Information>
          <Header aria-label="name">{pokemon.name} Detail</Header>
          <Detail>Pokedex Number : {pokemon.number}</Detail>
          <Detail>Name : {pokemon.name}</Detail>
          <Detail style={{ display: "flex" }}>
            Type :
            {pokemon.types.map((type, index) => (
              <StyledType key={index} type={type} aria-label="type">
                {type}
              </StyledType>
            ))}
          </Detail>
          <Detail>Class : {pokemon.classification}</Detail>
          <Detail>
            Weight: {pokemon.weight.minimum} ~ {pokemon.weight.maximum}
          </Detail>
          <Detail>
            Height : {pokemon.height.minimum} ~ {pokemon.height.maximum}
          </Detail>
          <Detail>
            Resistant :{" "}
            {pokemon.resistant.map((types, index) => (
              <StyledType key={index} type={types}>
                {" "}
                {types}
              </StyledType>
            ))}
          </Detail>
          <Detail>
            Weaknesses:
            {pokemon.weaknesses.map((types, index) => (
              <StyledType key={index} type={types}>
                {" "}
                {types}
              </StyledType>
            ))}
          </Detail>
          <Detail>Flee rate : {pokemon.fleeRate}</Detail>
          <Detail>Max HP : {pokemon.maxHP}</Detail>
          <Detail>Max CP : {pokemon.maxCP}</Detail>
        </Information>
      </MainPokemon>
      {pokemon.evolutions ? (
        <EvolutionChain>
          <Header>Evolution Chart</Header>
          <div style={{ display: "flex" }}>
            {pokemon.evolutions?.map((i: any, index: number) => (
              <div key={index} onClick={() => handle(i.name)}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "20px",
                    fontSize: "large"
                  }}
                >
                  <Image
                    alt=""
                    src={`${i.image}`}
                    width={150}
                    height={150}
                    style={{ marginBottom: "20px" }}
                  ></Image>
                  {i.name}
                </div>
              </div>
            ))}
          </div>
        </EvolutionChain>
      ) : (
        <Header style={{ margin: "20px" }}>Evolution : Max Evolution </Header>
      )}
      <Attack>
        <Header> Attack </Header>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ margin: "10px", fontSize: "large" }}>
            Fast Attack
            {pokemon.attacks?.fast?.map((i: any, index: number) => (
              <div key={index} style={{ margin: "10px 0", display: "flex", alignItems: 'center' }}>
                <StyledType type={i.type}> {i.name} </StyledType> Damage:{" "}
                {i.damage}
              </div>
            ))}
          </div>
          <div style={{ margin: "10px", fontSize: "large" }}>
            Special Attack
            {pokemon.attacks?.special?.map((i: any, index: number) => (
              <div key={index} style={{ margin: "10px 0", display: "flex", alignItems: 'center' }}>
                <StyledType type={i.type}> {i.name} </StyledType> Damage:{" "}
                {i.damage}
              </div>
            ))}
          </div>
        </div>
      </Attack>
    </div>
  );
};

export default Card;
