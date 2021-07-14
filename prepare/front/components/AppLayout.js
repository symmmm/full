import PropTypes from 'prop-types';
import Link from "next/link";
import {Menu, Input, Row, Col} from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({children}) =>{
    const { me } = useSelector((state) => state.user);
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item><Link href="/"><a>HOME</a></Link></Menu.Item>
                <Menu.Item><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
            </Menu>


            <Row gutter={8}>
                <Col xs={24} md={6}>
                  {me ? <UserProfile /> : <LoginForm />}  
                 </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}><a href ="https://www.naver.com" target="_blank" rel="noreferrer noopenner">naver</a></Col>
            </Row>

        </div>
    );
};


AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;