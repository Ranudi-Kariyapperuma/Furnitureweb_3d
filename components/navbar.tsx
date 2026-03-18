
"use client"

import { Button } from "@/components/ui/button"
import { LogIn, LogOut, User, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ThemeSwitcher } from "@/components/theme-switcher"

interface NavbarProps {
  isLoggedIn: boolean
  userRole: "user" | "admin" | null
  onLoginClick: () => void
  onLogout: () => void
  activePage?: string
}

export default function Navbar({
  isLoggedIn,
  userRole,
  onLoginClick,
  onLogout,
  activePage = "home",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pages = ["home", "products", "gallery", "canvas", "3d", "upload", "about", "contact"]

  const getHref = (page: string) => {
    if (page === "home") return "/"
    if (page === "canvas") return "/canvas"
    if (page === "3d") return "/3d"
    if (page === "upload") return "/3d/upload"
    return `/${page}`
  }

  const getLabel = (page: string) => {
    if (page === "3d") return "3D Designer"
    if (page === "canvas") return "2D Designer"
    if (page === "upload") return "Upload Furniture"
    return page.charAt(0).toUpperCase() + page.slice(1)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="DesignSpace logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-lime-500 p-1 shadow-md hover:scale-110 transition-transform duration-300"
            />
          <span className="text-2xl font-bold text-lime-500 drop-shadow-[0_0_5px_#22c55e] drop-shadow-[0_0_12px_#22c55e]">
  DesignSpace
</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-10">
            <ul className="flex gap-7">
              {pages.map((page) => {
                if (page === "upload" && userRole !== "admin") return null

                return (
                  <li key={page}>
                    <Link
                      href={getHref(page)}
                      className={`relative px-1 py-1 font-medium transition-colors duration-300
                      ${
                        activePage === page
                           ? "text-lime-600 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"
                          : "text-gray-700 hover:text-lime-600"
                      }
                      
                      before:absolute before:-bottom-1 before:left-0 before:h-[3px] before:w-full 
                      before:bg-lime-500 before:rounded-full before:origin-left
                      before:transition-transform before:duration-300
                      ${
                        activePage === page
                          ? "before:scale-x-100"
                          : "before:scale-x-0 hover:before:scale-x-100"
                      }`}
                    >
                      {getLabel(page)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
         

          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-3">
              
              <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors">
                <User className="h-5 w-5" />
                <span>{userRole === "admin" ? "Admin" : "User"}</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={onLogout}
                className="flex items-center gap-1 bg-green-400 hover:bg-green-600 border border-green-200 shadow-sm hover:shadow-green-300/30 transition-all"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={onLoginClick}
              className="hidden md:flex items-center gap-1 border-lime-500 text-lime-600 hover:bg-green-600 hover:shadow-green-300/30 transition-all"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 hover:text-green-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-green-100 shadow-lg py-5 px-4 animate-slide-down">
          <ul className="flex flex-col gap-4">
            {pages.map((page) => {
              if (page === "upload" && userRole !== "admin") return null

              return (
                <li key={page}>
                  <Link
                    href={getHref(page)}
                    className={`block py-2 px-3 rounded-lg font-medium transition-all
                    ${
                      activePage === page
                        ? "bg-green-100 text-green-600"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getLabel(page)}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="pt-4 border-t border-green-100 flex flex-col gap-3">

            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="h-5 w-5" />
                  <span>{userRole === "admin" ? "Admin" : "User"}</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="flex items-center gap-2 justify-center w-full bg-green-50 hover:bg-green-100 border-green-200"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={onLoginClick}
                className="flex items-center gap-2 justify-center w-full border-green-500 text-green-600"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.25s ease-out forwards;
        }
      `}</style>
    </header>
  )
}
