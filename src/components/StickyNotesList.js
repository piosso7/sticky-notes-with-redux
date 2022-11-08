import React from "react";
import { connect } from "react-redux";
import { removeSticky } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    stickynotes: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeSticky: (id) => dispatch(removeSticky(id)),
  };
};

const StickyNotesList = (props) => {
  return (
    <div className="stickyNotes">
      <div>
        {props.stickynotes.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.item}</p>
              <button onClick={() => props.removeSticky(item.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StickyNotesList);
