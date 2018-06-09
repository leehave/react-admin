import React, { Component } from 'react';
import { Layout,Card,Icon,Breadcrumb } from 'zent';
// import BreadcrumbCustom from '@/layouts/Breadcrumb/Breadcrumb';
const { Row, Col } = Layout;
const dataList = [
  { name: '首页', href: '/' }
];
export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <Breadcrumb breads={dataList} />
          <Row>
                      <Col className="gutter-row" span={8}>
                          <div className="gutter-box">
                              <Card>
                                  <div className="clear y-center">
                                      <div className="pull-left mr-m">
                                          <Icon type="shop-template" className="text-2x text-danger" />
                                      </div>
                                      <div className="clear">
                                          <div className="text-muted">收藏</div>
                                          <h2>301</h2>
                                      </div>
                                  </div>
                              </Card>
                          </div>
                          <div className="gutter-box">
                              <Card>
                                  <div className="clear y-center">
                                      <div className="pull-left mr-m">
                                          <Icon type="help-circle-o" className="text-2x" />
                                      </div>
                                      <div className="clear">
                                          <div className="text-muted">云数据</div>
                                          <h2>30122</h2>
                                      </div>
                                  </div>
                              </Card>
                          </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                          <div className="gutter-box">
                              <Card>
                                  <div className="clear y-center">
                                      <div className="pull-left mr-m">
                                          <Icon type="message-o" className="text-2x text-info" />
                                      </div>
                                      <div className="clear">
                                          <div className="text-muted">照片</div>
                                          <h2>802</h2>
                                      </div>
                                  </div>
                              </Card>
                          </div>
                          <div className="gutter-box">
                              <Card>
                                  <div className="clear y-center">
                                      <div className="pull-left mr-m">
                                          <Icon type="order-o" className="text-2x text-success" />
                                      </div>
                                      <div className="clear">
                                          <div className="text-muted">邮件</div>
                                          <h2>102</h2>
                                      </div>
                                  </div>
                              </Card>
                          </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                          <div className="gutter-box">
                              <Card className={'no-padding'}>
                                test
                              </Card>
                          </div>
                      </Col>
                  </Row>
      </div>
    )
  }
}
