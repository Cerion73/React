import { useEffect, useState } from "react";
import './card-cont.styles.css'


const CardCont = ({monster}) => {
    const {id, email, name} = monster;
    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2`}
            alt={`monster${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>);
    }
// class CardCont extends Component {
    
//     render() {
//         const {id, email, name} = this.props.monster;
//         return (
//             <div className="card-container" key={id}>
//                 <img src={`https://robohash.org/${id}?set=set2`}
//                 alt={`monster${name}`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default CardCont;