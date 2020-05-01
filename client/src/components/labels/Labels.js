import React, { useContext, useEffect } from "react";

import LabelItem from "./LabelItem";

import LabelContext from "../../context/label/labelContext";

const Labels = ({ searchInput }) => {
  const labelContext = useContext(LabelContext);

  const { labels, getLabels } = labelContext;

  useEffect(() => {
    getLabels();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="label-container">
      <div className="label-header">
        <span>{labels.length} labels</span>
      </div>
      {labels &&
        labels
          .filter(
            label =>
              label.name.includes(searchInput) ||
              label.description.includes(searchInput)
          )
          .map(label => <LabelItem key={label._id} label={label} />)}
    </div>
  );
};

export default Labels;
