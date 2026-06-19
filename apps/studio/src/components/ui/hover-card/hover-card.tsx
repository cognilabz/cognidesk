"use client"

import * as React from "react"
import { HoverCard as HoverCardPrimitive } from "radix-ui"

import { HoverCardContent } from "./content"
import { HoverCardTrigger } from "./trigger"

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
