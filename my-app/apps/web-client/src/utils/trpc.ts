import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../../packages/trpc-config/src/router';

export const trpc = createTRPCReact<AppRouter>();
