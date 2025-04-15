import { useState } from "react";
import Card from "../components/Card";
import { UseGlobalContext } from "../components/Context";

const Buy = () => {
  const { data } = UseGlobalContext();
  const [cat,setCat] = useState('all')

  if (!data) return <div>Yuklanmoqda...</div>;

  const { foods, drinks, sweets } = data.rest_data.data;

  

  console.log(data);
  

  return (
    <div className="buy-page">
      
        <select name="" id="" className="" onChange={(e)=>setCat(e.target.value)} >
          <option value="all">
            Barcha taomlar
          </option>
          <option value="foods">
            Taomlar
          </option>
          <option value="drinks">
            Ichimliklar
          </option>
          <option value="sweets">
            Shirinliklar
          </option>
          
        </select>

        {cat=='all' ? 
        <>
        <section className="category-section">
          <h2 className="category-title">Taomlar</h2>
        <div className="card-container">
          {foods.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2 className="category-title">Ichimliklar</h2>
        <div className="card-container">
          {drinks.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2 className="category-title">Shirinliklar</h2>
        <div className="card-container">
          {sweets.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section> 
      </>
      :
      cat == 'foods' ? <section className="category-section">
      <h2 className="category-title">Taomlar</h2>
    <div className="card-container">
      {foods.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  </section> :
    cat == 'drinks' ?
    <section className="category-section">
        <h2 className="category-title">Ichimliklar</h2>
        <div className="card-container">
          {drinks.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section> :
      cat == 'sweets' ? 
      <section className="category-section">
      <h2 className="category-title">Shirinliklar</h2>
      <div className="card-container">
        {sweets.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section> :
      <div>Yuklanmoqda...</div>
      }

        
    </div>
  );
};

export default Buy;