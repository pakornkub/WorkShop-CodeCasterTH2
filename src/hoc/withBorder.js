import React from "react";
import styled from "styled-components";

const Border = styled.div`
  border: 2px solid red;
`;

const withBorder = (WrappedCompenent) => (props) => {
  return (
    <Border>
      <WrappedCompenent {...props} />
    </Border>
  );
};

export default withBorder;
