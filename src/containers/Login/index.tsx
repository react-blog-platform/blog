import React, { ReactHTML } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Carousel } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { fetchBackgroundImage } from '../../actions';
import { LoginState } from '../../reducers/login'
import './index.less'

interface ILocation {
  pathname: string
}
interface IProps extends FormComponentProps {
  loginInfo: LoginState
  children: ReactHTML
  location: ILocation
  fetchBackgroundImage: (payload?: object) => void
}

class Login extends React.Component<IProps> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  componentDidMount() {
    console.log(this.props.loginInfo)
    this.props.fetchBackgroundImage({
      count: 6
    })
  }

  render() {
    console.log(this.props.loginInfo)
    const { loginInfo, form } = this.props;
    const { images } = loginInfo;
    const { getFieldDecorator } = form;
    return (
      <div className="container">
        <Carousel autoplay adaptiveHeight={true} className="carousel" style={{ height: '100%' }}>
          {
            images.map((item, index) => {
              return <div className="carousel-item" key={index}>
                <div className="carousel-item-inner" style={{ backgroundImage: `url("https://cn.bing.com${item.url}")` }}>
                  <p className="copyright">{item.copyright}</p>
                </div>
              </div>
            })
          }
        </Carousel>
        <div className="content">
          <div className="form">
            {/* <h2 className="title">blog后台管理系统</h2> */}
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item className="form-ipt">
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item className="form-ipt">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />,
                )}
              </Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form>
          </div>
        </div>
      </div>

    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapStateToProps = ({ login }: any) => {
  return { loginInfo: login }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchBackgroundImage: bindActionCreators(fetchBackgroundImage, dispatch)
  }
}
const HOCLogin: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm)


export default withRouter(HOCLogin);
