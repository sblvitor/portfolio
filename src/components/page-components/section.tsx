import { cn } from "@/lib/utils"

export const Section = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'section'>) => {
  return (
    <section 
      className={cn(
        'max-w-5xl w-full border-x px-4',
        className
      )}
      {...props}
      data-slot="section"
    >
      {children}
    </section>
  )
}