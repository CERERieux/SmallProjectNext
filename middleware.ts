import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "./auth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default auth(req => {
  const urlReq = new URL(req.url);
  if (!req.auth && urlReq?.pathname.includes("/admincomments")) {
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(urlReq?.pathname)}`,
        req.url,
      ),
    );
  }
});
