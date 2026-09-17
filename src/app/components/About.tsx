import { motion } from 'motion/react';
import { 
  Brain, 
  Code2, 
  Database, 
  Sparkles, 
  Cpu, 
  Cloud, 
  GitBranch, 
  Terminal, 
  Layers, 
  Search, 
  ShieldCheck, 
  Zap,
  Workflow,
  CheckCircle2,
  GraduationCap,
  Award,
  TrendingUp,
  Server
} from 'lucide-react';

const impactMetrics = [
  {
    value: '~79M+',
    label: 'Data Rows Audited',
    detail: 'Distributed DuckDB & SQL processing across 40 enterprise clients at FlyRank AI',
    icon: Database,
  },
  {
    value: '60+ Days',
    label: 'Autonomous Uptime',
    detail: 'Zero-intervention multi-agent & CI/CD retraining pipelines in production',
    icon: Workflow,
  },
  {
    value: '1.73x Lift',
    label: 'Precision Improvement',
    detail: '0.75 Precision@20 on unseen enterprise domains with zero-leakage evaluation',
    icon: TrendingUp,
  },
  {
    value: '< 1s',
    label: 'Inference Latency',
    detail: 'Sub-second real-time API scoring, ATS matching & semantic embeddings',
    icon: Zap,
  },
];

const valuePillars = [
  {
    title: 'Autonomous LLM Agents & Orchestration',
    subtitle: 'Beyond Toy Demos',
    icon: Brain,
    description:
      'Designing stateful multi-agent workflows with LangGraph (7-node StateGraphs and ReAct loops). Implementing dynamic switching across Groq LLMs with per-model TPM token budgets and multi-tier safety validation for reliable autonomous execution.',
    tags: ['LangGraph', 'ReAct Loops', 'Multi-Agent StateGraph', 'Groq API', 'Prompt Evals'],
  },
  {
    title: 'Production MLOps & Data Integrity',
    subtitle: 'Zero-Leakage Systems',
    icon: Server,
    description:
      'Eliminating silent production failures through zero-leakage temporal evaluation harnesses (preventing critical 50% memorization traps). Automating model registries with Hopsworks Feature Store and GitHub Actions CI/CD to eliminate manual retraining.',
    tags: ['Hopsworks', 'GitHub Actions CI/CD', 'DuckDB', 'SHAP Explainability', 'FastAPI / Docker'],
  },
  {
    title: 'Enterprise Automation & Measurable ROI',
    subtitle: 'Impact-Driven Engineering',
    icon: Zap,
    description:
      'Translating complex model outputs into automated content playbooks with interpretable reason codes and 5-step human-in-the-loop review frameworks. Building trigger-based automation workflows covering ATS simulation and financial risk scoring.',
    tags: ['Human-in-the-Loop', 'ActivePieces', 'ATS Simulation', 'Risk Modeling', 'Stable Diffusion'],
  },
];

