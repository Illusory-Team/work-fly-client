export interface INotification {
	id: string;
	title: string;
	subTitle: string;
	src: string;
	date: number;
	priority: Nullable<string>;
	folder_name: string;
	isRead: boolean;
}
