import React from "react";
import { Link } from "react-router-dom";


const CardPizza = ({ id, name, price, ingredients, img, addToCart }) => (
  <div className="card" style={{ width: "18rem", margin: "1rem" }}>
    <img src={img} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        <strong>Ingredientes:</strong> {ingredients.join(", ")}
      </p>
      <p className="card-text">
        <strong>Precio:</strong> ${price.toLocaleString("es-CL")}
      </p>
      <div className="d-flex justify-content-start">
        <Link to={`/pizza/${id}`} className="btn btn-light btn-sm me-3">
          Ver más
        </Link>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => addToCart({ id, name, price, img })}
        >
          Añadir 🛒
        </button>
      </div>
    </div>
  </div>
);

export default CardPizza;
