import React, { ReactHTML } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Carousel, notification } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { fetchBackgroundImage, signUp } from '../../actions';
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
  signUp: (payload: object) => Promise<any>
}

class Register extends React.Component<IProps> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.signUp(values).then(res => {
          console.log(res)
          
          try {
            const token=res.data.token;
            localStorage.setItem('token',token);
          } catch (error) {
            notification.open({
              message: '提示',
              description: '请关闭浏览器隐身模式'
            });
          }
        })
      }
    });
  };
  componentDidMount() {
    console.log(this.props.loginInfo)
    this.props.fetchBackgroundImage({
      count: 3
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
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />,
                )}
              </Form.Item>
              <Form.Item className="form-ipt">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: '请输入邮箱!' }],
                })(
                  <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="邮箱"
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
                注册
              </Button>
            </Form>
          </div>
        </div>
      </div>

    );
  }
}

const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(Register);

const mapStateToProps = ({ login }: any) => {
  return { loginInfo: login }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchBackgroundImage: bindActionCreators(fetchBackgroundImage, dispatch),
    signUp: bindActionCreators(signUp, dispatch)
  }
}
const HOCRegister: any = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalRegisterForm)


export default withRouter(HOCRegister);
