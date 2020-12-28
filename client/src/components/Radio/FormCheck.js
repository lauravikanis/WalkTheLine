import { useState } from "react";
import Radio from "./Input";

const Form = () => {
  const [checked, setChecked] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.value);
  };

  return (
    <>
      <div className="form-check">
        <label>
          <Radio
            value="option1"
            checked={checked === "option1"}
            onChange={handleChange}
            className="form-check-input"
          />
          Option 1
        </label>
      </div>
      <div className="form-check">
        <label>
          <Radio
            value="option2"
            checked={checked === "option2"}
            onChange={handleChange}
            className="form-check-input"
          />
          Option 2
        </label>
      </div>
      <div className="form-check">
        <label>
          <Radio
            value="option3"
            checked={checked === "option3"}
            onChange={handleChange}
            className="form-check-input"
          />
          Option 3
        </label>
      </div>
    </>
  );
};

export default Form;
