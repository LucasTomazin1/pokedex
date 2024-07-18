import styled from "styled-components";

const Type = ({ types }) => {
  return (
    <Types>
      {types.map((type, index) => (
        <span className={type.type.name} key={index}>
          {type.type.name}
        </span>
      ))}
    </Types>
  );
};

export default Type;

const Types = styled.div`
  display: flex;
  gap: 1rem;
  span {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem;
    border-radius: 0.6rem;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;
