/**
 * @file Editor with link
 * @author Marx
 */

import "./index.less"
import React, { Component } from "react"
import { Modal, Button, Input } from "antd"
// import { MarkdownEditor } from "react-markdown-editor"
import MarkdownEditor from "@uiw/react-markdown-editor"
interface IProps {
  onChange: Function
}
interface IState {
  markdown: string
}
class MyEditor extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      markdown: ""
    }
  }
  updateMarkdown = (editor: any, data: any, value: any) => {
    console.log(editor, data, value, 11111)
    this.props.onChange(value)
    this.setState({ markdown: value })
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.markdown}
        onChange={this.updateMarkdown}
        height={400}
      />
    )
    // return <MarkdownEditor initialContent="Test" iconsSet="font-awesome" />
  }
}
export { MyEditor }
