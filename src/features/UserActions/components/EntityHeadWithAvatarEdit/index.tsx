import { FC } from 'react';

import { EntityHead, EntityHeadProps } from '@/shared/ui';

export const EntityHeadWithAvatarEdit: FC<EntityHeadProps> = ({ ...props }) => {
	return <EntityHead isChangeable={true} {...props} />;
};
