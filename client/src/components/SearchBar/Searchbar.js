import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    display: flex;
    background-color: var(--background);
    border: none;
    color: var(--text-color);
    text-align: center;
    margin: 0 auto;
    border-bottom: 3px solid #0f4e8f;
    width: 100%;
    padding-bottom: 8px;
  }
`;

const Searchbar = ({ value, onSubmit, onChange, name }) => {
  return (
    <Form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="🔍  Search tags"
        name={name}
      />
    </Form>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};
