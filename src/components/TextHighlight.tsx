import { type ReactNode } from "react"

interface Props {
    children: ReactNode
}
export default function TextHighlight({children} : Props) {
  return (<>
     <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500"> {children} </span>
  </>)
}
