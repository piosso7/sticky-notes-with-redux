import React, { useState } from "react";
import { connect } from "react-redux";
import { addSticky, removeSticky } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    stickynotes: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSticky: (obj) => dispatch(addSticky(obj)),
    removeSticky: (id) => dispatch(removeSticky(id)),
  };
};

const StickyNotesAdd = (props) => {
  const [sticky, setSticky] = useState("");
  const handleChange = (e) => {
    setSticky(e.target.value);
  };

  return (
    <div className="stickyNotes">
      <input type="text" onChange={(e) => handleChange(e)} value={sticky} />
      <button
        onClick={() => {
          props.addSticky({
            id: Math.floor(Math.random() * 1000),
            item: sticky,
          });
          setSticky("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StickyNotesAdd);
