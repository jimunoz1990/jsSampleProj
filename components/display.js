import styled from "styled-components";

export const Display = ({ displayStr }) => {
  return <Label>Here's the response from the promise {displayStr}</Label>;
};

const Label = styled.div`
  font-size: 2rem;
  margin: 2rem auto;
`;
