import { Fragment } from "react";
import MeetUpForm from "../components/MeetUp/MeetUpForm";
import Card from "../components/UI/Card";

const AddNewMeetup=()=>{

    async function fetchFormData(formData){
        const response=await fetch('https://meetups-2b14e-default-rtdb.firebaseio.com/Meetups.json',{
            method:'POST',
            body:JSON.stringify(formData) ,
            content:{
                'Content-Type':'application/json'
            }
        });
        const data=await response.json();
        console.log(data);
    };

    return(
        <Card>
          <p>AddNewMeetup</p>
           <MeetUpForm onFetch={fetchFormData}/>
        </Card>
    )
};
export default AddNewMeetup;