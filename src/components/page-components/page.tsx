import { cn } from "@/lib/utils"

export const Page = ({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={cn('flex h-full flex-1 flex-col px-4', className)} {...props}>
      {children}
    </div>
  )
}