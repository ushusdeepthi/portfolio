import React,{useState} from 'react'

export default function ContactForm() {
    const {formData,setFormData} = useState({
   
    })
    const handleChange= (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
        console.log()
    }
    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name = "name" 
                    id="name"
                    // value={formData.name || ''}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">E mail</label>
                <input 
                    type="email" 
                    autoComplete="email"
                    name = "email" 
                    id="email"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10" 
                    onChange={handleChange}
                    required
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
