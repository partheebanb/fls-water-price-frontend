import React, { useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';

import './SearchInputs.css';

import DropdownInputSearchForm from './DropdownInputSearchForm';

import { SEARCH_FORM_FIELDS as FIELDS } from '../../../constants/form_constants';

const RegionsInputSearchForm = ({ label, name, regions, ...props}) => {
  const [field, meta] = useField(props);
  const {values: { COUNTRY }} = useFormikContext();

  const [currentRegions, setCurrentRegions] = useState([]);

  useEffect(() => {
    setCurrentRegions(regions[COUNTRY])
  }, [regions, COUNTRY, setCurrentRegions]);

  return (
    <DropdownInputSearchForm label={label} name={name}>
      <option value=''>Select ...</option>
      {
        currentRegions && currentRegions.map(region => <option value={region.name}>{region.name}</option>)
      }
    </DropdownInputSearchForm>
  );
};

export default RegionsInputSearchForm;