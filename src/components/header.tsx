import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-x px-4 py-1 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>logo</div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}