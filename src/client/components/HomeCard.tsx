import * as React from 'react';
import { IChirp } from "../utils/types";
import { useHistory } from "react-router-Dom";

const HomeCard: React.FC<HomeCardProps> = props => {

    const history = useHistory();

    return (
        <div className = "col-md-6 mx-1">
            <div 
            onClick={() => history.push(`/details/${props.chird.id}`)}
            className="card my-2 shadow">
                <div className = "card-body text-center">
                    <h4 className = "card-title">{props.chirp.username}</h4>
                    <p className="card-text">{props.chirp.message}</p>
                </div>
            </div>
        </div>
    )
}
interface HomeCardPropls{
    chirp: IChirp;
}

export default HomeCard;