import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        console.log('data',data);
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!pizza) return <p>Error al cargar la pizza.</p>;

  return (
    <div className="container mt-4">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="img-fluid" />
      <p className="mt-3">{pizza.desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Precio: {pizza.price} CLP</strong></p>
      <button className="btn btn-primary" onClick={() => addToCart(pizza)}>
        Añadir al Carrito
      </button>
    </div>
  );
};


export default Pizza;

