import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Contributor_card = (props) => {

    const [data, setData] = useState({ 'name': "loading", 'html_url': "loading", 'location': "loading", 'avatar_url': "loading", 'bio': "loading" });
    useEffect(() => {
        const getData = async (username) => {
            try {
                const url = "https://api.github.com/users/" + username;
                const response = await axios.get(url);
                console.log(response.data);
                setData(response.data);
                return response.data;
            } catch (err) {
                console.log(err);
            }
        }
        getData(props.name);

    }, [])
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-80 flex flex-col justify-center items-center p-6 transition hover:scale-105 hover:ease-in-out hover:duration-500">
            <div className='rounded-full w-64 h-64 overflow-hidden'>
                <img className=" w-72 h-64 object-cover"
                    src={data.avatar_url ? data.avatar_url : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                    alt="Profile Image" />
            </div>
            <div className="text-center">
                <p className="mt-2 text-2xl font-semibold">{data.name ? data.name : data.login}</p>
                <p className="mt-1 mb-2 text-gray-400">{data.location ? data.location : "India"}</p>
                <p className="mb-5 text-center text-gray-600">{data.bio ? data.bio : "Github user"}</p>
                <div className="grid place-items-center">
                    <a href={data.html_url ? data.html_url : "https://github.com/"}>
                        <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contributor_card