export const OPEN_COMMAND_MENU_EVENT = "sourav:open-command-menu";

export function openCommandMenu() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_COMMAND_MENU_EVENT));
  }
}
