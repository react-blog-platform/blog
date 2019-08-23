import { message,notification } from 'antd';

export const middlewareConfig = {
  interceptors: {
    request: [{
      success: function (_:any, req:any) {
        console.log(req); //contains information about request object
        
        try {
          const token=localStorage.getItem('token');
          req.headers['authorization']=`Bearer ${token}`;
        } catch (error) {
          notification.open({
            message: '提示',
            description: '请关闭浏览器隐身模式'
          });
        }

        return req
      },
    }],
    response: [{
      success: function ({getState, dispatch, getSourceAction}:any, req:any) {
        console.log(req,getSourceAction,getState, dispatch); //contains information about request object
        if(req.data && req.data.code!==200){
          console.log(getSourceAction())
        }
        return req
      },
      error: function ({getState, dispatch, getSourceAction}:any, error:any) {
        //...
      }
    }]
  }
};