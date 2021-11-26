import Select from 'react-select';
import { Flex } from "@chakra-ui/react";
import { useState } from 'react';


const customRatingSelectStyle = {
  option: (_, state) => ({
    textAlign: 'left',
    color: '#ffffff',
    display: state.isSelected ? 'none' : 'block',
    padding: 20,
    fontSize: '12px',
    fontWeight: '400',

    backgroundColor: state.isFocused ? 'transparent' : 'transparent',
    "&:hover": {
      borderColor: "transparent"
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '1.33',

    border: '0',
    borderColor: 'transparent'
  }),
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    alginItems: 'center',
    width: '165px',

    backgroundColor: state.isFocused ? '#230F5B' : '#230F5B',
    border: '0',

    borderRadius: '10px 10px 10px 10px',
    
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: '400',
  }),
  singleValue: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1.33',

    border: '0',
    borderColor: 'transparent'
    
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#ffffff',
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: '-10px',
    padding: '10px 0 0 0',
    borderRadius: '0 0 10px 10px',
    zIndex: 2,
    
    boxShadow: 'none',
    backgroundColor: state.isFocused ? '#230F5B' : '#230F5B',
  }),
} as any;

const customSortSelectStyle = {
  option: (_, state) => ({
    textAlign: 'left',
    color: '#ffffff',
    display: state.isSelected ? 'none' : 'block',
    padding: 20,
    fontSize: '12px',
    fontWeight: '400',

    backgroundColor: state.isFocused ? 'transparent' : 'transparent',
    "&:hover": {
      borderColor: "transparent"
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '1.33',

    border: '0',
    borderColor: 'transparent'
  }),
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    alginItems: 'center',
    width: '117px',

    backgroundColor: state.isFocused ? '#230F5B' : '#230F5B',
    border: '0',

    borderRadius: '10px 10px 10px 10px',
    
    textAlign: 'left',
    fontSize: '18px', 
    fontWeight: '400',
  }),
  singleValue: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1.33',

    border: '0',
    borderColor: 'transparent'
    
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#ffffff',
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: '-10px',
    padding: '10px 0 0 0',
    borderRadius: '0 0 10px 10px',
    zIndex: 2,
    
    boxShadow: 'none',
    backgroundColor: state.isFocused ? '#230F5B' : '#230F5B',
  }),
} as any;

const optionsRating = [
  { label: '1 star', value: '1' },
  { label: '+ 2 stars', value: '2' },
  { label: '+ 3 stars', value: '3' },
  { label: '+ 4 stars', value: '4' },
  { label: '5 stars', value: '5' },
]
const optionsSort = [
  { label: 'Highest price', value: 'highest' },
  { label: 'Lowest price', value: 'lowest' },
]

export function Filters() {
  const [ selectedOption1, setSelectedOption1] = useState(null);
  const [ selectedOption2, setSelectedOption2] = useState(null);

  return (
    <Flex
      w='312px'
      align="center"
      justify="space-between"
      mt='17px'
    >
      <Select
       options={optionsRating}
       value={selectedOption1}
       onChange={(option) => {
         setSelectedOption1(option);
       }}
       styles={customRatingSelectStyle}
       placeholder="Filter by rating"
     />

      <Select
       options={optionsSort}
       value={selectedOption2}
       onChange={(option) => {
         setSelectedOption2(option);
       }}
       styles={customSortSelectStyle}
       placeholder="Sort by"
     /> 
    </Flex>
  )
}

