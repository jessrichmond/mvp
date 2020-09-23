import React from 'react';

function Entry(props) {
  const { haikus } = props;
  const entries = haikus.map((entry) => <div>{entry.message}</div>);
  return (
    <div>{entries}</div>
  );
}

export default Entry;
