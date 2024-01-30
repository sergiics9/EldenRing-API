import { useState, SyntheticEvent } from 'react';
import {} from './form.style.scss';
export default function Form() {
  const [values, setValues] = useState({
    name: '',
    level: '',
    mind: '',
    vigor: '',
    strength: '',
    classType: 'Human',
    description: '',
  });

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(values);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Form Api</h2>

        <div className="form-group">
          <div className="name-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="description-container larger-input">
          <div className="form-description">
            <div className="description-text">
              <label htmlFor="description">Description:</label>
            </div>
            <input
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="options-container">
          <div className="level-container">
            <div className="level-form">
              <label htmlFor="level">Level:</label>
              <input
                type="text"
                name="level"
                value={values.level}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mind-container">
            <div className="mind-form">
              <label htmlFor="mind">Mind:</label>
              <input
                type="text"
                name="mind"
                id="mind"
                value={values.mind}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="strength-container">
            <div className="strength-form">
              <label htmlFor="strength">Strength:</label>
              <input
                type="text"
                name="strength"
                id="strength"
                value={values.strength}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="vigor-container">
            <div className="vigor-form">
              <label htmlFor="vigor">Vigor:</label>
              <input
                type="text"
                name="vigor"
                id="vigor"
                value={values.vigor}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="button-form">
          <button className="button-container" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
