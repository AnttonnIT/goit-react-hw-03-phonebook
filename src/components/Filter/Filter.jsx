import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  const filterInputId = nanoid();
  return (
    <>
      <StyledLabel>
        Find contacts by name
        <input
          type="text"
          id={filterInputId}
          onChange={onChange}
          value={filter}
        ></input>
      </StyledLabel>
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
