import styled from "styled-components";
import Input from "../Input/Input";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Searchbar = ({ value, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="🕵️‍♀️ Was willst du suchen?"
      />
    </Form>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};
