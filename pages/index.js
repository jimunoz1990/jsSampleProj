import { useState, useEffect } from "react";
import styled from "styled-components";
import { testPromise } from "../random_api/random";

const Index = () => {
  const [response, setResponse] = useState(null);
  const [counter, setCounter] = useState(0);

  function poll() {
    setTimeout(function() {
      testPromise()
        .then(function(resp) {
          setResponse(resp);
        })
        .catch(function(resp) {
          setResponse(resp);
        });
      poll();
    }, 1000);
  }

  useEffect(() => {
    poll();
  }, []); // trick to get useEffect to only run once

  return (
    <Wrapper>
      <Label>Here's the response from the promise {response}</Label>
      <OtherRandomButton onClick={() => setCounter(counter + 1)}>
        {counter}
      </OtherRandomButton>
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

const OtherRandomButton = styled.button`
  color: green;
`;
