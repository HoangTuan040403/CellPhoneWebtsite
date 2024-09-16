
import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperFlash, WrapperProduct, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { Image, Row } from 'antd';
import imagesale from '../../assets/images/sale.jpg'
import { FireTwoTone } from '@ant-design/icons';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import ProductSlider from '../../components/CardSliderComponent/CardSliderComponent';

const HomePage = () => {
  const arr = ['Iphone', 'SamSung', 'Xiaomi', 'Oppo'];
  return (
    <>

      <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '100%', width: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginTop:'100px' }}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <div style={{ background: '#FF3333', marginTop: '30px', paddingTop: '20px', borderRadius: '10px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '30px', color: '#fff' }}>FLASH SALE ONLINE  <FireTwoTone /></h2>
          <div style={{ marginLeft: '4px' }}>
            <ProductSlider />
          </div>
          <WrapperFlash style={{ marginTop: '20px', background: '#FF3333', paddingBottom: '20px' }}>
            <ButtonComponent textButton="Xem thêm" type="outline" styleButton={{
              color: 'rgb(11, 116, 229)', width: '240px',
              height: '38px', borderRadius: '4px',
              padding: '4px 4px',
            }} />
          </WrapperFlash>
        </div>
        <Row>
        <h2>Điện thoại nổ bật</h2>
        <div style={{ padding: '0 120px' }}>
          <WrapperTypeProduct>
            {arr.map((item) => (
              <TypeProduct name={item} key={item} />
            ))}
          </WrapperTypeProduct>

        </div>
        </Row>
        <WrapperProduct style={{ marginTop: '30px' }}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </WrapperProduct>
        <div style={{ width: '100%', display: ' flex', justifyContent: 'center', marginTop: '10px' }}>
          <ButtonComponent textButton="Xem thêm" type="outline" styleButton={{
            color: 'rgb(11, 116, 229)', width: '240px',
            height: '38px', borderRadius: '4px',
            padding: '4px 4px',
          }} />
        </div>
      </div>
      <FooterComponent />
    </>


  );
};

export default HomePage;
