import React, { ReactHTML } from "react"
import { FormComponentProps } from "antd/lib/form/Form"
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
      <div className="container">
        11111
        <MyEditor />
        <div className="content" />
      </div>
    )
  }
}

export default Register
