import React, { useState } from 'react';
import DropdownList from '../../components/molecules/DropdownList/DropdownList';
import Input from '../../components/atoms/Input';
import { Button } from '@storybook/react/demo';

import useDecoratedChangeHandler from '../utils/useDecoratedChangeHandler';

export default {
  title: 'DropdownSimpleList',
  component: DropdownList,
};

export const DropdownWithButton = () => {
  const [elements, setElements] = useState([{ key: 2, name: 'Element 1' }, { key: 4, name: 'Element 2' }, { key: 1, name: 'Element 3' }]);

  const [open, setOpen] = useState(false);

  const handleChange = useDecoratedChangeHandler(DropdownList.displayName, setElements);

  return (
    <div>
      <DropdownList
        elements={elements}
        onSelect={handleChange}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionLabel={(element) => element.name}
        renderInput={(params) => (
          <Button {...params} onClick={() => setOpen(!open)}>
            <span role="img" aria-label="so cool">
              {!open ? 'Show' : 'Hide'}
            </span>
          </Button>
        )}
      />
    </div>
  );
};
