import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ControlledTextarea({ stateValue, stateDispatch, formLabel, formHelper, formPlaceholder }) {
  return (
    <FormControl isRequired>
      <FormLabel>{formLabel}</FormLabel>
      <Textarea
        id="description"
        autoComplete="off"
        placeholder={formPlaceholder}
        value={stateValue}
        onChange={({ currentTarget: { value } }) => stateDispatch(value)}
        focusBorderColor="green.500"
        size="lg"
        isRequired
      />

    </FormControl>
  );
}

ControlledTextarea.propTypes = {
  stateValue: PropTypes.string.isRequired,
  stateDispatch: PropTypes.func.isRequired,
  formLabel: PropTypes.string.isRequired,
  formPlaceholder: PropTypes.string.isRequired,
};

export default ControlledTextarea;
