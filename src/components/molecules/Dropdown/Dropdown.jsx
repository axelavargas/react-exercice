import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';

import styles from './Dropdown.module.scss';


const propTypes = {
  elements: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};


export default function Dropdown({ elements, onSelect }) {
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    const currentVal = value.currentTarget.value;
    setInputValue(currentVal);
    if (currentVal) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  };
  return (
    <>
      <button type="button" onClick={() => setShowList(!showList)}>
        {!showList ? 'Show' : 'Hide'}
      </button>

      <Input
        value={inputValue}
        onChange={handleInputChange}
      />

      <div className={styles['container-dropdown']}>
        { showList ? (
          elements.map((el) => (
            <a key={el.key} className={styles['element-dropdown']} onClick={onSelect} href="/">{el.value}</a>
          ))) : null}
      </div>
    </>
  );
}

Dropdown.propTypes = propTypes;
