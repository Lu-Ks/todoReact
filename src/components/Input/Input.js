import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, handlerChange }) => {
    return (
        <div className="Input">
            <input
                type="text"
                placeholder="Nouvelle tâche ?"
                value={value}
                onChange={handlerChange}
            />
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    handlerChange: PropTypes.func.isRequired
};

export default Input;
