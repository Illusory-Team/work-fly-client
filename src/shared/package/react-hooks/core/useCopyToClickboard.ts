/* eslint-disable no-console */
import { useState } from 'react';

type CopiedValueType = string | null;
type CopyFnType = (text: string) => Promise<boolean>;

export const useCopyToClipboard = (): [CopiedValueType, CopyFnType] => {
	const [copiedText, setCopiedText] = useState<CopiedValueType>(null);

	const copy: CopyFnType = async text => {
		if (!navigator?.clipboard) {
			console.warn('Clipboard not supported');
			return false;
		}

		try {
			await navigator.clipboard.writeText(text);
			setCopiedText(text);
			return true;
		} catch (error) {
			console.warn('Copy failed', error);
			setCopiedText(null);
			return false;
		}
	};

	return [copiedText, copy];
};