const skillCategories = [
  {
    category: 'LLM Orchestration & Agents',
    skills: [
      { name: 'LangGraph', icon: Layers },
      { name: 'LangChain', icon: GitBranch },
      { name: 'RAG Pipelines', icon: Database },
      { name: 'Prompt Engineering', icon: Brain },
      { name: 'LLM Evals', icon: ShieldCheck },
      { name: 'OpenAI API', icon: Sparkles },
      { name: 'Groq API (GPT-OSS-120B)', icon: Zap },
      { name: 'S-BERT Embeddings', icon: Search },
    ],
  },
  {
    category: 'MLOps & Automation Pipelines',
    skills: [
      { name: 'Hopsworks Feature Store', icon: Database },
      { name: 'GitHub Actions CI/CD', icon: GitBranch },
      { name: 'Docker', icon: Layers },
      { name: 'FastAPI', icon: Zap },
      { name: 'Streamlit', icon: Code2 },
      { name: 'MLflow', icon: Cloud },
      { name: 'ActivePieces Workflows', icon: Workflow },
      { name: 'AWS Cloud', icon: Cloud },
    ],
  },
  {
    category: 'Data Engineering & Analytics',
    skills: [
      { name: 'Python', icon: Terminal },
      { name: 'SQL & DuckDB', icon: Database },
      { name: 'SHAP Explainability', icon: Search },
      { name: 'Chroma Vector DB', icon: Database },
      { name: 'Semantic Search', icon: Search },
      { name: 'Feature Engineering', icon: Cpu },
      { name: 'Cosine Similarity', icon: Layers },
      { name: 'TF-IDF', icon: Code2 },
    ],
  },
  {
    category: 'ML / DL & Generative Vision',
    skills: [
      { name: 'PyTorch', icon: Brain },
      { name: 'TensorFlow', icon: Cpu },
      { name: 'Scikit-Learn', icon: Code2 },
      { name: 'LightGBM', icon: Zap },
      { name: 'XGBoost', icon: Zap },
      { name: 'Hugging Face', icon: Sparkles },
      { name: 'Stable Diffusion (Inpainting)', icon: Sparkles },
      { name: 'OpenCV', icon: Search },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#09090b] overflow-hidden">
      {/* Subtle background glow accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-rose-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-rose-600/10 border border-rose-600/20 rounded-full text-rose-500 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              About The Engineer & Value Proposition
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Architecting autonomous systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">
                production-grade rigor.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Narrative & Storytelling Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20 sm:mb-24">
          {/* Left Column: Narrative Story */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal"
          >
            <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
              I am an <span className="text-rose-500 font-semibold">AI & Autonomous Systems Engineer</span> specializing in 
              LLM agent orchestration, enterprise RAG, and production MLOps pipelines that bridge the gap between 
              experimental models and dependable business automation.
            </p>

            <p>
              At <strong className="text-white font-semibold">FlyRank AI</strong>, I queried and processed multi-tenant search performance 
              across a <span className="text-zinc-200 font-semibold">~79M-row distributed warehouse (DuckDB/SQL)</span> auditing 92,500+ pages for 40 enterprise clients with zero storage bottlenecks. 
              I deployed ranking baselines achieving <span className="text-rose-400 font-semibold">0.75 Precision@20</span> on unseen enterprise domains and engineered a zero-leakage temporal evaluation harness—identifying a critical 50-percentage-point memorization trap to safeguard production deployment.
            </p>

            <p>
              At <strong className="text-white font-semibold">10Pearls Pakistan</strong>, I architected a production forecasting system automating manual reporting end-to-end on real-time API feeds. 
              By integrating the <span className="text-zinc-200 font-semibold">Hopsworks Feature Store</span> and <span className="text-zinc-200 font-semibold">GitHub Actions CI/CD</span>, we eliminated manual retraining overhead across <span className="text-rose-400 font-semibold">60+ consecutive operational days</span>.
            </p>

            <p>
              At <strong className="text-white font-semibold">DAM TECHHUB</strong>, I engineered an AI-powered resume classifier (87% accuracy across 24 job categories on 2,400+ documents), pairing <span className="text-zinc-200 font-semibold">Groq GPT-OSS-120B</span> prompt engineering with <span className="text-zinc-200 font-semibold">Hugging Face S-BERT</span> semantic embeddings—validating structured data extraction across 6 enterprise ATS platforms with sub-1s inference.
            </p>

            <p className="pt-2 border-l-2 border-rose-600 pl-4 text-zinc-300 italic text-sm sm:text-base">
              "Recruiters and engineering teams don't just need people who prompt LLMs—they need engineers who can orchestrate fault-tolerant multi-agent graphs, prevent data leakage, and deliver production systems that stay up 24/7."
            </p>
          </motion.div>

          {/* Right Column: Key Credentials & Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#0d0d12] border border-zinc-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/5 rounded-bl-full pointer-events-none" />

            <h3 className="text-sm sm:text-base font-semibold text-rose-500 tracking-normal mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-500" aria-hidden="true" />
              Verified Background & Education
            </h3>

            <div className="space-y-6">
              {/* Education */}
              <div className="flex items-start gap-4 pb-6 border-b border-zinc-800/80">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-rose-500 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">BS in Artificial Intelligence</h4>
                  <p className="text-xs font-semibold text-rose-500 mt-1">National University of Modern Languages (NUML)</p>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">Islamabad, Pakistan • 2022 – 2026</p>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    <span className="text-zinc-300 font-semibold">Final Year Project:</span> AI Virtual Try-On System fine-tuning Stable Diffusion Inpainting with OpenPose & pose estimation (sub-3s inference on T4 GPU).
                  </p>
                </div>
              </div>

              {/* Professional Certifications */}
              <div className="flex items-start gap-4 pb-6 border-b border-zinc-800/80">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-rose-500 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">LangChain for LLM Application Development</h4>
                    <p className="text-xs font-semibold text-rose-500">DeepLearning.AI • Andrew Ng</p>
                    <p className="text-xs text-zinc-400 mt-1">Agents, memory, tools, RAG architectures, and evaluation strategies.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">AWS AI Practitioner</h4>
                    <p className="text-xs font-semibold text-rose-500">Amazon Web Services • Udacity</p>
                    <p className="text-xs text-zinc-400 mt-1">Cloud AI deployment, responsible AI governance, and scalable ML workflows.</p>
                  </div>
                </div>
              </div>

              {/* Engagement Highlights */}
              <div className="pt-1">
                <h4 className="text-xs font-semibold text-zinc-300 tracking-wide mb-3">Enterprise Engagements</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">
                    FlyRank AI (ML Intern)
                  </span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">
                    10Pearls (Data Science Intern)
                  </span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">
                    DAM TECHHUB (AI/ML Intern)
                  </span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">
                    Tata Group (GenAI Financial Risk)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quantified Impact Metrics Bar */}
        <div className="mb-20 sm:mb-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0d0d12] border border-zinc-800 rounded-2xl p-5 sm:p-6 hover:border-rose-600/40 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white group-hover:text-rose-500 transition-colors tracking-tight">
                      {metric.value}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:border-rose-600/30 transition-all">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider mb-1">
                      {metric.label}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-snug">
                      {metric.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* What I Bring to Your Team — 3 Core Pillars */}
        <div className="mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-xs font-bold text-rose-500 uppercase tracking-[0.2em] mb-3">
              Why Recruiters & Tech Leads Hire Me
            </h3>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Three Pillars of Engineering Impact
            </h4>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {valuePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-[#0d0d12] border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col hover:border-rose-600/40 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-600/10 group-hover:border-rose-600/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-rose-500 tracking-wider block">
                        {pillar.subtitle}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors leading-snug">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 font-normal">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-zinc-800/80">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical Stack Matrix */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-zinc-800 pb-6"
          >
            <div>
              <h3 className="text-xs font-bold text-rose-500 uppercase tracking-[0.2em] mb-2">
                Core Competencies
              </h3>
              <h4 className="text-2xl sm:text-3xl font-black text-white">
                Technical Stack & Production Tooling
              </h4>
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Directly aligned with CV & verifiable repositories
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0d0d12] border border-zinc-800 rounded-2xl p-5 sm:p-6 flex flex-col"
              >
                <h4 className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-4 pb-3 border-b border-zinc-800/80">
                  {cat.category}
                </h4>
                <div className="space-y-2 flex-1">
                  {cat.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 px-3 py-2 bg-zinc-900/70 border border-zinc-800/60 rounded-lg hover:border-rose-600/30 hover:bg-zinc-800/50 transition-all group"
                      >
                        <Icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-rose-500 transition-colors shrink-0" />
                        <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}