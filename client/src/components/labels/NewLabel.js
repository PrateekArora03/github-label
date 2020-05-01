import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import LabelContext from "../../context/label/labelContext";

const NewLabel = ({ toggleEdit, label }) => {
  const colors = [
    "#bfdadc",
    "#cc0000",
    "#acacac",
    "#9fc8ea",
    "#f4b4a4",
    "#10c947",
    "#0989bc",
    "#eaf47c"
  ];

  const [name, setName] = useState(label ? label.name : "");

  const [description, setDescription] = useState(
    label ? label.description : ""
  );
  const [colorIndex, setColorIndex] = useState(0);

  const [color, setColor] = useState(label ? label.color : colors[colorIndex]);

  const labelContext = useContext(LabelContext);

  const { addLabel, toggleNewLabel, updateLabel } = labelContext;

  const handleCancel = () => {
    setName("");
    setDescription("");
    setColor("#bfdadc");
    toggleNewLabel();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!label) {
      addLabel({ name, description, color });
      handleCancel();
    } else {
      updateLabel(label._id, { name, description, color });
      toggleEdit(false);
    }
  };

  return (
    <div className="form-container">
      <div className="label-item">
        <span className="label-name" style={{ backgroundColor: color }}>
          {name ? name : "Label preview"}
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label htmlFor="label-name">Label name</label>
          <input
            id="label-name"
            placeholder="Label name"
            onChange={({ target: { value } }) => {
              setName(value);
            }}
            value={name}
            required
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            placeholder="Description"
            onChange={({ target: { value } }) => {
              setDescription(value);
            }}
            value={description}
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="color">Color</label>
          <div>
            <button
              type="button"
              style={{ backgroundColor: color }}
              onClick={() => {
                setColorIndex(colorIndex < colors.length ? colorIndex + 1 : 0);
                setColor(colors[colorIndex]);
              }}
              className="pick-random-color"
            >
              <svg
                className="octicon octicon-sync js-new-label-color-icon text-gray-dark"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.24 7.4a4.15 4.15 0 01-1.2 3.6 4.346 4.346 0 01-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 001.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 015.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 012.96 5z"
                ></path>
              </svg>
            </button>
            <input
              id="color"
              value={color}
              onChange={({ target: { value } }) => {
                setColor(value);
              }}
              type="text"
              maxLength="7"
              placeholder="Color"
              required
            />
          </div>
        </div>
        <div className="form-button-container">
          <button
            type="button"
            onClick={label ? () => toggleEdit(false) : handleCancel}
          >
            Cancel
          </button>
          <button type="submit">
            {label ? "Save changes" : "Create label"}
          </button>
        </div>
      </form>
    </div>
  );
};

NewLabel.propTypes = {
  toggleEdit: PropTypes.func,
  label: PropTypes.object
};

export default NewLabel;
