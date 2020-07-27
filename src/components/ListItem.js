import React from "react";
import withBorder from '../hoc/withBorder';
import whithAlert from '../hoc/whithAlert';
import {compose} from 'recompose'

const ListItem = (props) => {
  
  let { title, body, alert } = props;

  return (
    <div>
      <h4 onClick={() => alert(title) }>{title}</h4>
      <p>{body}</p>
    </div>
  );
};

const enhance = compose(
  whithAlert,
  withBorder
)

export default enhance(ListItem);
