
import React from 'react';
import {Input,Button} from 'antd';
import { MyEditor } from "../../../components/myEditor"
import './index.less';
interface IState{

}
interface IProps{

}
class AddContent extends React.Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state = {

        }
    }
    handleChange(){

    }
    handleSubmit(){

    }
    render() {
        return (
            <div className="management-content">
                <div className="main">
                    <div className="section">
                        <div className="section-head">编写博客文章</div>
                        <p className="section-title">标题</p>
                        <Input placeholder="请输入标题" />
                        <p className="section-title">
                            内容（利用markdown编辑器编辑所需要的内容）
                        </p>
                        <MyEditor onChange={this.handleChange} />
                        <Button type="primary" onClick={this.handleSubmit}>
                            提交
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddContent;

