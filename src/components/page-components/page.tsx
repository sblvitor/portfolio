import { cn } from "@/lib/utils"

export const Page = ({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <main 
      className={cn(
        'flex h-full flex-1 flex-col px-4 items-center', 
        className
      )} 
      {...props}
      data-slot='page'
    >
      {children}
    </main>
  )
}