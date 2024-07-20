import styled from "styled-components";
import Type from "../type-tag";

export const PokemonCard = ({ name, types, image }) => {
  const primaryType = types[0].type.name;

  return (
    <Card className={primaryType}>
      <div>
        <ImageBackground>
          <Img alt={name} src={image} />
        </ImageBackground>
      </div>
      <CardBody>
        <Name>{name}</Name>
        <Types>
        <Type types={types} />
          {/* {types.map((type, index) => {
            return <span key={index}>{type.type.name}</span>;
          })} */}
        </Types>
      </CardBody>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease-in-out;
     &:hover {
        transform: scale(1.05);
      }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const ImageBackground = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  justify-content: space-evenly;
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );
`;

const Name = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
`;

const Types = styled.div`
  display: flex;
  gap: 1rem;
  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
