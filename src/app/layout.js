import './globals.css'

export const metadata = {
  title: 'TechBuild - PC Component Builder',
  description: 'Build your perfect PC with our component selection tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}