import "../style/confirm.css"
import {AiFillCheckCircle} from "react-icons/ai"
import {MdDeleteForever} from "react-icons/md"

export default function Confirm(props) {
const {formArray,setFormArray} = props

const handleCheck = (e)=>{
    setFormArray((prev)=>prev.map((x)=>{
        if(x.message !== e.message ){
            return x
        }else{
            return {
                ...x,
                isChecked : true
            }
        }

    }))
    

}

    const deleteHandler = (e) => setFormArray((p) => p.filter((r) => r.message !== e.message))

    return(
        
        <div className="confirm">
            <table border={'1px solid black'}>
                <tr>
                    <th>Ad Soyad</th>
                    <th  className="confirm-message">Mesajınız</th>
                    <th>Onay/Reddet</th>
                </tr>
                {formArray.filter(m=>!m.isChecked).map((e,i)=>(
                    <tr key={i}>
                    <th>{e.name}</th>
                    <th>{e.message}</th>
                    <th className="icon">
                        <button onClick={()=>handleCheck(e)} className="checked"><AiFillCheckCircle /></button>
                        <button onClick={()=>deleteHandler(e)} className="deleted"><MdDeleteForever /></button>
                    </th>
                </tr>
                ))}
                
            </table>
        </div>
    )
}   