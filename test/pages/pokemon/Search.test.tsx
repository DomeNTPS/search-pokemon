import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider, tick } from "@apollo/client/testing";
import Search from "../../../pages/pokemon/Search";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import GET_POKEMON from "../../../gql/queries/pokemon";
import Page from "../../../pages";

describe("Render", () => {
  beforeEach(() => {
    render(
      <MockedProvider addTypename={false}>
        <Page />
      </MockedProvider>
    );
  });
  it("should render properly", async () => {
    const inputBox = await screen.findByPlaceholderText("search pokemon");

    expect(inputBox).toBeInTheDocument();
  });
});

describe("Search: Bulbasaur", () => {
  it("Search: Bulbasaur", async () => {
    const mocks = [
      {
        request: {
          query: GET_POKEMON,
          variables: {
            name: "Bulbasaur",
          },
        },
        result: {
          data: {
            pokemon: {
              id: "UG9rZW1vbjowMDE=",
              number: "001",
              name: "Bulbasaur",
              weight: {
                minimum: "6.04kg",
                maximum: "7.76kg",
              },
              height: {
                minimum: "0.61m",
                maximum: "0.79m",
              },
              classification: "Seed Pokémon",
              types: ["Grass", "Poison"],
              resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
              weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
              fleeRate: 0.1,
              maxCP: 951,
              maxHP: 1071,
              image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
              attacks: {
                fast: [
                  {
                    name: "Tackle",
                    type: "Normal",
                    damage: 12,
                  },
                  {
                    name: "Vine Whip",
                    type: "Grass",
                    damage: 7,
                  },
                ],
                special: [
                  {
                    name: "Power Whip",
                    type: "Grass",
                    damage: 70,
                  },
                  {
                    name: "Seed Bomb",
                    type: "Grass",
                    damage: 40,
                  },
                  {
                    name: "Sludge Bomb",
                    type: "Poison",
                    damage: 55,
                  },
                ],
              },
              evolutions: [
                {
                  id: "UG9rZW1vbjowMDI=",
                  name: "Ivysaur",
                  image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
                  evolutionRequirements: {
                    amount: 100,
                    name: "Bulbasaur candies",
                  },
                },
                {
                  id: "UG9rZW1vbjowMDM=",
                  name: "Venusaur",
                  image: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  evolutionRequirements: null,
                },
              ],
            },
          },
        },
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Search pokemonName={"Bulbasaur"} />
      </MockedProvider>
    );

    await waitFor(() => {
      const nameCheck = screen.getByRole("generic", { name: "name" });
      expect(nameCheck.textContent).toContain("Bulbasaur");
      const typeCheck = screen.getAllByRole("generic", { name: "type" });
      expect(typeCheck.some((i) => i.textContent?.includes("Grass"))).toBe(
        true
      );
    })
  });
});

describe("Search: Charmander", () => {
  it("Search: Charmander", async () => {
    const mocks = [
      {
        request: {
          query: GET_POKEMON,
          variables: {
            name: "Charmander",
          },
        },
        result: {
          "data": {
            "pokemon": {
              "id": "UG9rZW1vbjowMDQ=",
              "number": "004",
              "name": "Charmander",
              "weight": {
                "minimum": "7.44kg",
                "maximum": "9.56kg"
              },
              "height": {
                "minimum": "0.53m",
                "maximum": "0.68m"
              },
              "classification": "Lizard Pokémon",
              "types": [
                "Fire"
              ],
              "resistant": [
                "Fire",
                "Grass",
                "Ice",
                "Bug",
                "Steel",
                "Fairy"
              ],
              "weaknesses": [
                "Water",
                "Ground",
                "Rock"
              ],
              "fleeRate": 0.1,
              "maxCP": 841,
              "maxHP": 955,
              "image": "https://img.pokemondb.net/artwork/charmander.jpg",
              "attacks": {
                "fast": [
                  {
                    "name": "Ember",
                    "type": "Fire",
                    "damage": 10
                  },
                  {
                    "name": "Scratch",
                    "type": "Normal",
                    "damage": 6
                  }
                ],
                "special": [
                  {
                    "name": "Flame Burst",
                    "type": "Fire",
                    "damage": 30
                  },
                  {
                    "name": "Flame Charge",
                    "type": "Fire",
                    "damage": 25
                  },
                  {
                    "name": "Flamethrower",
                    "type": "Fire",
                    "damage": 55
                  }
                ]
              },
              "evolutions": [
                {
                  "id": "UG9rZW1vbjowMDU=",
                  "name": "Charmeleon",
                  "image": "https://img.pokemondb.net/artwork/charmeleon.jpg",
                  "evolutionRequirements": {
                    "amount": 100,
                    "name": "Charmander candies"
                  }
                },
                {
                  "id": "UG9rZW1vbjowMDY=",
                  "name": "Charizard",
                  "image": "https://img.pokemondb.net/artwork/charizard.jpg",
                  "evolutionRequirements": null
                }
              ]
            }
          }
        }
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Search pokemonName={"Charmander"} />
      </MockedProvider>
    );

    await waitFor(() => {
      const nameCheck = screen.getByRole("generic", { name: "name" });
      expect(nameCheck.textContent).toContain("Charmander");
      const typeCheck = screen.getAllByRole("generic", { name: "type" });
      expect(typeCheck.some((i) => i.textContent?.includes("Fire"))).toBe(
        true
      );
    })
  });
});

describe("Search: Squirtle", () => {
  it("Search: Squirtle", async () => {
    const mocks = [
      {
        request: {
          query: GET_POKEMON,
          variables: {
            name: "Squirtle",
          },
        },
        result: {
          "data": {
            "pokemon": {
              "id": "UG9rZW1vbjowMDc=",
              "number": "007",
              "name": "Squirtle",
              "weight": {
                "minimum": "7.88kg",
                "maximum": "10.13kg"
              },
              "height": {
                "minimum": "0.44m",
                "maximum": "0.56m"
              },
              "classification": "Tiny Turtle Pokémon",
              "types": [
                "Water"
              ],
              "resistant": [
                "Fire",
                "Water",
                "Ice",
                "Steel"
              ],
              "weaknesses": [
                "Electric",
                "Grass"
              ],
              "fleeRate": 0.1,
              "maxCP": 891,
              "maxHP": 1008,
              "image": "https://img.pokemondb.net/artwork/squirtle.jpg",
              "attacks": {
                "fast": [
                  {
                    "name": "Bubble",
                    "type": "Water",
                    "damage": 25
                  },
                  {
                    "name": "Tackle",
                    "type": "Normal",
                    "damage": 12
                  }
                ],
                "special": [
                  {
                    "name": "Aqua Jet",
                    "type": "Water",
                    "damage": 25
                  },
                  {
                    "name": "Aqua Tail",
                    "type": "Water",
                    "damage": 45
                  },
                  {
                    "name": "Water Pulse",
                    "type": "Water",
                    "damage": 35
                  }
                ]
              },
              "evolutions": [
                {
                  "id": "UG9rZW1vbjowMDg=",
                  "name": "Wartortle",
                  "image": "https://img.pokemondb.net/artwork/wartortle.jpg",
                  "evolutionRequirements": {
                    "amount": 100,
                    "name": "Squirtle candies"
                  }
                },
                {
                  "id": "UG9rZW1vbjowMDk=",
                  "name": "Blastoise",
                  "image": "https://img.pokemondb.net/artwork/blastoise.jpg",
                  "evolutionRequirements": null
                }
              ]
            }
          }
        }
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Search pokemonName={"Squirtle"} />
      </MockedProvider>
    );

    await waitFor(() => {
      const nameCheck = screen.getByRole("generic", { name: "name" });
      expect(nameCheck.textContent).toContain("Squirtle");
      const typeCheck = screen.getAllByRole("generic", { name: "type" });
      expect(typeCheck.some((i) => i.textContent?.includes("Water"))).toBe(
        true
      );
    })
  });
});
