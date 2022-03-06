import React, {useState} from 'react';
import {HeaderComponent} from '../components/ComponentExports';
import LoadingIndicator from '../utils/LoadingIndicator';
const ContactScreen = ()=>{
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [formSubmissionStatus,setformSubmissionStatus] = useState('none');

    const handleFormSubmission = (e)=>{
        e.preventDefault();
        setLoading(true);
        // submit form to backend
        fetch('https://arena-django-backend.herokuapp.com/sendMessage',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    "message_sender_name":name,
                    "message_sender_email":email,
                    "message_sender_mobile_number":mobile,
                    "message_content":message,
                })
            }
        )
        .then((res)=>res.json())
        .then((res)=>{
            setLoading(false);
            setformSubmissionStatus("successful");
        })
        .catch(()=>{
            setLoading(false);
            setformSubmissionStatus("unsuccessful");
        })
        
    }

    return(
        <>
            <HeaderComponent/>
            <div className="container contact-screen-container">
                <div className="contact-form-container">
                    <h1>How can we help you?</h1>
                    <p>For all enquiries, please email us using the form below.</p>
                </div>
                {
                    formSubmissionStatus === "successful"?
                        <div className="alert alert-success" role="alert">
                            Message has been submitted successfully.
                        </div>
                    :
                    formSubmissionStatus === "unsuccessful"?
                        <div className="alert alert-danger" role="alert">
                            Unable to submit message, please try again later.
                        </div>
                    :
                    loading ? 
                        <LoadingIndicator/> 
                    :
                        <form onSubmit={handleFormSubmission}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" value={name} onChange={(val)=>{setName(val.target.value.trim())}} className="form-control" id="name" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile number</label>
                                <input type="tel" className="form-control" value={mobile} onChange={(val)=>{setMobile(val.target.value.trim())}} id="mobile" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" value={email} onChange={(val)=>{setEmail(val.target.value.trim())}} id="email" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5" value={message} onChange={(val)=>{setMessage(val.target.value.trim())}} required></textarea>
                            </div>
                            <button className="btn btn-primary send-message-btn" type="submit">Send message</button>
                        </form>
                }
            </div>
        </>
    )
}

export default ContactScreen;