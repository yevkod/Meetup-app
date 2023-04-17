import React, { useRef } from 'react';
import s from './NewMeetupForm.module.css';
import Card from "../ui/Card";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const newMeetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(newMeetupData);
    }

    return (
        <Card>
            <form className={s.form} onSubmit={submitHandler}>
                <div className={s.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={s.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={s.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>
                <div className={s.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        type='text'
                        required
                        id='description'
                        row='5'
                        ref={descriptionInputRef}
                    />
                </div>
                <div className={s.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
