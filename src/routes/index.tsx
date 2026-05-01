import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Page } from "@/components/page-components/page"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <Page>
      <h1 className="font-medium">Project ready!</h1>
      <p>You may now add components and start building.</p>
      <p>We&apos;ve already added the button component for you.</p>
      <Button className="mt-2">Button</Button>
    </Page>
  )
}
