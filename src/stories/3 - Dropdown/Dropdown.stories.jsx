import React, { useState } from 'react';
import Dropdown from '../../components/molecules/Dropdown';

import useDecoratedChangeHandler from '../utils/useDecoratedChangeHandler';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const DropdownList = () => {
  const [elements, setElements] = useState([{ key: 2, value: 'Element 1' }, { key: 4, value: 'Element 2' }, { key: 1, value: 'Element 3' }]);


  const handleChange = useDecoratedChangeHandler(Dropdown.displayName, setElements);

  return (
    <div>
      <Dropdown
        elements={elements}
        onSelect={handleChange}
      />
    </div>
  );
};
