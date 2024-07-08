import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <Button
        type="primary"
        onClick={showModal}
        className="m-3 py-5 bg-slate-900 items-center"
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: 'bg-red-500 hover:bg-red-600' }}
        cancelButtonProps={{ className: 'bg-gray-500 hover:bg-gray-600' }}
      >
        <ol className="list-decimal ml-5 font-bold">
          <li>My name is Hussain</li>
          <li>I stay in Ponda</li>
          <li>Goa</li>
        </ol>
      </Modal>
    </div>
  );
};

export default App;
