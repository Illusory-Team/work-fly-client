import styled from '@emotion/styled';
import { AvatarGroup as MuiAvatarGroup } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { AvatarGroupProps, StyledAvatarGroupProps } from './AvatarGroup.types';
import { AVATAR_GROUP_SIZE } from './constants';

const AvatarGroupCustom = styled(MuiAvatarGroup)<StyledAvatarGroupProps>`
	.MuiAvatarGroup-avatar {
		width: ${({ size }) => AVATAR_GROUP_SIZE[size]};
		height: ${({ size }) => AVATAR_GROUP_SIZE[size]};
		font-size: ${({ size }) => (size === 'large' ? '22px' : size === 'medium' ? '18px' : '14px')};
	}
`;

export const AvatarGroup: FC<PropsWithChildren<AvatarGroupProps>> = ({ children, size = 'medium', ...props }) => {
	return (
		<AvatarGroupCustom size={size} {...props}>
			{children}
		</AvatarGroupCustom>
	);
};
