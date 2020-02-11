import styled from "styled-components";

const Index = () => {
  return (
    <Wrapper>
      <Label>This is def an empty project</Label>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-size: 2rem;
  margin: 2rem auto;
`;
