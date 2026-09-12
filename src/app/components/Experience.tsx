import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'FlyRank AI',
    role: 'Machine Learning Intern',
    period: 'Jul 2026 – Sep 2026',
    achievements: [
      'Processed multi-tenant search performance data from ~79M-row distributed warehouse (DuckDB/SQL), auditing 92,548 pages across 40 enterprise clients with zero storage bottlenecks.',
      'Engineered domain-informed ranking baseline (striking-distance weights, non-linear CTR shields) achieving 0.64 Precision@50 (1.73x lift) and 0.75 Precision@20 on unseen enterprise domains.',
      'Discovered and proved a 50-percentage-point memorization trap (Random Split P@20: 0.90 vs. Grouped Split: 0.40), preventing production deployment of an overfitted LightGBM model.',
      'Architected a zero-leakage temporal evaluation harness (15-day historical feature window vs. 16-day future label window, 0-day overlap) verified against 7 internal decision flags.',
      'Shipped an automated content-action playbook with interpretable reason codes and a 5-step human-in-the-loop review framework for high-ROI search queries.',
    ],
  },
  {
    company: '10Pearls Pakistan',
    role: 'Data Science Intern',
    period: 'Dec 2025 – Feb 2026',
    achievements: [
      'Architected a production forecasting system automating manual reporting end-to-end on real-time API feeds; XGBoost model achieved RMSE 0.66, R² 0.99, outperforming Random Forest by 20%.',
      'Integrated Hopsworks Feature Store for feature versioning and model registry; GitHub Actions CI/CD eliminated manual retraining overhead across 60+ consecutive operational days.',
      'Engineered time-based, rolling-statistics, and lag features across a fully serverless data-processing stack with hourly ingestion and daily automated retraining pipelines.',
      'Implemented SHAP explainability visualizations and real-time hazard alerts for environmental sensor monitoring.',
    ],
  },
  {
    company: 'DAM TECHHUB',
    role: 'AI/ML Intern',
    period: 'July 2025 – Sept 2025',
    achievements: [
      'Built an AI-powered Resume Analyser for automated text extraction & classification: Logistic Regression + TF-IDF classifier achieving 87% accuracy across 24 job categories on 2,400 documents (sub-1s inference).',
      'Applied prompt engineering with Groq GPT-OSS-120B to build an AI bullet-polish rewriter, and integrated Hugging Face S-BERT for semantic similarity matching (23% precision improvement over keyword-only extraction).',
      'Extended platform with ATS-simulation compatibility across 6 systems (Taleo, Workday, Greenhouse, iCIMS, Lever, Generic), validating structured-data extraction accuracy.',
      'Automated candidate screening workflows, cutting manual document evaluation time and providing match-scored candidate breakdowns.',
    ],
  },
  {
    company: 'Tata Group (Forage)',
    role: 'GenAI Analytics Associate',
    period: 'July 2025 – April 2026',
    achievements: [
      'Executed end-to-end data analytics workflows using Generative AI for financial risk assessment and delinquency prediction.',
      'Conducted exploratory data analysis (EDA) and built ML risk profiling models for customer segmentation to optimize collections decision-making.',
      'Designed an AI-powered collections strategy framework and automated reporting to improve recovery rates and operational efficiency.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-widest mb-3 sm:mb-4">Professional History</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Impact driven <span className="text-zinc-600">experience.</span>
            </h3>
          </motion.div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0d0d12] border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover:border-rose-600/30 transition-all overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left - Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-rose-600/10 border border-rose-600/20 rounded-xl flex items-center justify-center text-rose-500">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-2xl font-bold text-white group-hover:text-rose-500 transition-colors">{exp.company}</h4>
                      <p className="text-rose-600 font-bold text-[9px] sm:text-xs uppercase tracking-widest mt-1">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-widest">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Right - Achievements */}
                <div className="lg:w-2/3">
                  <ul className="space-y-3 sm:space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 sm:gap-4 text-zinc-400 group/item">
                        <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-zinc-700 group-hover/item:text-rose-600 transition-colors flex-shrink-0 mt-1" />
                        <span className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium group-hover/item:text-zinc-200 transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute -top-2 -right-2 sm:top-8 sm:right-12 text-5xl sm:text-7xl font-black text-zinc-900 group-hover:text-rose-950 transition-colors select-none pointer-events-none opacity-50 sm:opacity-100">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
