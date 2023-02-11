import { FC } from 'react';

import { EntityHeadProps } from '@/shared/ui/EntityHead';
import { EntityHead } from '@/shared/ui/EntityHead/EntityHead';

export const ChangeAvatar: FC<EntityHeadProps> = ({ ...props }) => {
	return <EntityHead {...props} />;
};
