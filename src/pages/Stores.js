import React, { useState } from "react";
import './Stores.css';
import Select from "react-select";

const citylist = [
    { value: "chandigarh", label: "Chandigarh" },
];
const storelist = [
    { value: "Plot No-121, Sector-5, Chandigarh", label: "Sector-5" },
];

function Stores() {
    const [selectedStore, setselectedStore] = useState(null);
    const [selectedCity, setselectedCity] = useState(null);

    function DisplayStoreList() {
        if (selectedCity) {
            return (
                <>
                    <Select
                        className="placeholder:text-gray-800 px-5 py-1 w-80 store-dropdown stores-h2"
                        options={storelist}
                        isClearable={true}
                        name="store-select"
                        defaultValue={selectedStore}
                        onChange={setselectedStore}
                        placeholder="Select a Store"
                        required
                    />
                </>
            )
        }
    }
    function DisplayStore(){
        if(selectedStore){
            return(<>
            <div className="store-address">
            The address of store is: {selectedStore.value}
            </div>
            </>)
        }
    }
    return (<>
        <div className='stores-h1'>Find a Store Near You</div>
        <Select
            className="placeholder:text-gray-800 px-5 py-1 w-80 store-dropdown stores-h2"
            options={citylist}
            isClearable={true}
            name="city-select"
            defaultValue={selectedCity}
            onChange={setselectedCity}
            placeholder="Enter your City"
            required
        />
        <DisplayStoreList />
        <DisplayStore />
    </>
    )
}

export default Stores