import styled from '@emotion/styled';
import { Card, CardContent } from '@mui/material';

export const CardCustom = styled(Card)`
	max-width: 236px;
	height: 158px;
	border-radius: 12px;
`;

export const CardContentCustom = styled(CardContent)`
	padding: 0;

	&:last-child {
		padding: 0;
	}
`;
