import { Component } from "react";
import './card-list.styles.css'
import CardCont from "../card-container/card-cont.component";

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        console.log(monsters)
        
        return (
            <div className="card-list">
                {monsters.map(monster => 
                {
                    return (<CardCont monster={monster}/>)
            })}
            </div>
        );
    }
}

export default CardList;