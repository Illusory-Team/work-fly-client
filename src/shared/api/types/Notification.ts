export interface Notification {
	id: string;
	title: string;
	subTitle: string;
	src: string;
	date: number;
	priority: string | null;
	folder_name: string;
	isRead: boolean;
}
