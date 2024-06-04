import { Alert } from "react-bootstrap";

export interface INotification {
  visible: boolean;
  cls?: string;
  msg?: string;
}

export interface INotificationProps {
  notification: INotification;
}

export default function Notification({ notification }: INotificationProps) {
  return (
    <>
      {notification.visible && (
        <Alert variant={notification.cls} dismissible>
          {notification.msg}
        </Alert>
      )}
    </>
  );
}
