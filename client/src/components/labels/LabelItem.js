import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import NewLabel from "./NewLabel";

import LabelContext from "../../context/label/labelContext";

const LabelItem = ({ label: { name, description, color, _id } }) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const labelContext = useContext(LabelContext);
  const { deleteLabel } = labelContext;
  return (
    <div>
      <div className="label-item">
        {!toggleEdit && (
          <span className="label-name" style={{ backgroundColor: color }}>
            {name}
          </span>
        )}
        {!toggleEdit && <span>{description}</span>}
        <div className="action">
          {!toggleEdit && (
            <>
              <button
                className="label-option"
                onClick={() => setToggleEdit(!toggleEdit)}
              >
                Edit
              </button>
              <span className="button-break"></span>
            </>
          )}
          <button className="label-option" onClick={() => deleteLabel(_id)}>
            Delete
          </button>
        </div>
      </div>
      {toggleEdit && (
        <NewLabel
          toggleEdit={setToggleEdit}
          label={{ name, description, color, _id }}
        />
      )}
    </div>
  );
};

LabelItem.propTypes = {
  label: PropTypes.object.isRequired
};

export default LabelItem;
