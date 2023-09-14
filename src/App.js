import { Button, Drawer } from 'antd';
import { useState } from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Button onClick={showDrawer}>添加通知</Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <div className="select-title">通知发送设置</div>
        <div className="select-title">收件人</div>
        <div>邮箱</div>
      </Drawer>
    </div>
  );
}

export default App;
