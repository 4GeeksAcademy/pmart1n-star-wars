
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/People.css";


export const People = () => {
    const { store, actions } = useContext(Context);
    //hago una llamada a useParams() para poder hacer un get dependiendo del numero del id del personaje llamado
    const params = useParams();

    useEffect(() => {
        actions.getPeople(params.id)

    }, [params.id]);
    return (
        <div className="container my-3">

            {store.selectedCharacterData.length === 0 ?
                <div class="spinner-border  loadingSpinner d-flex justify-content-center text-warning" role="status">
                </div>
                : store.selectedCharacterData.map((ele, index) =>
                    <div className="row">
                        <div className=" col-lg-6 col-md-12 col-sm-12 justify-content-center d-flex">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${ele.url.slice(-3, -1)}.jpg`} className="rounded-circle" alt="..." />

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 infoContainer rounded p-5">

                            <h1 className="text-center">{ele.name}</h1>
                            <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti dolore facilis quas tempora cupiditate
                                accusantium nulla ratione repellendus, et blanditiis error! Aut quam eius provident velit deserunt inventore laborum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam nobis soluta consequuntur, enim qui nesciunt
                                quae, iusto, esse ab fugit natus. Odio modi possimus quos natus commodi nihil eum?</p>
                        </div>

                        <div className="row border-top my-3">
                            <div className="col text-white text-center my-4">
                                <h4>Height</h4>
                                <p>{ele.height}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Gender</h4>
                                <p>{ele.gender}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Hair</h4>
                                <h4>Color</h4>
                                <p>{ele.hair_color}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Skin</h4>
                                <h4>Color</h4>
                                <p>{ele.skin_color}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Eye</h4>
                                <h4>Color</h4>
                                <p>{ele.eye_color}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Birth</h4>
                                <h4>Year</h4>
                                <p>{ele.birth_year}</p>
                            </div>

                            <div className="col text-white text-center my-4">
                                <h4>Mass</h4>
                                <p>{ele.mass} KG</p>
                            </div>
                        </div>

                    </div>


                )}
            <div className="stars"></div>

        </div>

    );
};
