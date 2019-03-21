import React from "react";
import Todo from "../Todo";

/**
 * Faire passer un objet Todo et le trier
 */

const List = ({ todos }) => {
    return (
        <div className="List mt-3">
            <ul className="list-group">
                {todos.map((todo, i) => {
                    return <Todo todo={todo} key={i} />;
                })}
            </ul>
        </div>
    );
};

export default List;
