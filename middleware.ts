import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/'],
  afterAuth(auth, req){
    // if user is logged in and in the landing page
    if (auth.userId && auth.isPublicRoute){
      // redirect to select-org page if orgId is not set
      let path = "select-org"

      if (auth.orgId){
        // redirect to organization page if orgId is set
        path = `/organization/${auth.orgId}`
      }

      const orgSelection = new URL(path, req.url)
      return NextResponse.redirect(orgSelection)
    }

    // if user is not logged in and not in the landing page redirect to sign in page
    //and after sign in redirect back to requested url 
    if (!auth.userId && !auth.isPublicRoute){
      return redirectToSignIn({returnBackUrl: req.url})
    }
    // if user is logged in and does not have an organization
    // and not in the select org page redirect to select-org page
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org"){
      return NextResponse.redirect(new URL("/select-org", req.url))
    }
  }
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};