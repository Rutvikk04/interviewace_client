import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('token')?.value
  const { pathname } = req.nextUrl

  const isAuthPage = pathname.startsWith('/auth')

  // If user is not logged in and trying to access a protected route
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  // If user is logged in and trying to visit /auth again
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/user-dashboard', req.url))
  }

  // Allow request
  return NextResponse.next()
}


export const config = {
  matcher: ['/user-dashboard', '/quiz', '/auth'],
}
