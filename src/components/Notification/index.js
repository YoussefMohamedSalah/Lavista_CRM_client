// // import { Notification, Placeholder } from 'rsuite';

// // const Message = forwardRef(({ type, ...rest }, ref) => {
// //     return (
// //         <Notification ref={ref} {...rest} type={type} header={type}>
// //             <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
// //         </Notification>
// //     );
// // });

// // const index = () => {
// //     return (
// //         <div>
// //             <Message type="info" />
// //             <hr />
// //             <Message type="success" />
// //             <hr />
// //             <Message type="warning" />
// //             <hr />
// //             <Message type="error" />
// //         </div>
// //     );
// // }
// // export default index
// import {
//     Notification,
//     Placeholder,
//     Uploader,
// } from 'rsuite';

// const NotificationMessage = ({ type }) => {
//     const message = (
//         <Notification type={type} header={type} closable>
//             <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
//             <hr />
//             <Uploader action="#" />
//         </Notification>
//     );

//     return (
//         <div>
//             {message}
//             {/* <hr />
//             <ButtonToolbar>
//                 <SelectPicker
//                     value={type}
//                     data={[
//                         { label: 'info', value: 'info' },
//                         { label: 'success', value: 'success' },
//                         { label: 'warning', value: 'warning' },
//                         { label: 'error', value: 'error' }
//                     ]}
//                     onChange={setType}
//                     style={{ width: 200 }}
//                 />
//                 <SelectPicker
//                     value={placement}
//                     data={[
//                         { label: 'topStart', value: 'topStart' },
//                         { label: 'topCenter', value: 'topCenter' },
//                         { label: 'topEnd', value: 'topEnd' },
//                         { label: 'bottomStart', value: 'bottomStart' },
//                         { label: 'bottomCenter', value: 'bottomCenter' },
//                         { label: 'bottomEnd', value: 'bottomEnd' }
//                     ]}
//                     onChange={setPlacement}
//                     style={{ width: 200 }}
//                 />
//                 <Button onClick={() => toaster.push(message, { placement })}>Push</Button>
//             </ButtonToolbar> */}
//         </div>
//     );
// };

// export default NotificationMessage