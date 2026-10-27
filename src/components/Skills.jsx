import { skills } from '../data.js'
import { SideLabel } from './SectionLabel.jsx'
import { Database, Lightbulb, Clock, Users, MessageCircle, Shuffle, Brain, Server, LineChart, FileSpreadsheet, CameraIcon } from 'lucide-react'

// Peta nama skill -> ikon. Kalau nama skill di data.js gak ketemu di sini,
// otomatis pakai ikon default. "svg" pakai file logo asli dari public/tech-icons/,
// "lucide" pakai ikon generik untuk yang gak ada logo resminya.
const ICONS = {
  // Web (FE & BE)
  'React.js': { type: 'svg', src: '/tech-icons/react.svg' },
  'FastAPI': { type: 'svg', src: '/tech-icons/fastapi.svg' },
  'HTML': { type: 'svg', src: '/tech-icons/html5.svg' },
  'CSS': { type: 'svg', src: '/tech-icons/css3.svg' },
  'JavaScript': { type: 'svg', src: '/tech-icons/javascript.svg' },
  // Data
  'Python': { type: 'svg', src: '/tech-icons/python.svg' },
  'SQL': { type: 'lucide', Icon: Database },
  'Amazon Redshift': { type: 'svg', src: '/tech-icons/Redshift.svg' },
  'DBeaver': { type: 'svg', src: '/tech-icons/DBeaver.svg' },
  'Excel': { type: 'lucide', Icon: FileSpreadsheet },
  'AWS': { type: 'svg', src: '/tech-icons/AWS.svg' },
  // AI
  'Deep Learning': { type: 'svg', src: '/tech-icons/deep-learning.svg' },
  'Tensorflow / Keras': { type: 'svg', src: '/tech-icons/tensorflow.svg' },
  'Image Processing': { type: 'svg', src: '/tech-icons/image-processing.svg' },
  // Database
  'PostgreSQL': { type: 'svg', src: '/tech-icons/postgresql.svg' },
  'MySQL': { type: 'svg', src: '/tech-icons/mysql.svg' },
  'Git & GitHub': { type: 'svg', src: '/tech-icons/git.svg' },
  'Docker': { type: 'svg', src: '/tech-icons/docker.svg' },
  'MongoDB': { type: 'svg', src: '/tech-icons/mongodb.svg' },
  // Soft skill
  'Problem solving': { type: 'lucide', Icon: Lightbulb },
  'Time Management': { type: 'lucide', Icon: Clock },
  'Teamwork': { type: 'lucide', Icon: Users },
  'Communication': { type: 'lucide', Icon: MessageCircle },
  'Adaptable': { type: 'lucide', Icon: Shuffle },
  'Critical Thinking': { type: 'lucide', Icon: Brain },
  'Documentation': { type: 'lucide', Icon: CameraIcon }
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
          <SkillGroup title="Frontend & Backend" subtitle="Web Development" items={skills.web} fallback={Server} />
          <SkillGroup title="Data Engineering & Analytics" subtitle="Data" items={skills.data} fallback={LineChart} />
          <SkillGroup title="Machine Learning" subtitle="AI" items={skills.ml} fallback={LineChart} />
          <SkillGroup title="Database & Infrastructure" subtitle="Database" items={skills.database} fallback={Database} />
          <SkillGroup title="Project & Interpersonal" subtitle="Soft Skills" items={skills.soft} fallback={Lightbulb} />
        </div>
      </div>
    </section>
  )
}