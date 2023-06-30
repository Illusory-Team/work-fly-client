export type PositionValueType = 'owner' | 'member' | 'manager';

export interface UserPosition {
	id: string;
	value: PositionValueType;
}
