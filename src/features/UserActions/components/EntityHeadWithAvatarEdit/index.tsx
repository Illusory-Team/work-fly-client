import { FC } from 'react';

import { EntityHead, EntityHeadProps } from '@/shared/ui/data-display/EntityHead';

export const EntityHeadWithAvatarEdit: FC<EntityHeadProps> = ({ ...props }) => {
	return <EntityHead isChangeable={true} {...props} />;
};
