import MeetUpItem from './MeetUpItem'
const MeetUpList=props=>{
    return(
        <ul>
            {props.list.map(meetaya=>{
                return(
                <MeetUpItem key={meetaya.id} id={meetaya.id} title={meetaya.title} image={meetaya.image} description={meetaya.description}/>
                )
            })}
        </ul>
    )
};
export default MeetUpList;