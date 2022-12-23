import axios from 'axios';
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import Contributor_card from './Contributor_card';

const Contributor_data = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const [listOfNames, setListOfNames] = useState(['rohan9024', 'Dibyendu303', 'devika-singh', 'ankushj0801', 'kshitij01042002']);

    const [contributorInfo, setContributorInfo] = useState([])
    
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



    // console.log(listOfNames);
    
    const fetchContributorInfo = async(owner, repo)=>{
        try {
            const base_url = 'https://api.github.com/repos'
            const result = await axios.get(
                `${base_url}/${owner}/${repo}/stats/contributors`)
                
            let contributors_data = [];

            for(let i=result.data.length-1; i>=0; i--){
                //CONTRUBUTION DATA OF A AUTHOR
                let _author = result.data[i]

                // DONT ADD OWNER IN CONTRIBUTOR LIST
                if(_author.author.login===owner){
                    continue;
                }

                //CALCULATE TOTAL ADDITION
                const calculate_TA = ()=>{
                    let TA = 0
                    _author.weeks.forEach((week)=>{
                        TA+=week.a
                    })
                    return TA
                }
                //CALCULATE TOTAL DELETION
                const calculate_TD = ()=>{
                    let DA = 0
                    _author.weeks.forEach((week)=>{
                        DA+=week.d
                    })
                    return DA
                }
                contributors_data.push(
                    {
                        //TOTAL COMMITS
                        commits: _author.total,
                        //TOTAL ADDITION
                        TA: calculate_TA(),
                        //TOTAL DELETION
                        TD: calculate_TD(),
                        username: _author.author.login,
                        
                    }
                )
            }

            return contributors_data

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        (async function func() {
            const owner = "rohan9024"
            const repo = "ecommerce"
            let contributors_data =
                await fetchContributorInfo(owner, repo)

            setContributorInfo(contributors_data)
            // console.log(contributors_data)
          })();
    },[])
    
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
                {/* {listOfNames.map((el, index) => <Contributor_card name={el} key={index} />)} */}
                {
                    contributorInfo.map((_author, idx)=>
                        <Contributor_card
                            key = {idx}
                            _author = {_author}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Contributor_data

