import * as React from "react"
import { cn } from "../../lib/utils"

export const Input = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      props.className
    )}
    {...props}
  />
))

Input.displayName = "Input"
