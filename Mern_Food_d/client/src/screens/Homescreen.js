import React from "react";
import pizzas from "../pizzaData";
import Pizza from "../components/Pizza";


export default function Homescreen(){
    return (
        <div>
            <div className="row"/*for row*/>
                {pizzas.map(pizza=>{
                    return <div className="col-md-4"/* for coloumn*/>
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}