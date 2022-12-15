import axios from 'axios';
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import Contributor_card from './Contributor_card';

const Contributor_data = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [listOfNames, setListOfNames] = useState(['rohan9024', 'Dibyendu303', 'devika-singh', 'ankushj0801', 'kshitij01042002']);
    // useEffect(() => {
    //     const getData = async (username, repo) => {
    //         try {
    //             const url = "https://api.github.com/repos/" + username + "/" + repo + "/commits";
    //             const response = await axios.get(url);
    //             // console.log(response);
    //             return response.data;
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }

    //     async function getRepoContributors(username, repo) {
    //         setIsLoading(true);
    //         const commits = await getData(username, repo);
    //         // console.log(commits);
    //         var result = [];
    //         var lookup = {};
    //         for (var i = 0; i < commits.length; i++) {
    //             // console.log(commits[i].author.login);
    //             if (commits[i].author) {
    //                 var item = commits[i].author.login;
    //                 var name = item;
    //                 if (!(name in lookup)) {
    //                     lookup[name] = 1;
    //                     result.push(name);
    //                 }
    //             }
    //         }
    //         // console.log(result);
    //         setIsLoading(false);
    //         setListOfNames(result);
    //         return (result);
    //     }
    //     getRepoContributors("rohan9024", "ecommerce");

    // }, [])



    console.log(listOfNames);
    return (
        <div>
            <div className="w-full font-dmsans flex flex-col justify-center items-center my-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row space-x-2 justify-center items-center"
                >
                    <h1 className="text-black text-4xl font-bold">Top contributors</h1>
                </motion.div>
            </div>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10  place-items-center'>
                {listOfNames.map((el, index) => <Contributor_card name={el} key={index} />)}
            </div>
        </div>
    )
}

export default Contributor_data

