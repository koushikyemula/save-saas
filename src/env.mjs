// import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";

// const env = createEnv({
//   /**
//    * Specify your server-side environment variables schema here. This way you can ensure the app
//    * isn't built with invalid env vars.
//    */
//   server: {
//     NODE_ENV: z.enum(["development", "test", "production"]),
//     DATABASE_URL: z.string().url().min(1),
//     CLERK_SECRET_KEY: z.string().min(1),
//     CLERK_API_ENDPOINT: z.string().url().min(1),
//     ORG_WEBHOOK_SECRET: z.string().min(1),
//     USER_WEBHOOK_SECRET: z.string().min(1),
//   },

//   /**
//    * Specify your client-side environment variables schema here. This way you can ensure the app
//    * isn't built with invalid env vars. To expose them to the client, prefix them with
//    * `NEXT_PUBLIC_`.
//    */
//   client: {
//     NEXT_PUBLIC_APP_URL: z.string().url().min(1),
//     NEXT_PUBLIC_API_ENDPOINT: z.string().url().min(1),
//     NEXT_PUBLIC_APP_CLERK_ORG_ID: z.string().min(1),
//     NEXT_PUBLIC_CLERK_TOKEN_TEMPLATE: z.string().min(1),
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
//   },

//   /**
//    * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
//    * middlewares) or client-side so we need to destruct manually.
//    */
//   runtimeEnv: {
//     NODE_ENV: process.env.NODE_ENV,
//     DATABASE_URL: process.env.DATABASE_URL,
//     CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
//     CLERK_API_ENDPOINT: process.env.CLERK_API_ENDPOINT,
//     ORG_WEBHOOK_SECRET: process.env.ORG_WEBHOOK_SECRET,
//     NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
//     USER_WEBHOOK_SECRET: process.env.USER_WEBHOOK_SECRET,
//     NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
//     NEXT_PUBLIC_APP_CLERK_ORG_ID: process.env.NEXT_PUBLIC_CLERK_ORG_ID,
//     NEXT_PUBLIC_CLERK_TOKEN_TEMPLATE: process.env.NEXT_PUBLIC_CLERK_TOKEN_TEMPLATE,
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
//   },

//   /**
//    * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
//    * This is especially useful for Docker builds.
//    */
//   skipValidation: !!process.env.SKIP_ENV_VALIDATION,
// });

// export { env };
