export enum NotificationType {
  Error = 'ERROR',
  Warning = 'WARNING',
  Info = 'INFO'
}

export interface NotificationState {
  message: string;
  type?: NotificationType;
}
