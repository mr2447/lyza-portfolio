import React, { useState } from 'react'; 


function ContactForm() {
    const [formState, setFormState] = useState({name: '', email:'', message:''});
    const { name, email, message } = formState;

    function handleChange(e) {
        //spread operator used to retain the other key-value pairs in this object, and only assign the value for formState.name
        setFormState({...formState, [e.target.name]: e.target.value})
        //e.target.name is the Name attribute(email, name...), but name is the name attribute with the name value
        console.log("form:", [e.target.name])
    }
  
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
return (
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor ="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email addess:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default ContactForm;