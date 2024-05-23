import { observer } from "mobx-react-lite";
import { NotitficationStore, INotification } from "../store/NotificationStore";

const Notifications = observer(({ store }: { store: NotitficationStore }) => {
  return (
    <>
      {store.notifications.map((notif, idx) => {
        return (
          <div
            key={idx}
            className={`alert alert-${notif.cls} alert-dismissible fade show`}
          >
            {notif.msg}
            <button
              type="button"
              className="btn-close"
              onClick={() => store.deleteNotification(idx)}
            ></button>
          </div>
        );
      })}
    </>
  );
});

export default Notifications;

export function CreateNotificationDanger(msg: string): INotification {
  return { cls: "danger", msg: msg };
}

export function CreateNotificationWarning(msg: string): INotification {
  return { cls: "warning", msg: msg };
}

export function CreateNotificationInfo(msg: string): INotification {
  return { cls: "primary", msg: msg };
}
