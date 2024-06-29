import type { Component, ComponentProps } from 'solid-js'
import { splitProps } from 'solid-js'

import { cn } from '~/lib/utils'

const Card: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return (
    <div
      class={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm transition-opacity duration-300 ease-in-out hover:opacity-50',
        local.class
      )}
      {...others}
    />
  )
}

const CardHeader: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('flex flex-col space-y-1.5 pb-2 pt-6', local.class)} {...others} />
}

const CardTitle: Component<ComponentProps<'h2'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return (
    <h3 class={cn('text-xl font-semibold leading-none tracking-tight', local.class)} {...others} />
  )
}

const CardDescription: Component<ComponentProps<'h3'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <p class={cn('text-lg text-muted-foreground', local.class)} {...others} />
}

const CardLocation: Component<ComponentProps<'h4'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <p class={cn('text-md text-muted-foreground', local.class)} {...others} />
}

const CardDate: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('pb-1 pt-0', local.class)} {...others} />
}

const CardContent: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('p-6 pt-0 text-sm', local.class)} {...others} />
}

const CardFooter: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('flex items-center p-6 pt-0 text-sm', local.class)} {...others} />
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardLocation,
  CardDate,
}
