import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ControlledPassword({ stateValue, stateDispatch, formLabel, formHelper, formPlaceholder }) {
  return (
    <FormControl isRequired>
      <FormLabel display="inline" margin="auto">{formLabel}</FormLabel>
      <Input
        type="password"
        autoComplete="off"
        placeholder={formPlaceholder}
        value={stateValue}
        onChange={({ currentTarget: { value } }) => stateDispatch(value)}
        focusBorderColor="green.500"
        size="lg"
      />
    </FormControl>
  );
}

ControlledPassword.propTypes = {
  stateValue: PropTypes.string.isRequired,
  stateDispatch: PropTypes.func.isRequired,
  formLabel: PropTypes.string.isRequired,
  formPlaceholder: PropTypes.string.isRequired,
};

export default ControlledPassword;
