import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FlipMove from "react-flip-move";


const Listitems = (props) => {
    const items = props.items;
    const listItems = items.map((item) => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => props.editItem(e.target.value, item.key)}/>
            <span>
                <Button variant="contained" onClick={() => props.deleteItem(item.key)}><DeleteIcon /></Button>
            </span>
            </p>
        </div>
    })
    return (
        <>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}

            </FlipMove>
        </>
    )
}

export default Listitems;