import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function ControlledSingleFile({ stateDispatch, formLabel, formHelper, isRequired }) {
  return (
    <FormControl isRequired>
      <FormLabel>{formLabel}</FormLabel>
      <input
        type="file"
        onChange={({ currentTarget: { files } }) => stateDispatch(files[0])}
        required={!!isRequired}
      />

    </FormControl>
  );
}

ControlledSingleFile.propTypes = {
  stateDispatch: PropTypes.func.isRequired,
  formLabel: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

export default ControlledSingleFile;
