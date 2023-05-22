import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export default function Description() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchDescription(store.item);
    },[])
  return (
    <div className="description-container">
        {store.descritpion.age ? (
            <div className="detail-container">
                <h1 className="name">{store.description.name}</h1>
                <h3 className="description">
                    Nationality: {store.description.nationality}
                </h3>
                <h3 className="description">
                    Hair Color: {store.description.hair_color}
                </h3>
                <h3 className="description">
                    Eye Color: {store.description.eye_color}
                </h3>
                <h3 className="description">
                    Age: {store.description.age}
                </h3>
                <h3 className="description">
                    Notable Traits: {store.description.notable_traits}
                </h3>
            </div>
        ): store.description.nation_relation_sub ? (
            <div className="detail-container">
            <h1 className="name">{store.description.name}</h1>
            <h3 className="description">
                Nationality: {store.description.nation_relation}
            </h3>
            <h3 className="description">
                Bending Subset: {store.description.nation_relation_sub}
            </h3>
            <h3 className="description">
                Notable Benders: {store.description.notable_benders}
            </h3>
        </div>
        ) : store.description.leader ? (
            <div className="detail-container">
            <h1 className="name">{store.description.name}</h1>
            <h3 className="description">
                Nation: {store.description.nationa}
            </h3>
            <h3 className="description">
                Leader: {store.description.leader}
            </h3>
            <h3 className="description">
                Description: {store.description.description}
            </h3>
        </div>
        ) : store.description.species ? (
            <div className="detail-container">
            <h1 className="name">{store.description.name}</h1>
            <h3 className="description">
                Species: {store.description.species}
            </h3>
            <h3 className="description">
                Description: {store.description.description}
            </h3>
        </div>
        ) : store.description.age_at_death ? (
            <div className="detail-container">
            <h1 className="name">{store.description.name}</h1>
            <h3 className="description">
                Nationality: {store.description.nationality}
            </h3>
            <h3 className="description">
                Hair Color: {store.description.hair_color}
            </h3>
            <h3 className="description">
                Eye Color: {store.description.eye_color}
            </h3>
            <h3 className="description">
                Age at Death: {store.description.age_at_death}
            </h3>
            <h3 className="description">
                Notable Traits: {store.description.notable_traits}
            </h3>
        </div>
        )
         :null}
    </div>
  )
}
