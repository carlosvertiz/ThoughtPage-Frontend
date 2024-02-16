export function createItem(state, actionPayload){
  return [...state, actionPayload]
}

export function modifyItem(state, actionPayload){
  return (state.map(thought =>
    thought.id === actionPayload.id
      ? { ...thought, thought: actionPayload.thought, category: actionPayload.category }
      : thought
    )
  )
}
export function archiveItem(state, actionPayload) {
  return (
    state.map(thought =>
      thought.id === actionPayload.id
        ? { ...thought, view: thought.view ? 0 : 1 }
        : thought
    )
  )
}

export function deleteItem(state, actionPayload) {
  return (
    state.filter(thought => actionPayload.id !== thought.id)
    )
}