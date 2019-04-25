import React, { Component } from 'react';

import ShowsService from '../../shows-services';
import './random-show.css';
import Spinner from '../spinner';

export default class RandomShow extends Component {
    
    showsService = new ShowsService();

    constructor() {
        super();
        this.state = {
            show: {},
            loading: true,
        }
        
    }

    componentDidMount() {
        this.updateShows();
        this.interval = setInterval(this.updateShows, 10000)
    }

    onShowLoaded = (show) => {
        this.setState({
            show,
            loading: false,
            error: false
            })
    }
    
    updateShows = () => {
        const idShow = Math.floor(Math.random()*200) + 3
        //Math.floor(Math.random()*345) + 3
        this.showsService
            .getRandomShows(idShow)
            .then(this.onShowLoaded)
            .catch(this.onError)
    };


    render() {
    
        const { show, loading } = this.state;
        const spinner = loading ? <Spinner /> : null
        const content = !loading ? <RandomShowView show={show}/> : null

        

        return(
            <div className="random-show">
                {spinner}
                {content}
            </div>
        )
    }
}

const RandomShowView = (  ) => {
    const { name, dateOfRealese, voteAverage, 
           overview, imgUrl } = show;

    return(
        <div className="random-container">
        <div className="show-image">
        <img src={imgUrl} alt="Poster of show" />
        </div>
            
        <div className="random-show-desc">
            <h4>{name}</h4>
            <ul>
                <li>
                    <span>Date of Realese: <br />
                    {dateOfRealese}</span>
                </li>  
                <li>
                    <span>Vote Average: <br />
                    {voteAverage}</span>
                </li>
                <li>
                    <span>Vote Average: <br />
                    {overview}</span>
                </li>

            </ul>
        </div>
    </div> 
    )
}
