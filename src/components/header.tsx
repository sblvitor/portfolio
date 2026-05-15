import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between border-x px-4 py-1">
        <div>logo</div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}