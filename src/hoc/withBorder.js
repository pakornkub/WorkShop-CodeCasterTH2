import React from "react";
import styled from "styled-components";

const Border = styled.div`
  border: 2px solid red;
`;

const withBorder = (WrappedComponent) => (props) => {
  return (
    <Border>
      <WrappedComponent {...props} />
    </Border>
  );
};

export default withBorder;
