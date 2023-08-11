import React from "react";
import Image from "next/image";

interface card {
  name: string;
  attacks: {
    fast: [];
    special: [];
  };
  evolutions: any;
  image: string;
  setSearch: any
}

const Card = ({ name, attacks, evolutions, image, setSearch}: card ) => {
  console.log(attacks?.fast?.map((i: string, index: number) => i));
  const handle = (e: string) => {
    console.log('set search card'+e);
    setSearch(e);
  };

  return (
    <div>
      <Image alt="" src={`${image}`} width={200} height={200}></Image>

      <div>{name}</div>
      <ul>
        Fast Attack
        {attacks?.fast?.map((i: any, index: number) => (
          <li key={index}>{i.name}</li>
        ))}
      </ul>
      <ul>
        Special Attack
        {attacks?.special?.map((i: any, index: number) => (
          <li key={index}>{i.name}</li>
        ))}
      </ul>
      <ul>
        {" "}
        Evolution
        {evolutions?.map((i: any, index: number) => (
          <li
            key={index}
            value={i.name}
            onClick={(e) => handle(e.target.innerText)}
          >
            {i.name}
            <Image alt="" src={`${i.image}`} width={20} height={20}></Image>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
