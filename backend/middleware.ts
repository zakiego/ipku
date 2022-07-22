import { NextRequest, NextResponse } from "next/server";

// run only on homepage
export const config = {
  matcher: ["/", "/api", "/api/v1"],
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;

  const pathname = req.nextUrl.pathname;

  if (pathname === "/api") {
    url.searchParams.set("country", geo?.country as string);
    url.searchParams.set("city", geo?.city as string);
    url.searchParams.set("region", geo?.region as string);
    url.searchParams.set("longitude", geo?.longitude as string);
    url.searchParams.set("latitude", geo?.latitude as string);
    url.searchParams.set("ip", req.ip as string);

    url.pathname = "/api/v1";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
