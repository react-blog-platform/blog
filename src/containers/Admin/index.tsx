import React, { ReactHTML } from "react"
import { FormComponentProps } from "antd/lib/form/Form"
import { Button, Menu, Icon, Breadcrumb ,Result} from "antd"
import AddContent from "./AddContent"
import User from "./User"
import Class from "./Class"
import AddClass from "./AddClass"
import Content from "./Content"

import "./index.less"
import { Route, Switch } from "react-router"

const { SubMenu } = Menu
interface IState {
  current: string
}
interface IProps extends FormComponentProps {
  match: {
    url: string
    path: string
  }
  location: {
    pathname: string
  }
  history: any
}

class Register extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    console.log(props)
    this.state = {
      current: props.location.pathname
    }
  }
  componentDidMount() {}
  handleSubmit() {}
  handleChange(value: String) {
    console.log(value)
  }
  handleClick(selectedItem: any) {
    this.setState({ current: selectedItem.key })
    this.props.history.push(selectedItem.key)
  }
  render() {
    return (
      <div className="management">
        <div className="management-header">
          <Menu
            onClick={this.handleClick.bind(this)}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key={"/admin"}>
              <Icon type="mail" />
              后台管理
            </Menu.Item>
            <Menu.Item key={"/admin/user"}>
              <Icon type="appstore" />
              用户管理
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="setting" />
                  分类管理
                </span>
              }
            >
              <Menu.Item key="/admin/class">分类首页</Menu.Item>
              <Menu.Item key="/admin/add-class">添加分类</Menu.Item>
            </SubMenu>

            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="setting" />
                  内容管理
                </span>
              }
            >
              <Menu.Item key="/admin/content">内容首页</Menu.Item>
              <Menu.Item key="/admin/add-content">添加内容</Menu.Item>
            </SubMenu>
          </Menu>
        </div>

        <div
          style={{
            height: "36px",
            padding: "6px",
            margin: "10px",
            background: "#f5f5f5"
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="main">
          <Route>
            <Switch>
              <Route
                path={`${this.props.match.url}/content`}
                component={Content}
              ></Route>
              <Route
                path={`${this.props.match.url}/add-content`}
                component={AddContent}
              ></Route>
              <Route
                path={`${this.props.match.url}/user`}
                component={User}
              ></Route>
              <Route
                path={`${this.props.match.url}/class`}
                component={Class}
              ></Route>
              <Route
                path={`${this.props.match.url}/add-class`}
                component={AddClass}
              ></Route>
              <div style={{marginTop:'100px'}}>
                <Result
                  icon={<Icon type="smile" theme="twoTone" />}
                  title="欢迎来到博客管理系统"
                //   extra={<Button type="primary">Next</Button>}
                  status="success"
                />
              </div>
            </Switch>
          </Route>
        </div>
      </div>
    )
  }
}

export default Register
