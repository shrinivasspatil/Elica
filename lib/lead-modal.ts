export const OPEN_LEAD_MODAL_EVENT = 'elicaa:open-lead-modal'

export function openLeadModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(OPEN_LEAD_MODAL_EVENT))
  }
}
