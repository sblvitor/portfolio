import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Page, PageHeader } from "@/components/page-components/page"
import { Section } from "@/components/page-components/section"
import { SimpleSectionDivider } from "@/components/page-components/section-divider"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <Page>
      <PageHeader>
        <span>TESTE</span>
      </PageHeader>
      <SimpleSectionDivider />
      <Section>
        <h1 className="font-medium">Project ready!</h1>
        <p>You may now add components and start building.</p>
        <p>We&apos;ve already added the button component for you.</p>
        <Button className="mt-2">Button</Button>
      </Section>
    </Page>
  )
}
