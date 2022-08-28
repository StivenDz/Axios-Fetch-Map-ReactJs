import { useState,useEffect } from "react";
import Card from '../components/Card';
import Loading from "../components/Loading";
import axios from "axios";

const CardList = () => {
    const [favoriteCards,setFavoriteCards] = useState(0);
    
    const api_key = "e40f81b55b1ff2e898eaf34b92f0b2ad";
    const baseUrl = "https://api.themoviedb.org/3/";
    const API = `${baseUrl}discover/movie?sort_by=vote_count.desc&api_key=${api_key}&language=en-US`;
    
    const addToFavorite = () =>{
        setFavoriteCards(favoriteCards + 1);
    }
    const deleteFromFavorite = () =>{
        setFavoriteCards(favoriteCards - 1);
    }

    const [cards,setCards] = useState([]);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         fetch(API)
    //             .then( res => {
    //                 return res.json();
    //             })
    //             .then(resJson =>{
    //                 setCards(resJson.results);
    //             })
    //             .catch(err => console.log('err'))
    //     },4000)
    // },[]);

    useEffect(()=>{
        setTimeout(()=>{
            axios.get(API)
                .then(res => setCards(res.data.results))
                .catch(err => console.log(err.status))
        },4000)
    },[]);

    console.log(cards);

    return ( 
        <>
            <section className="cardList">

                {cards.length > 0 ?
                     cards.map(movie => (
                        <Card key={movie.id} props={movie} />
                ))
                : <Loading/>
                }
            </section>

            <button type="button" onClick={addToFavorite} >add to favorite</button>
            <button type="button" onClick={deleteFromFavorite} >remove from favorite</button>

            <span>{favoriteCards}</span>
        </>
     );
};
export default CardList;