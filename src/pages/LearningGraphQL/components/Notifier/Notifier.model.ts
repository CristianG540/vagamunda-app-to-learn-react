import { NotificationType } from '../../redux/features/notification/models/notification.interfaces';

export interface NotifierProps {
  message: string;
  type?: NotificationType;
}
