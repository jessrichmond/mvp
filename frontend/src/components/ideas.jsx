import React from 'react';

function Ideas(props) {
  const { options } = props;
  const ideas = options.map((idea) => <div>{idea.word}</div>);

  return (
    <div>{ideas}</div>
  );
}

export default Ideas;
