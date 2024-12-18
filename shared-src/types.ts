import type { SerializedReactComponent } from "../lib/serialize-react"

export type WorkerApi = {
  add: (component: SerializedReactComponent) => void
  renderUntilSettled: () => Promise<void>
  getCircuitJson: () => any
  _registerProxy: (name: string, fn: any) => void
}
