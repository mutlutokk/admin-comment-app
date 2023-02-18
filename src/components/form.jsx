import { useEffect } from "react"
import "../style/form.css"

export default function Form({formData, setFormData, formArray, setFormArray}) {

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})

    }

    useEffect(()=>{
        console.log(formArray)
    },[formArray])

    const handleClick = (e) =>{
        
        setFormArray(prevList => [...prevList, formData])
        setFormData(
           { name: "",
            mail: "",
            message: "",}
       )
    }

    return(
        <div className="form">
            <div className="form-content">
                <div className="form-content-item">
                     <label>Adınız Soyadınız</label>
                     <input onChange={handleChange} name="name" value={formData.name} type="text" />
                 </div>
                 <div className="form-content-item">
                     <label>Email</label>
                     <input onChange={handleChange} name="mail" value={formData.mail}  type="text" />
                 </div>
                <div className="form-content-item">
                    <label>Mesajınız</label>
                    <textarea onChange={handleChange} name="message" value={formData.message} />
                </div>
            </div>
            <div><button className="form-button" type="button" onClick={handleClick}>Gönder</button></div>
        </div>
    )
}