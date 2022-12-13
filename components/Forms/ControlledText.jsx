import { FormControl, FormLabel, Input, Spacer } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ControlledText({ stateValue, stateDispatch, formLabel, formHelper, formPlaceholder }) {
  return (
    <FormControl isRequired >
      <FormLabel display="inline">{formLabel}</FormLabel>
      <Input
        autoComplete="off"
        placeholder={formPlaceholder}
        value={stateValue}
        onChange={({ currentTarget: { value } }) => stateDispatch(value)}
        focusBorderColor="green.500"
        size="lg"
        errorBorderColor='crimson'
      />
    </FormControl>
  );
}

ControlledText.propTypes = {
  stateValue: PropTypes.string.isRequired,
  stateDispatch: PropTypes.func.isRequired,
  formLabel: PropTypes.string.isRequired,
  formPlaceholder: PropTypes.string.isRequired,
};

export default ControlledText;
