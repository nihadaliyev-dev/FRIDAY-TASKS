// import { useState } from "react";
// import { Button, Modal } from "antd";
// const DeleteModal = () => {
//   const [modal2Open, setModal2Open] = useState(false);
//   return (
//     <>
//       <Button type="primary" onClick={() => setModal2Open(true)}>
//         Vertically centered modal dialog
//       </Button>
//       <Modal
//         title="Vertically centered modal dialog"
//         centered
//         open={modal2Open}
//         onOk={() => setModal2Open(false)}
//         onCancel={() => setModal2Open(false)}
//       >
//         <p>some contents...</p>
//       </Modal>
//     </>
//   );
// };
// export default DeleteModal;

// import React from 'react';
// import { Button, notification, Space } from 'antd';
// const App = () => {
//   const [api, contextHolder] = notification.useNotification();
//   const openNotification = (pauseOnHover) => () => {
//     api.open({
//       message: 'Notification Title',
//       description:
//         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//       showProgress: true,
//       pauseOnHover,
//     });
//   };
//   return (
//     <>
//       {contextHolder}
//       <Space>
//         <Button type="primary" onClick={openNotification(true)}>
//           Pause on hover
//         </Button>
//         <Button type="primary" onClick={openNotification(false)}>
//           Don&apos;t pause on hover
//         </Button>
//       </Space>
//     </>
//   );
// };
// export default App;
