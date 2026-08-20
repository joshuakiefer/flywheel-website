'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Row = { service: string; flywheel: boolean; typical: boolean }
type Group = { category: string; rows: Row[] }

const groups: Group[] = [
  {
    category: 'Bookkeeping & Accounting',
    rows: [
      { service: 'Monthly bookkeeping & clean financials', flywheel: true, typical: true },
      { service: 'AP & AR management', flywheel: true, typical: false },
      { service: 'Payroll processing', flywheel: true, typical: true },
      { service: 'KPI & metrics reporting', flywheel: true, typical: false },
    ],
  },
  {
    category: 'Strategic Leadership',
    rows: [
      { service: 'Fractional CFO guidance', flywheel: true, typical: false },
      { service: 'Cash flow forecasting', flywheel: true, typical: false },
      { service: 'Monthly strategy calls', flywheel: true, typical: false },
      { service: 'Breakeven & scenario planning', flywheel: true, typical: false },
    ],
  },
  {
    category: 'Tax & Compliance',
    rows: [
      { service: 'Annual tax preparation', flywheel: true, typical: true },
      { service: 'Proactive year-round tax planning', flywheel: true, typical: false },
      { service: 'Entity structure review', flywheel: true, typical: false },
    ],
  },
  {
    category: 'Connected Finance',
    rows: [
      { service: 'Integrates your existing tools & systems', flywheel: true, typical: false },
      { service: 'Real-time project profitability', flywheel: true, typical: false },
      { service: 'True labor cost visibility', flywheel: true, typical: false },
      { service: 'One dashboard across every system', flywheel: true, typical: false },
    ],
  },
]

function Check() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-emerald-600" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.415l2.792 2.793 6.793-6.793a1 1 0 011.415 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Included</span>
    </span>
  )
}

function Dash() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gray-400" aria-hidden="true">
        <path fillRule="evenodd" d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
      <span className="sr-only">Not included</span>
    </span>
  )
}

export default function ComparisonTable() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-12 sm:mb-16"
        >
          <span className="inline-block py-1.5 px-3 mb-5 text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 rounded-full">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            What Sets Flywheel <span className="text-emerald-600">Apart</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Most bookkeepers close your books and hand you a report. We connect your
            systems, surface the numbers that drive decisions, and stay in the room
            while you grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-emerald-600/5 ring-1 ring-gray-900/5 bg-white">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th
                    scope="col"
                    className="px-4 sm:px-6 py-4 text-sm font-semibold text-gray-900"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-4 text-center text-xs sm:text-sm font-semibold text-emerald-700 w-[84px] sm:w-40"
                  >
                    Flywheel
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-4 text-center text-xs sm:text-sm font-semibold text-gray-500 w-[84px] sm:w-40"
                  >
                    <span className="sm:hidden">Typical</span>
                    <span className="hidden sm:inline">Typical Bookkeeper</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => (
                  <React.Fragment key={group.category}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="px-4 sm:px-6 pt-6 pb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-white"
                      >
                        {group.category}
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.service} className="border-t border-gray-100">
                        <th
                          scope="row"
                          className="px-4 sm:px-6 py-3.5 text-sm font-normal text-gray-700 align-middle"
                        >
                          {row.service}
                        </th>
                        <td className="px-2 py-3.5 text-center bg-emerald-50/40">
                          {row.flywheel ? <Check /> : <Dash />}
                        </td>
                        <td className="px-2 py-3.5 text-center">
                          {row.typical ? <Check /> : <Dash />}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
