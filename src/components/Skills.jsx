import { skills } from '../data.js'
import { SideLabel } from './SectionLabel.jsx'
import { Database, Lightbulb, Clock, Users, MessageCircle, Shuffle, Brain, Server, LineChart, FileSpreadsheet } from 'lucide-react'

// Peta nama skill -> ikon. Kalau nama skill di data.js gak ketemu di sini,
// otomatis pakai ikon default. "svg" pakai file logo asli dari public/tech-icons/,
// "lucide" pakai ikon generik untuk yang gak ada logo resminya.
const ICONS = {
  // Web (FE & BE)
  'React.js': { type: 'svg', src: '/tech-icons/react.svg' },
  'FastAPI': { type: 'svg', src: '/tech-icons/fastapi.svg' },
  'Git & GitHub': { type: 'svg', src: '/tech-icons/git.svg' },
  'Docker': { type: 'svg', src: '/tech-icons/docker.svg' },
  'HTML': { type: 'svg', src: '/tech-icons/html5.svg' },
  'CSS': { type: 'svg', src: '/tech-icons/css3.svg' },
  // Data
  'Python': { type: 'svg', src: '/tech-icons/python.svg' },
  'TensorFlow / Keras': { type: 'svg', src: '/tech-icons/tensorflow.svg' },
  'Excel': { type: 'lucide', Icon: FileSpreadsheet },
  // Database
  'PostgreSQL / Supabase': { type: 'svg', src: '/tech-icons/postgresql.svg' },
  'SQL': { type: 'lucide', Icon: Database },
  'MySQL': { type: 'svg', src: '/tech-icons/mysql.svg' },
  'MongoDB': { type: 'svg', src: '/tech-icons/mongodb.svg' },
  // Soft skill
  'Problem solving': { type: 'lucide', Icon: Lightbulb },
  'Time Management': { type: 'lucide', Icon: Clock },
  'Teamwork': { type: 'lucide', Icon: Users },
  'Communication': { type: 'lucide', Icon: MessageCircle },
  'Adaptable': { type: 'lucide', Icon: Shuffle },
  'Critical Thinking': { type: 'lucide', Icon: Brain }
}

function SkillCard({ label, fallback }) {
  const conf = ICONS[label] || { type: 'lucide', Icon: fallback }
  return (
    <div className="group flex flex-col items-center justify-center gap-3 bg-bg border border-line rounded-2xl p-6 text-center hover:border-navy hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-0.5 transition-all">
      {conf.type === 'svg'
        ? <img src={conf.src} alt={label} className="w-9 h-9 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
        : <conf.Icon className="w-8 h-8 text-navy" strokeWidth={1.75} />}
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  )
}

function SkillGroup({ title, subtitle, items, fallback }) {
  if (!items || items.length === 0) return null
  return (
    <div>
      <h3 className="text-sm font-semibold text-navy-light mb-1">{subtitle}</h3>
      <h4 className="font-display font-extrabold text-2xl mb-6">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((label) => (
          <SkillCard key={label} label={label} fallback={fallback} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line bg-surface overflow-hidden">
      <SideLabel text="SKILL" />
      <div className="relative">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl">Tools & Technologies</h2>
          <p className="text-muted mt-3">
          Technologies that i use to accomodate my programming needs
          </p>
        </div>

        <div className="space-y-14 max-w-4xl mx-auto">
          <SkillGroup title="Web Development" subtitle="Frontend & Backend" items={skills.web} fallback={Server} />
          <SkillGroup title="Data" subtitle="Machine Learning & Analisis" items={skills.data} fallback={LineChart} />
          <SkillGroup title="Database" subtitle="Penyimpanan & Query Data" items={skills.database} fallback={Database} />
          <SkillGroup title="Soft Skill" subtitle="Cara Kerja & Kolaborasi" items={skills.soft} fallback={Lightbulb} />
        </div>
      </div>
    </section>
  )
}