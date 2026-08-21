export function ClassTag({ children }) {
  return <span className="class-tag">{children}</span>
}

// Label besar vertikal di tepi kiri, terpotong sebagian - elemen signature
export function SideLabel({ text }) {
  return <span className="section-side-label -left-2 md:left-2">{text}</span>
}
