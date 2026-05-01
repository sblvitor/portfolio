import { useTheme } from "@lonik/themer"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useCallback } from "react"
import { MoonIcon } from "./animated-icons/moon"
import { SunMediumIcon } from "./animated-icons/sun-medium"

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const switchTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  const onToggleTheme = useCallback(() => {
    if (!document.startViewTransition) {
      switchTheme()
      return
    }
    document.startViewTransition(switchTheme)
  }, [switchTheme])

  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant={'ghost'} size={'icon'} onClick={onToggleTheme} />}>
        <MoonIcon className="relative hidden after:absolute after:-inset-2 dark:block" />
        <SunMediumIcon className="relative hidden not-dark:block after:absolute after:-inset-2" />
      </TooltipTrigger>
      <TooltipContent>
        Toggle Theme
      </TooltipContent>
    </Tooltip>
  )
}