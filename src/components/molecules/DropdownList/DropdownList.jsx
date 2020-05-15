import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import styles from './DropdownList.module.scss';


const propTypes = {
  elements: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  renderInput: PropTypes.func.isRequired,
};


export default function DropdownList(
  { isLoading,
    noOptionsText = "no results",
    elements,
    open,
    onOpen,
    onClose,
    getOptionLabel,
    renderInput,
    hasClearIcon,
    openOnFocus,
    loadingText = "loading...",
    onSelect,
  }) {

  const [showList, setShowList] = useState(open);

  const renderOption = (option, index) => (
    <li className={styles['element-dropdown']} key={index}>{getOptionLabel(option)}</li>
  )

  useEffect(() => {
    setShowList(open)
  }, [onOpen])

  useEffect(() => {
    setShowList(open)
  }, [onClose])


  return (
    <>
      {/* can be a button or input or anything */}
      {renderInput({ onClick: onOpen, onFocus: onOpen })}
      <div className={styles['wrapper-contatiner']}>
        <ul className={showList ? styles['container-dropdown'] : ""}>
          {isLoading
            && (<div>{loadingText}</div>)}
          {showList && (
            elements.map((element, index) => (
              renderOption(element, index)
            )))
          }
        </ul>
      </div>
    </>
  );
}

DropdownList.propTypes = propTypes;
