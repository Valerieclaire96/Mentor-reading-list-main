import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export default function AvatarCard() {
    const [avatars, setAvatars] = useState([])
    const [liked, setLiked] = useState(false);
    const { store, actions } = useContext(Context);




    console.log(avatars)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(process.env.BACKEND_URL + "/api/previous_avatars");
            const data = await res.json();
            setAvatars(data);
            actions.setItem(data)
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (
            store.favorites.find((x) => {
                for (let i in x) {
                    if (avatars[i] && avatars[i].name === x[i].name) {
                        return true;
                    }
                }
            })
        ) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [store.favorites]);

    // const learnMoreDescription = () => {
    //     history(`/avatar_description/${avatars.id}`);
    // };

    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto" >

            {avatars.length ? avatars.map((avatar, index) => (
                <div className="card col-1" style={{ width: "30rem" }}>
                    {console.log(avatar.name, "HERE")}
                    <img src={avatar.photo} style={{ height: "15rem" }} className="card-img-top" />
                    <div className="card-body d-flex justify-content-between">
                        <div className="bard-body-left">
                            <h3 className="card-title">
                                {avatar.name}
                            </h3>
                            <h5 className="card-title">
                                {avatar.nation}
                            </h5>
                        </div>
                        <div className="cardBottom">
                            <Link
                                to={`/avatar_description/` + avatar.id}
                                className="btn btn-outline-primary btn-outline-starwars-1"
                            >
                                Learn More!
                            </Link>
                            <button
                                onClick={() => {
                                    actions.addFavorite(avatar);
                                }}
                                className="favorites-button"
                            >
                                ❤️️
                            </button>
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    )
}