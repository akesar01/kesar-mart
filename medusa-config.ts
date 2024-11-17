import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  plugins: [
    {
      resolve: `medusa-payment-razorpay`,
      options: {
        key_id: process.env.RAZORPAY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
        razorpay_account: process.env.RAZORPAY_ACCOUNT,
        automatic_expiry_period: 30,
        manual_expiry_period: 7200,
        refund_speed: "normal",
        webhook_secret: process.env.RAZORPAY_WEBHOOK_SECRET,
        auto_capture: true
      }
    }
  ]
})
