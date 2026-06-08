import "../Beranda/css/HoverCard.css"
import imgListBar from"../assets/beranda/listbar.png"
import imgCentang from"../assets/beranda/centang.png"
import imgPlay from"../assets/beranda/Vector.png"





export default function HoverFilm({setisEdit,film,id,setDaftar,Daftar}){



console.table(Daftar)


  

function HandleClick() {
   
  const sudahAda = Daftar.some((item) => item.id === id);

  if (sudahAda) {
    setDaftar((draft) => {
      const index = draft.findIndex((item) => item.id === id);

      if (index !== -1) {
        draft.splice(index, 1);
      }
    });
  } else {alert(`data tersimpan ${Daftar}`)
  console.table(`ini adalah ${Daftar}`)
    setDaftar((draft) => {
      draft.push({
        id:id,
        film:film,
      });
    });
  }
}


    return(
        
<div className="hover-film" onMouseLeave={()=>{setisEdit(false)}}>
   <div className="imghover">
     <img  src={film} alt="" />
   </div>
  
   
 
    <BoxButton HandleClick={HandleClick} />
</div>

    )
}


function BoxButton({HandleClick}){

  
    return(
<>

<div className="button-box">



<div className="list-button">
<div>
<img src={imgPlay} alt="" />
</div>

<div>

<img onClick={HandleClick} src={imgCentang} alt="" />
</div>
<div>
<img src={imgListBar} alt="" />
</div>
</div> </div>

<div className="keterangan">
    <div>
        <p>13+</p>
    </div>

    <div>
        <p>movie</p>
    </div>
    

</div>
  
</>
  

    )


}



