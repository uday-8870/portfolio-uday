import React from 'react'

// Minimalistic single-file portfolio component (TailwindCSS assumed)
// Default export a React component

export default function Portfolio() {
  const data = {
    name: 'Udayadithya Reddy Singireddy',
    title: 'B.Tech CSE - Artificial Intelligence (Class of 2025)',
    email: 'udayadithyareddysingireddy@gmail.com',
    phone: '+91 91107 18345',
    location: 'Tirupati, India',
    linkedin: 'https://www.linkedin.com/in/uday-adithya-singireddy-678a8b26b',
    github: 'https://github.com/uday-8870',
    leetcode: 'https://leetcode.com/u/udayleetco/',
    hackerrank: 'https://www.hackerrank.com/profile/21121A3159',

    about:
      'I am a final-year Computer Science (AI) undergraduate with hands-on experience in machine learning, NLP, and full‑stack development. I build practical ML systems, deployable web apps, and lightweight models for edge deployment.',

    education: [
      {
        degree: 'B.Tech, Computer Science and Engineering (AI)',
        school: 'Sree Vidyanikethan Engineering College, Tirupati',
        years: '2021 — 2025',
        cgpa: '8.8 / 10'
      },
      {
        degree: 'Intermediate (MPC)',
        school: 'Sree Chaitanya Junior College, Vijayawada',
        years: '2019 — 2021',
        cgpa: '8.6 / 10'
      },
      {
        degree: 'Secondary School',
        school: 'NDR KKR Gowtham School, Vijayawada',
        years: '2017 — 2019',
        cgpa: '9.8 / 10'
      }
    ],

    skills: {
      languages: ['Python', 'Java', 'C'],
      web: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Flask'],
      mobile: ['Flutter'],
      ml: ['PyTorch', 'T5 (NLP)', 'OpenCV', 'Tesseract OCR'],
      concepts: ['Data Structures & Algorithms', 'Machine Learning', 'NLP']
    },

    projects: [
      {
        title: 'DSA Viz-AI — Intelligent Data Structure Recommender',
        stack: 'React | Flask | Python | T5 NLP',
        desc:
          'An AI-driven tool that recommends optimal data structures from natural language problem descriptions. Uses a T5-based NLP model and heuristic ranking; supports multi-label prediction and session history.',
        link: ''
      },
      {
        title: 'Forest Fire Detection (MSA-Net with SE blocks)',
        stack: 'Keras/TensorFlow | CNN | Attention',
        desc:
          'Lightweight Multi-Scale Attention Network (MSA‑Net) with Squeeze-and-Excitation blocks for real-time forest fire detection. Achieves high accuracy while remaining efficient for edge deployment.',
        link: ''
      },
      {
        title: 'NLP Text Summarizer (T5)',
        stack: 'Flask | PyTorch | T5',
        desc: 'A web app that uses T5 transformer to generate concise summaries from user input text.',
        link: 'https://github.com/uday-8870/nlp-text-summeriser'
      },
      {
        title: 'PDF Image Text Extractor (OCR pipeline)',
        stack: 'Python | OpenCV | Tesseract',
        desc:
          'Extracts images and text from scanned PDFs, automating conversion to editable text files. Built a reliable pipeline for preprocessing and OCR.',
        link: 'https://github.com/uday-8870/ocr'
      },
      {
        title: 'Ashok — Desktop Assistant',
        stack: 'Flask | Python',
        desc: 'A modular desktop assistant that supports commands, weather lookups, and system actions; designed for future voice integration.',
        link: 'https://github.com/uday-8870/Ashok-ur-assistant'
      }
    ],

    internships: [
      {
        org: 'Salesforce (Virtual Internship)',
        role: 'Developer (Apex / LWC / Flows)',
        desc: 'Configured enterprise apps, worked with API integrations and process automation.'
      },
      {
        org: 'AICTE – Altair RapidMiner',
        role: 'Data Science Intern',
        desc: 'Training in RapidMiner, data mining, and predictive analytics.'
      }
    ],

    certifications: [
      'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
      'Unsupervised & Reinforcement Learning — Coursera',
      'Data Science Master – Altair RapidMiner (AICTE)'
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold">{data.name}</h1>
            <p className="text-sm text-gray-600">{data.title}</p>
            <div className="mt-3 text-sm text-gray-600">
              <span>{data.location} • </span>
              <a href={`mailto:${data.email}`} className="underline">{data.email}</a>
              <span> • {data.phone}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <nav className="text-sm">
              <a href={data.linkedin} className="block hover:underline">LinkedIn</a>
              <a href={data.github} className="block hover:underline">GitHub</a>
              <a href={data.leetcode} className="block hover:underline">LeetCode</a>
            </nav>
          </div>
        </header>

        {/* Grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column: About / Skills / Education */}
          <section className="md:col-span-1 space-y-6">
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-medium mb-2">About</h2>
              <p className="text-sm text-gray-700">{data.about}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-medium mb-3">Skills</h2>
              <div className="text-sm text-gray-700 space-y-2">
                <div><strong>Languages:</strong> {data.skills.languages.join(', ')}</div>
                <div><strong>Web:</strong> {data.skills.web.join(', ')}</div>
                <div><strong>Mobile:</strong> {data.skills.mobile.join(', ')}</div>
                <div><strong>ML / Tools:</strong> {data.skills.ml.join(', ')}</div>
                <div><strong>Concepts:</strong> {data.skills.concepts.join(', ')}</div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-medium mb-3">Education</h2>
              <ul className="text-sm text-gray-700 space-y-2">
                {data.education.map((e, i) => (
                  <li key={i}>
                    <div className="font-medium">{e.degree}</div>
                    <div className="text-xs text-gray-600">{e.school} • {e.years} • CGPA {e.cgpa}</div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Right column: Projects / Internships / Certifications */}
          <section className="md:col-span-2 space-y-6">
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-medium mb-4">Selected Projects</h2>
              <div className="space-y-4">
                {data.projects.map((p, idx) => (
                  <article key={idx} className="p-4 rounded-md bg-gray-50 border">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{p.title}</h3>
                        <div className="text-xs text-gray-600">{p.stack}</div>
                        <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
                      </div>
                      {p.link && (
                        <div className="ml-4 text-sm">
                          <a href={p.link} className="underline">Source</a>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-medium mb-3">Internships</h2>
              <ul className="text-sm text-gray-700 space-y-3">
                {data.internships.map((i, k) => (
                  <li key={k}>
                    <div className="font-medium">{i.org} — {i.role}</div>
                    <div className="text-xs text-gray-600">{i.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-medium mb-3">Certifications & Achievements</h2>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                {data.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
                <li>5★ Java on HackerRank; 180+ LeetCode problems solved.</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg flex items-center justify-between">
              <div>
                <h2 className="text-md font-medium">Get in touch</h2>
                <div className="text-sm text-gray-600 mt-1">{data.email} • {data.phone}</div>
              </div>
              <div>
                <a href={data.linkedin} className="px-3 py-2 border rounded-md text-sm">LinkedIn</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-6 text-center text-xs text-gray-500">
          Built with care — minimalist and responsive. • Last updated: 2025
        </footer>
      </div>
    </div>
  )
}
