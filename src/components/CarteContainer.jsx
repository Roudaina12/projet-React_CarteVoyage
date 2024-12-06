import CarteVoyage from "./CarteVoyage";
import '../components/CarteContainer.css';

import canada from '../assets/canada.jpg';
import islande from '../assets/islande.jpg';
import costarica from '../assets/costarica.jpg';
import norvege from '../assets/norvege.jpg';
import suisse from '../assets/suisse.jpg';


const carteVisit=[
   
    {
        title: "Canada",
        desc: "Le Canada est un pays nord-américain situé entre les États-Unis au sud et le cercle polaire au nord. Les principales villes sont Toronto, Vancouver, centre du cinéma de la côte ouest, Montréal et Québec, toutes deux francophones, et Ottawa, la capitale. Le Canada compte, parmi ses vastes étendues sauvages, le parc national de Banff avec ses nombreux lacs situé dans les montagnes Rocheuses. Il abrite également les célèbres et majestueuses chutes du Niagara.",
        img: canada
    },
    {
        title: "Islande",
        desc: "L'Islande est un pays insulaire nordique aux paysages spectaculaires composés de volcans, geysers, sources chaudes et champs de lave. Les parcs nationaux de Vatnajökull et Snæfellsjökull comportent d'immenses glaciers protégés. La plupart des Islandais vivent dans la capitale, Reykjavik, qui est alimentée à l'énergie géothermique. Elle accueille le musée national et le musée des sagas, qui retracent l'histoire viking du pays. ",
        img: islande
    },
    {
        title: "Costa Rica",
        desc: "Le Costa Rica est un pays d'Amérique centrale recouvert d'une forêt tropicale humide et situé entre la mer des Caraïbes et l'océan Pacifique. Bien que sa capitale, San José, abrite des institutions culturelles comme le musée de l'Or précolombien, le Costa Rica est connu pour ses plages, ses volcans et sa biodiversité. Environ un quart de sa superficie est constitué d'une jungle protégée, et d'une flore et d'une faune extrêmement riches. Elle abrite des singes araignées et des quetzals.",
        img:costarica
    },
    {
        title: "Norvége",
        desc: "La Norvège est un pays scandinave comprenant montagnes, glaciers et fjords côtiers profonds. Oslo, la capitale, regorge d'espaces verts et de musées. Des navires vikings du IXe siècle sont exposés au musée des navires vikings d'Oslo. Avec ses maisons colorées en bois, Bergen est le point de départ des croisières pour le spectaculaire Sognefjord. La Norvège est également réputée pour la pêche, la randonnée et le ski, notamment à la station olympique de Lillehammer.",
        img:norvege
    },
    {
        title: "Suisse",
        desc: "La Suisse est un pays montagneux d'Europe centrale abritant de nombreux lacs et villages, ainsi que les hauts sommets des Alpes. Les villes du pays comprennent des quartiers médiévaux et des monuments comme la Zytglogge (tour-clocher) de Berne, la capitale, et le pont en bois de la chapelle de Lucerne. Le pays est également réputé pour ses stations de ski et ses sentiers de randonnée.",
        img: suisse
    },
]
const CarteContainer = () => {

    return (
      <div className='carte_container2'>{
          carteVisit.map(
              (carte,index)=>{
                  return <CarteVoyage key={index} {...carte}/>
                  }
          )
      }
      </div>
    )
  }
  
  export default CarteContainer