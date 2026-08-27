import { skills } from '../data.js'
import { SideLabel } from './SectionLabel.jsx'
import { FaCss3Alt } from 'react-icons/fa'
import {
  SiPython, SiReact, SiFastapi, SiTensorflow,
  SiPostgresql, SiGit, SiDocker, SiPandas, SiNumpy,
  SiJupyter, SiMysql, SiMongodb, SiJavascript, SiHtml5,
  SiTailwindcss, SiNodedotjs, SiExpress
} from 'react-icons/si'
import {
  Database, Lightbulb, Clock, Users, MessageCircle,
  Shuffle, Brain, Code2, Server, LineChart, FileSpreadsheet
} from 'lucide-react'

// Peta nama skill -> ikon. Kalau nama skill di data.js gak ketemu di sini,
// otomatis pakai ikon default. Tinggal tambah baris baru kalau nambah skill.
const ICONS = {
  // Web (FE & BE)
  'React.js': SiReact,
  'FastAPI': SiFastapi,
  'Git & GitHub': SiGit,
  'Docker': SiDocker,
  'JavaScript': SiJavascript,
  'HTML': SiHtml5,
  'CSS': FaCss3Alt,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  // Data
  'Python': SiPython,
  'TensorFlow / Keras': SiTensorflow,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'Jupyter': SiJupyter,
  'Excel': FileSpreadsheet,
  // Database
  'PostgreSQL / Supabase': SiPostgresql,
  'SQL': Database,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  // Soft skill
  'Problem solving': Lightbulb,
  'Time Management': Clock,
  'Teamwork': Users,
  'Communication': MessageCircle,
  'Adaptable': Shuffle,
  'Critical Thinking': Brain
}

function SkillCard({ label, Icon }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 bg-bg border border-line rounded-2xl p-6 text-center hover:border-navy hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-0.5 transition-all">
      <Icon className="w-8 h-8 text-navy" strokeWidth={1.75} />
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  )
}

function SkillGroup({ title, subtitle, items, fallback }) {
  if (!items || items.length === 0) return null
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-navy-light mb-1">{subtitle}</h3>
      <h4 className="font-display font-extrabold text-2xl mb-6">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((label) => (
          <SkillCard key={label} label={label} Icon={ICONS[label] || fallback} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line bg-surface overflow-hidden">
      <SideLabel text="SKILLS" />
      <div className="relative">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl">Tools & Technologies</h2>
          <p className="text-muted mt-3">
          Technologies that i use to accomodate my programming needs.
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