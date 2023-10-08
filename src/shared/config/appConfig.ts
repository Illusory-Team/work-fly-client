export interface IAppConfig {
	version: string;
	mainLink: string;
}

export const appConfig: IAppConfig = { ...(window as any).APP_CONFIG };
