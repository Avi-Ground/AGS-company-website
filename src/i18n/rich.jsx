// Renders translation strings that use **bold**, *emphasis* and \n line breaks.
// Emphasis may span line breaks, e.g. "Leaders in\n*Passenger,\nCargo*".
export function rich(text) {
  if (typeof text !== 'string') return text
  const nodes = []
  let bold = false
  let em = false
  text.split(/(\*\*|\*|\n)/).forEach((part, i) => {
    if (part === '**') bold = !bold
    else if (part === '*') em = !em
    else if (part === '\n') nodes.push(<br key={i} />)
    else if (part) {
      let node = part
      if (em) node = <em key={`e${i}`}>{node}</em>
      if (bold) node = <strong key={`b${i}`}>{node}</strong>
      nodes.push(typeof node === 'string' ? <span key={i}>{node}</span> : node)
    }
  })
  return nodes
}
