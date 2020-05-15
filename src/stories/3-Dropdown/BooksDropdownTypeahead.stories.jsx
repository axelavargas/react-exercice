import React, { useState, useEffect } from 'react';
import DropdownList from '../../components/molecules/DropdownList/DropdownList';
import searchBooks from '../utils/searchBooks';
import Input from '../../components/atoms/Input';

import useDecoratedChangeHandler from '../utils/useDecoratedChangeHandler';

export default {
    title: 'BooksDropdownTypeahead',
    component: DropdownList,
};

export const BooksDropdownTypeahead = () => {
    const [elements, setElements] = useState([]);
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (value) => {
        const currentVal = value.currentTarget.value;
        setInputValue(currentVal);
    };


    useEffect(() => {
        if (inputValue?.length > 2) {
            setIsLoading(true);
            searchBooks(inputValue).then((books) => {
                setElements(books);
                setIsLoading(false);
            });
        }

        return () => {
            setIsLoading(false);
            setElements([]);
        }
    }, [inputValue])




    const handleChange = useDecoratedChangeHandler(DropdownList.displayName, setElements);

    return (
        <div>
            <DropdownList
                elements={elements}
                onSelect={handleChange}
                getOptionLabel={(element) => element.title}
                open={open}
                hasClearIcon={true}
                isLoading={isLoading}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                renderInput={(params) => (
                    <Input {...params} value={inputValue} onChange={handleInputChange} />
                )}
            />
        </div>
    );
};


