export interface INotification {
  visible: boolean;
  cls?: string;
  msg?: string;
}

export interface INotificationProps {
  notification: INotification;
  onHide?(): void;
}

export default function Notification({
  notification,
  onHide,
}: INotificationProps) {
  return (
    <>
      {notification.visible && (
        <div
          className={`alert alert-${notification.cls} alert-dismissible fade show`}
        >
          {notification.msg}
          {onHide && (
            <button
              type="button"
              className="btn-close"
              onClick={onHide}
            ></button>
          )}
        </div>
      )}
    </>
  );
}
