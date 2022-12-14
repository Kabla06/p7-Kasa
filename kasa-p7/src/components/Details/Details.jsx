import './Details.css'

import Tags from '../Tags/Tags'
import Rating from '../Rating/Rating'

import { useParams } from 'react-router-dom'
import logements from '../../datas/logements.json'

export default function Details({ title, host, hostpic, location }) {
   const params = useParams()
   let monLogement = logements.filter((l) => l.id === params.id)[0]


   let idRating = monLogement.rating

   return (
      <div className='gros-container'>
         <div className='title-loc-tags'>
            <h1>{title}</h1>
            <p>{location}</p>
            <Tags />
         </div>
         <div className='host-rating-column'>
            <div className='host-img-row'>
               <p>{host}</p>
               <img src={hostpic} alt='' />
            </div>
            <Rating rate={idRating} />
         </div>
      </div>
   )
}
