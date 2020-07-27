import React from "react";
import withBorder from '../hoc/withBorder';
import withAlert from '../hoc/withAlert';
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
  withAlert,
  withBorder
)

export default enhance(ListItem);
