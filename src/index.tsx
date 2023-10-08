import { createRoot } from 'react-dom/client';

import { App } from '@/app/index';

const container = document.getElementById('app') as HTMLDivElement;

createRoot(container).render(<App />);
