import react, {useState} from "react"
import './CarteVoyage.css'

const CarteVoyage = ({desc, title, img, maxpargraphe=90}) => {
  
  const [showMore, setShowMOre]= useState(true);
  const toggleShowMore= () =>{
    setShowMOre(!showMore);
  };
desc = showMore ? desc.substring(0, maxpargraphe): desc; if(desc.length == maxpargraphe) desc +="...";
  return (
    <div className='carte_cont'>
        <img src ={img} alt ="image" className='carte_image'/>
        <h4> {title}</h4>
        <p className='carte_voy'>{desc}</p>

        <button onClick={toggleShowMore} className='boutton'>{showMore ? 'ShowMore': 'ShowLess'}</button>
    </div>
  )
}

export default CarteVoyage