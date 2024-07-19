import { useState, useEffect } from "react";
import { getHabilityDescription } from "../../service";
import styled from "styled-components";

export const Abilities = ({ ability }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const descriptionData = await getHabilityDescription(ability.url);

        const effect = descriptionData.effect_entries.find(
          (entry) => entry.language.name === "en"
        );

        setDescription(effect ? effect.effect : "descrição não disponível");
      } catch (error) {
        setDescription("descrição não disponível");
      }
    };
    fetchDescription();
  }, [ability.url]);
  return (
    <Ability>
      <h3>{ability.name}</h3>
      <p>{description}</p>
    </Ability>
  );
};

const Ability = styled.li`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
