import "../style/comment.css"

export default function Comment({formArray,setFormArray}) {

    const notConfirm = (x)=>{
        
        setFormArray((prev)=> prev.map((a)=>{
                if(a.message === x.message){
                    return {...a,isChecked: false}
                }else{
                    return a
                }
            } )
        )
    }

    return(
        <div className="comment">
            <h4>Yorumlar</h4>
            <table>
                <tr>
                    <th>Ad Soyad</th>
                    <th>Mesajınız</th>
                    <th></th>
                </tr>

               
                {formArray.filter(a=>a.isChecked).map((x,i)=>(

<tr key={i}>
<th>{x.name}</th>
<th>{x.message}</th>
<th><button onClick={()=>notConfirm(x)}>Onay Kaldır</button></th>
</tr>

                ))}
            </table>
        </div>
    )
}