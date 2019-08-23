import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Articles: any = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <Link to='/post/1'><Button type="primary">Button</Button></Link>
        <Link to='/login'><Button type="primary">Login</Button></Link>
      </header>
    </div>
  );
}

export default Articles;
