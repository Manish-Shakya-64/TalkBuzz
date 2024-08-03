import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = ["/api/webhook/clerk"];
const ignoredRoutes = ["/api/webhook/clerk"];

export default clerkMiddleware()
// Middleware configuration
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
