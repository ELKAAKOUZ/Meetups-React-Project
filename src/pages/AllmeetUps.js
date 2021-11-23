import {useEffect,useState } from "react";
import MeetUpList from "../components/MeetUp/MeetUpList";


import Card from "../components/UI/Card";


const AllMeetups=()=>{
    
    
    const [meetupsHolder,setMeetupsHolder]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const fetchingMeetups=async ()=>{
        setIsLoading(true);
        const response=await fetch('https://meetups-2b14e-default-rtdb.firebaseio.com/Meetups.json')
        const data =await response.json();
        let dataList=[];
        for(const key in data){
            dataList.push({
                id:key,
                title:data[key].title,
                description:data[key].description,
                image:data[key].image
            });       
            console.log(key)
        }
        setIsLoading(false);
        setMeetupsHolder(dataList);
    };
    useEffect(()=>{
        fetchingMeetups()
    },[]);

    if(isLoading){
        return(
            <Card>
                <h1>loading ...</h1>
            </Card>
        )
    }
    

    return(
        <Card>
            <MeetUpList list={meetupsHolder}/>
        </Card>
    )
};
export default AllMeetups;