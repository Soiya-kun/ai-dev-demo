import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();
export const router = t.router({
  greeting: t.procedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello, ${input ?? 'world'}!`;
  }),
});

export const appRouter = router;
export type AppRouter = typeof appRouter;
