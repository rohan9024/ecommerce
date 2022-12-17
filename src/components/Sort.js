import React from 'react'

const Sort = (props) => {
    const { data, sorting, sortValue, setSortValue } = props;

    const handleClick = (e) => {
        let user_value = e.target.options[e.target.selectedIndex].value;
        // console.log(user_value);
        setSortValue(user_value);
        // sorting();
    }

    return (
        <div className='flex justify-end p-4'>
            <form action="#">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" onClick={handleClick} className="border border-black p-2 cursor-pointer">
                    <option value="lowest">Price (lowest)</option>
                    <option value="highest">Price (highest)</option>
                    <option value="a-z">Name (a-z)</option>
                    <option value="z-a">Name (z-a)</option>
                </select>
            </form>
        </div>
    )
}

export default Sort