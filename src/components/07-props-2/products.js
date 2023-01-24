import React from "react";
import ProductCard from "./product-card";

const Products = () => {
  return (
    <div>
      <ProductCard name="Ali">
        <h2>Sony Display</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem officia corporis sequi! Assumenda dolore ullam saepe
          neque aliquam, a et blanditiis maxime, iusto eius eos corporis
          provident dolores esse natus?
        </p>
      </ProductCard>
      <ProductCard>
        <h2>Intel Processor</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem officia corporis sequi! Assumenda dolore ullam saepe
          neque aliquam, a et blanditiis maxime, iusto eius eos corporis
          provident dolores esse natus?
        </p>
      </ProductCard>
    </div>
  );
};

export default Products;
