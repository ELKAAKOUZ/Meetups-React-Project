import { useRef } from 'react';
import { useHistory } from 'react-router';
import classes from './MeetUpForm.module.css';

const MeetUpForm =(props)=>{
    const history =useHistory();
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const descriptionInputRef=useRef();
    

    const submitFormHandler=(event)=>{
        event.preventDefault();
        const formObject={
            title:titleInputRef.current.value,
            image:imageInputRef.current.value,
            description:descriptionInputRef.current.value
        };
        console.log(formObject);
        props.onFetch(formObject);
        history.replace('/');

    };
    return(
        <form onSubmit={submitFormHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input ref={titleInputRef} type='text' id='title' required/>
            </div>
            <div className={classes.control}>
                <label  htmlFor='image'>Image</label>
                <input ref={imageInputRef} type='url' id='image' required/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea  ref={descriptionInputRef} id='description' rows="4" cols="50" required/>
            </div>
            <div className={classes.actions}>
                <button  type='submit'>Add</button>
            </div>
        </form>
    )
};
export default MeetUpForm;