import React from 'react';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';

const App = () => {
  const [colors, setColors] = React.useState(new Values('#f15025').all(10))

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
