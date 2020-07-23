import React, { Component, useState }  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './styles.scss';
import { Layout, Menu, Card, message, Affix } from 'antd';

import Home from '../../pages/Home';
// import Home from '../../pages/Demo';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
type LayoutProps = {
    collapsed: boolean,
    headerTitle: string,
}

const CustomLayout = (Props: LayoutProps) => {
    const [bottom, setBottom] = useState(10);
    const [headerTitle, setHeaderTitle] = useState('Framing Store');
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    return (
        <Layout>
            <Layout>
                <Header style={{ background: '#fff', fontSize: 'larger' }}>
                    {headerTitle}
                </Header>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Content style={{ margin: '0 16px' }}>
                        <div>
                            <Switch>
                                <Route exact path='/' component={Home} />
                            </Switch>
                        </div>
                    </Content>
                </div>
                <Affix offsetBottom={bottom}>
                    <Footer style={{ textAlign: 'center' }}>
                        Developed By Shubham
                    </Footer>
                </Affix>
                
            </Layout>
        </Layout>
    );
}

export default CustomLayout;
