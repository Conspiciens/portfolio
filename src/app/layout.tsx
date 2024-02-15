import Navbar from "./navbar"

export default function Layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body>
          <Navbar />
          {children}
      </body> 
    </html>
  )
}