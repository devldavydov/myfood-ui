import { makeAutoObservable } from "mobx";

export interface INotification {
  cls: string;
  msg: string;
}

export class NotitficationStore {
  notifications: INotification[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNotification(notif: INotification) {
    this.notifications.push(notif);
  }

  deleteNotification(idx: number) {
    this.notifications.splice(idx, 1);
  }
}

export const notifStore = new NotitficationStore();
