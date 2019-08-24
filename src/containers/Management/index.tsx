import React, { ReactHTML } from "react"
import { FormComponentProps } from "antd/lib/form/Form"
import { Input } from "antd"
import { LoginState } from "../../reducers/login"
import { MyEditor } from "../../components/myEditor"
import "./index.less"
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

class Register extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props.loginInfo)
  }

  render() {
    console.log(this.props.loginInfo)
    return (
      <div className="management">
        <div className="management-header"> </div>
        <div className="management-content">
          <div className="nav" />
          <div className="main">
            <div className="aside" />
            <div className="section">
              <div className="section-head">编写博客文章</div>
              <p className="section-title">标题</p>
              <Input placeholder="请输入标题" />
              <p className="section-title">
                内容（利用markdown编辑器编辑所需要的内容）
              </p>
              <MyEditor />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
