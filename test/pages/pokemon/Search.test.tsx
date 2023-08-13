import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import Search from "../../../pages/pokemon/Search";
import userEvent from "@testing-library/user-event";
import { expect, jest, test } from "@jest/globals";
import Card from "../../../components/pokemon-card/card";

describe("Render", () => {
  beforeEach(() => {
    render(
      <MockedProvider addTypename={false}>
        <Search />
      </MockedProvider>
    );
  });
  xit("should render properly", async () => {
    const inputBox = await screen.findByPlaceholderText("search pokemon");

    expect(inputBox).toBeInTheDocument();

  });
  it("searching", async () => {
    const handleClick = jest.spyOn(React, "useState");
    // handleClick.mockImplementation((pokemonData) => [
    //   pokemonData,
    //   setpokemonData,
    // ]);
    
    const inputBox = await screen.findByRole('textbox');
    fireEvent.change(inputBox, {target: {value: 'Charmander'}})
    expect(inputBox).toBe('Charmander');
    const button = await screen.findByText("submit");
    userEvent.click(button);

    expect(inputBox).toBeInTheDocument();
    expect(await screen.findByText("Loading Pokemon ...")).toBeInTheDocument();
  });
});
