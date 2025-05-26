import { useState, useEffect } from "react";
import './card-list.styles.css'
import CardCont from "../card-container/card-cont.component";

const CardList = ({monsters }) => (
    <div className="card-list">
        {monsters.map(monster => 
                {
                    return <CardCont monster={monster}/>;
            })}
            </div>)

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;        
//         return (
//             <div className="card-list">
//                 {monsters.map(monster => 
//                 {
//                     return (<CardCont monster={monster}/>)
//             })}
//             </div>
//         );
//     }
// }

export default CardList;