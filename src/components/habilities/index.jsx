import { useState, useEffect } from "react";
import { getHabilityDescription } from "../../service";

export const Habilities = ({ ability }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const descriptionData = await getHabilityDescription(ability.url);
       
        const descriptions = descriptionData.effect_entries

        const portugueseDescription = descriptions.find(
          (entry) => entry.language.name === "pt"
        );

        const englishDescription = descriptions.find(
          (entry) => entry.language.name === "en"
        );

        setDescription(portugueseDescription ? portugueseDescription.effect : (englishDescription ? englishDescription.effect : "descrição não disponível"))
      } catch (error) {
        console.log("fetching description error: ", error);
      }
    };
    fetchDescription();
  }, [ability.url]);
  return (
    <li>
      <h3>{ability.name}</h3>
      <p>{description}</p>
    </li>
  );
};
