import { useState, useEffect } from "react";
import styled from "styled-components";
import { testPromise } from "../random_api/random";
import { Display } from "../components/display";

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
      <Display displayStr={response} />
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

const OtherRandomButton = styled.button`
  color: green;
`;
