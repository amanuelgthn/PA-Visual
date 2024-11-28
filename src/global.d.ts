declare global {
  interface Window {
    beTracker?: {
      t: (params: { hash: string }) => void
    }
  }
}

export {}
