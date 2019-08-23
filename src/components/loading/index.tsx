import React from 'react'
import {Spin, Button} from 'antd'
const style={
  fontSize:'36px',
  color:'#e00'
}

function Loading(props:any) {
  if (props.error) {
    return <div>Error! <Button onClick={ props.retry }>Retry</Button></div>;
  } else {
    return <Spin style={style} />;
  }
}

export default Loading;