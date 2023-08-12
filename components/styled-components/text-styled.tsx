import styled, { css } from "styled-components";

const Header = styled.div`
  font-size: x-large;
`;

const Detail = styled.div`
  display: flex;
  margin: 15px;
  padding: 10px;
  border-bottom: #5d67675c 0.5px solid;
  font-size: larger;
  align-items: center
`;

const StyledType = styled.div<{ type: string }>`
  margin: 0 5px;
  color: white;
  padding: 5px 25px;
  border-radius: 15px;
  font-size: large;
  ${(props) => {
    switch (props.type) {
      case "Normal":
        return css`
          background-color: #aaaa99;
        `;
      case "Fire":
        return css`
          background-color: #ff4422;
        `;
      case "Water":
        return css`
          background-color: #3399ff;
        `;
      case "Electric":
        return css`
          background-color: #ffcc33;
        `;
      case "Grass":
        return css`
          background-color: #77cc55;
        `;
      case "Ice":
        return css`
          background-color: #66ccff;
        `;
      case "Fighting":
        return css`
          background-color: #bb5544;
        `;
      case "Poison":
        return css`
          background-color: #aa5599;
        `;
      case "Ground":
        return css`
          background-color: #ddbb55;
        `;
      case "Flying":
        return css`
          background-color: #8899ff;
        `;
      case "Psychic":
        return css`
          background-color: #ff5599;
        `;
      case "Bug":
        return css`
          background-color: #aabb22;
        `;
      case "Rock":
        return css`
          background-color: #c3b477;
        `;
      case "Ghost":
        return css`
          background-color: #6969bc;
        `;
      case "Dragon":
        return css`
          background-color: #7766ee;
        `;
      case "Dark":
        return css`
          background-color: #775544;
        `;
      case "Steel":
        return css`
          background-color: #aaaabb;
        `;
      case "Fairy":
        return css`
          background-color: #ee99ee;
        `;
      default:
        break;
    }
  }}
`;

export { StyledType, Detail, Header };
