import React, { useReducer } from "react";
import axios from "axios";

import LabelContext from "./labelContext";
import LabelReducer from "./labelReducer";

import {
  ADD_LABEL,
  GET_LABELS,
  UPDATE_LABEL,
  DELETE_LABEL,
  TOGGLE_NEW_LABEL
} from "../types";

const LabelState = props => {
  const initialState = {
    labels: [],
    toggle: false
  };

  const [state, dispatch] = useReducer(LabelReducer, initialState);

  const getLabels = async () => {
    const res = await axios.get("/api/v1/labels/");
    dispatch({ type: GET_LABELS, payload: res.data.labels });
  };

  const addLabel = async ({ name, description, color }) => {
    const res = await axios.post("/api/v1/labels/", {
      name,
      description,
      color
    });
    dispatch({ type: ADD_LABEL, payload: res.data.label });
  };
  const updateLabel = async (id, { name, description, color }) => {
    const res = await axios.patch("/api/v1/labels/" + id, {
      name,
      description,
      color
    });
    dispatch({ type: UPDATE_LABEL, payload: res.data.updatedLabel });
  };
  const deleteLabel = async id => {
    await axios.delete("/api/v1/labels/" + id);
    dispatch({ type: DELETE_LABEL, payload: id });
  };

  const toggleNewLabel = () => dispatch({ type: TOGGLE_NEW_LABEL });

  return (
    <LabelContext.Provider
      value={{
        labels: state.labels,
        toggle: state.toggle,
        getLabels,
        addLabel,
        updateLabel,
        deleteLabel,
        toggleNewLabel
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};

export default LabelState;
