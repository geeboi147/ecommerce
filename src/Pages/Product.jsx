import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';


 const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {ProductId}=useParams();
  const Product = all_product.find((e)=> e.id === Number(ProductId))
  return (
    <div>
      <Breadcrum Product={Product}/>
      <ProductDisplay Product={Product}/>
      <DescriptionBox/>
     
    </div>
  )
}

export default Product