import { createRoot } from 'react-dom/client';

import { Root } from '@/app/index';

const container = document.getElementById('app') as HTMLDivElement;

createRoot(container).render(<Root>app</Root>);
