import Select from 'react-select';
import { Flex } from "@chakra-ui/react";
import { useState } from 'react';

interface FiltersProps {
  onSort: (sort: { value: string }) => void;
  onRating: (rating: { value: string }) => void;
  sort: { value: string, label: string };
  rating: { value: string, label: string };
}


const customRatingSelectStyle = {
  option: (_, state) => ({
    textAlign: 'left',
    color: '#ffffff',
    display: state.isSelected ? 'none' : 'block',
    padding: 20,
    fontSize: '12px',
    fontWeight: '400',
    cursor: 'pointer',

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
    cursor: 'pointer',
    
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
    cursor: 'pointer',

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
    cursor: 'pointer',

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
    cursor: 'pointer',
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
  { label: 'Highest price', value: 'asc' },
  { label: 'Lowest price', value: 'desc' },
]

export function Filters(props: FiltersProps) {
  
  return (
    <Flex
      w='312px'
      align="center"
      justify="space-between"
      mt='17px'
    >
      <Select
        instanceId="rating"
        options={optionsRating}
        value={props.rating}
        onChange={(option) => {
          props.onRating(option);
        }}
        styles={customRatingSelectStyle}
        placeholder="Filter by rating"
     />

      <Select
        instanceId="sort"
        options={optionsSort}
        value={props.sort}
        onChange={(option) => {
          props.onSort(option)
        }}
        styles={customSortSelectStyle}
        placeholder="Sort by"
     /> 
    </Flex>
  )
}

