import { cn } from "@/lib/utils"
import { Section } from "./section"
import { NoiseTexture } from "../ui/noise-texture"

export const Page = ({ className, children, ...props }: React.ComponentPropsWithoutRef<'main'>) => {
  return (
    <main 
      className={cn(
        'relative isolate flex h-full flex-1 flex-col px-4 items-center', 
        className
      )} 
      {...props}
      data-slot='page'
    >
      <NoiseTexture 
        className='absolute inset-0 -z-1'
        frequency={0.45}
        octaves={4}
        slope={0.12}
        noiseOpacity={0.09}
      />
      {children}
    </main>
  )
}

export const PageHeader = ({ className, children, ...props }: React.ComponentPropsWithoutRef<'section'>) => {
  return (
    <Section
      className={cn(
        'relative min-h-48 overflow-hidden md:min-h-64',
        className
      )}
      {...props}
      data-slot='page-header'
    >
      <div className="flex flex-col">{children}</div>
      <div className="pointer-events-none absolute -z-1 inset-0" aria-hidden>
        
      </div>
    </Section>
  )
}