import React, { Component }  from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import style from './styles.scss';
import { Layout, Menu, Card, message } from 'antd';

import Home from '../../pages/Home';
// import Home from '../../pages/Demo';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
type LayoutProps = {
    collapsed: boolean,
    headerTitle: string,
}

class CustomLayout extends Component<{}, LayoutProps> {
    state = {
        collapsed: false,
        headerTitle: 'Dashboard',
    };

    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };


    render() {
        const keys = [
            'posts',
        ];


        return (
            <Layout>
                <Layout>
                    <Header style={{ background: '#fff' }}>
                        {/*{headerTitle}*/}
                    </Header>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Content style={{ margin: '0 16px' }}>
                            <div>
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    {/*<Route*/}
                                    {/*    exact*/}
                                    {/*    path='/dashboard/newsletters'*/}
                                    {/*    component={NewsLetters}*/}
                                    {/*/>*/}
                                </Switch>
                            </div>
                        </Content>
                    </div>
                    <Footer style={{ textAlign: 'center' }}>
                        Developed By Shubham
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default CustomLayout;
