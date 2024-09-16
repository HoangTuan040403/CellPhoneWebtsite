import React from 'react';
import { Badge, Col, Flex, Image } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style';
import Search from 'antd/es/transfer/search';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import imageLogo from '../../assets/images/logostore.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function HeaderComponent() {
  
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={5}>
          {/* <WrapperTextHeader>
            HT SHOP
          </WrapperTextHeader> */}
           <Image src={imageLogo} preview={false} alt="image-logo" height="55px" width="55px"/>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"

            textButton="Tìm kiếm"  
            placeholder="Nhập từ khóa tìm kiếm" />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small'> 
            <ShoppingCartOutlined style={{ fontSize: '30px', color: 'rgb(130, 134, 158)' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;


