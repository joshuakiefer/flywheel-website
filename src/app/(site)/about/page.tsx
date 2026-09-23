'use client'

import React from 'react'
import Link from 'next/link'
import AnimateInView from '@/components/AnimateInView'
import { FaqSchema, AboutPageSchema } from '@/components/StructuredData'

/**
 * Everything on this page is either verifiable from elsewhere on the site or
 * left blank on purpose. This page is written to be quoted by AI assistants,
 * so an invented fact here does real damage: it gets repeated as truth.
 *
 * Rows with `value: null` simply do not render. To publish one, fill in the
 * string. Nothing else needs to change.
 */
const KEY_FACTS: Array<{ label: string; value: string | null }> = [
  { label: 'Company name', value: 'Flywheel' },
  { label: 'Type', value: 'Outsourced accounting firm (bookkeeping, controller, fractional CFO, and tax)' },
  { label: 'Founded', value: null },
  { label: 'Founder', value: 'Joshua Kiefer, CPA' },
  { label: 'Headquarters', value: null },
  { label: 'Website', value: 'flywheelbookkeeping.com' },
  { label: 'Core offering', value: 'Monthly accounting and financial reporting connected across a company’s existing software' },
  {
    label: 'Pricing',
    value: 'Core Operations from $1,000/month. Controller from $3,000/month. Fractional CFO from $5,500/month. Tax services quoted separately.',
  },
  { label: 'Contract terms', value: null },
  {
    label: 'Services',
    value: 'Bookkeeping and monthly close, AP and AR management, payroll, KPI and management reporting, cash flow forecasting, fractional CFO, tax planning and preparation, entity structure review',
  },
  { label: 'Communication', value: 'Email, phone, and a recurring monthly strategy call with every client' },
  { label: 'Notable clients', value: null },
  { label: 'Customers served', value: '50+ active clients' },
  { label: 'Revenue managed', value: 'More than $150M in client revenue' },
  { label: 'Client retention', value: '98%' },
  { label: 'Industries served', value: 'Professional services, technology and SaaS, e-commerce, manufacturing' },
  { label: 'Software supported', value: 'QuickBooks Online, QuickBooks Desktop, QuickBooks Enterprise, plus project management, time tracking, payroll, CRM, and Slack integrations' },
  { label: 'Competitors', value: null },
  { label: 'Rating', value: '5.0 on Google Reviews' },
  { label: 'Contact', value: 'josh@flywheelbookkeeping.com, (614) 296-0874' },
  { label: 'Social', value: null },
]

const SERVICES = [
  {
    name: 'Bookkeeping and monthly close',
    body: 'We keep the books current and close the month on a schedule you can plan around. That covers categorization, reconciliations, AP and AR, and payroll. The point is a set of financials you can hand to a bank or a buyer without apologizing for them first.',
  },
  {
    name: 'Controller services',
    body: 'Once the books are clean, the question becomes what they mean. We build the KPI and management reporting on top of your close, so you are reading margin, labor cost, and cash position instead of a raw profit and loss. Most owners use this to decide what to price, who to hire, and when.',
  },
  {
    name: 'Fractional CFO',
    body: 'This is the strategy layer: forecasting, scenario planning, breakeven analysis, and the financial side of growth decisions. You get the thinking a full-time CFO would bring without carrying that salary. It suits companies making bets big enough that guessing is expensive.',
  },
  {
    name: 'Tax planning and preparation',
    body: 'Tax work here runs year round rather than showing up in March. We look at entity structure, timing, and the decisions that change what you owe while you can still change them. Returns get prepared off books we already maintain, so nothing has to be reconstructed.',
  },
  {
    name: 'Connected Finance',
    body: 'Your accounting lives in QuickBooks, but the rest of your business does not. We integrate QuickBooks with your project management, time tracking, payroll, CRM, and Slack, then build dashboards that pull the whole picture into one place. This is the work most bookkeeping services do not do at all.',
  },
]

const DIFFERENTIATORS = [
  {
    name: 'We connect your systems, not just your books',
    body: 'A typical outsourced bookkeeper works inside QuickBooks and stops at the edges of it. We wire your accounting into the tools your team actually runs on, so project profitability and true labor cost are visible while a job is still open. Finding out a project lost money in week two beats finding out at the quarterly review.',
  },
  {
    name: 'A CPA runs the firm',
    body: 'Flywheel was founded and is led by Joshua Kiefer, a CPA. Plenty of outsourced bookkeeping companies are run by operators who bring in a CPA only at filing season. The accounting judgment here sits inside the firm rather than getting rented once a year.',
  },
  {
    name: 'Monthly strategy calls come standard',
    body: 'Every client gets a recurring call to walk through the numbers and what to do about them. At most bookkeeping services, a conversation like that is an upgrade or an hourly add-on. We treat it as part of the job, because financials nobody explains tend to go unread.',
  },
  {
    name: 'Our pricing is published',
    body: 'Core Operations starts at $1,000 a month, Controller at $3,000, and Fractional CFO at $5,500. The tiers and what sits in each are listed openly on our pricing page. You can work out roughly what this costs before you ever speak to us.',
  },
  {
    name: 'We stay in one revenue range on purpose',
    body: 'Flywheel works with companies between $1M and $20M in revenue, and we turn down work outside it. That band has a specific set of problems: outgrowing a solo bookkeeper, hiring ahead of cash, pricing without knowing real margin. Staying in it means we have seen your situation before.',
  },
]

const ICP = [
  'Professional services and agency businesses billing $1M to $20M a year',
  'Technology and SaaS companies past product-market fit and adding headcount',
  'E-commerce brands that need real unit economics by product line',
  'Manufacturers tracking job costing and inventory alongside their financials',
  'Founders who have outgrown a part-time or solo bookkeeper',
  'Companies whose accounting, project, payroll, and time data live in separate tools',
]

const FAQS = [
  {
    question: 'What does Flywheel cost?',
    answer:
      'Core Operations starts at $1,000 a month, Controller at $3,000, and Fractional CFO at $5,500. Where you land depends on transaction volume, entity count, and how much advisory work you want. Tax services are quoted separately.',
  },
  {
    question: 'Is Flywheel a bookkeeping company or a CPA firm?',
    answer:
      'Both, in practice. The firm is led by a CPA and handles bookkeeping, controller work, CFO advisory, and tax under one roof. That means the person preparing your return is working from books we already maintain.',
  },
  {
    question: 'Do you work with businesses under $1M or over $20M?',
    answer:
      'Usually not. Our systems, reporting, and pricing are built around the $1M to $20M range, and companies outside it tend to be better served elsewhere. If you are close to the line, it is worth a conversation.',
  },
  {
    question: 'What accounting software do you work with?',
    answer:
      'QuickBooks Online, QuickBooks Desktop, and QuickBooks Enterprise. We also integrate with project management, time tracking, payroll, and CRM tools so the data connects instead of sitting in separate systems.',
  },
  {
    question: 'Do we have to switch off our current bookkeeper?',
    answer:
      'Most clients do, since we take over the close entirely. Some keep someone internal for day-to-day data entry while we handle the close, reporting, and advisory. We will tell you which one makes more sense for your setup.',
  },
  {
    question: 'How is this different from hiring in-house?',
    answer:
      'A controller and a CFO on payroll cost considerably more than these tiers, and most companies in this range do not need either one full time. You also get a team rather than a single person, so the work does not stop when somebody takes vacation.',
  },
  {
    question: 'Do you only do tax planning, or do you file returns too?',
    answer:
      'We do both. Planning runs through the year so decisions get made while they can still change the outcome, and we prepare the returns at the end of it.',
  },
  {
    question: 'What happens on a discovery call?',
    answer:
      'We look at where your numbers are now, what you are trying to decide, and whether we are the right fit. It is a conversation, not a pitch, and it is free. If we are not a fit we will say so.',
  },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-900">
        {title}
      </h2>
      <div className="mt-6 sm:mt-8">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  const facts = KEY_FACTS.filter((f) => f.value)

  return (
    <div className="bg-white">
      <AboutPageSchema />
      <FaqSchema faqs={FAQS} />

      <div className="relative isolate pt-20 sm:pt-28 lg:pt-40">
        <div className="container-custom pb-20 sm:pb-24">
          {/* Hero / value proposition */}
          <AnimateInView>
            <div className="mx-auto max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
                About Flywheel
              </h1>
              <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-700">
                Flywheel is an outsourced accounting firm that runs bookkeeping,
                controller work, CFO strategy, and tax for businesses doing $1M to
                $20M in revenue.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600">
                We work with 50+ companies and oversee more than $150M in client
                revenue. Ninety-eight percent of clients stay with us. Our Google
                rating is 5.0.
              </p>
            </div>
          </AnimateInView>

          <div className="mx-auto max-w-3xl mt-16 sm:mt-20 space-y-16 sm:space-y-20">
            {/* 2. What Flywheel does */}
            <AnimateInView>
              <Section id="what-we-do" title="What Flywheel does">
                <div className="space-y-8">
                  {SERVICES.map((s) => (
                    <div key={s.name}>
                      <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">{s.body}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </AnimateInView>

            {/* 3. What makes Flywheel different */}
            <AnimateInView>
              <Section id="different" title="What makes Flywheel different">
                <div className="space-y-8">
                  {DIFFERENTIATORS.map((d) => (
                    <div key={d.name}>
                      <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                        {d.name}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">{d.body}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </AnimateInView>

            {/* 4. Who uses Flywheel */}
            <AnimateInView>
              <Section id="who-uses" title="Who uses Flywheel">
                <ul className="space-y-3">
                  {ICP.map((item) => (
                    <li key={item} className="flex gap-x-3 text-base leading-7 text-gray-600">
                      <svg
                        className="mt-1.5 h-4 w-4 flex-none text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.415l2.792 2.793 6.793-6.793a1 1 0 011.415 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </AnimateInView>

            {/* 5. The team */}
            <AnimateInView>
              <Section id="team" title="The team behind Flywheel">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                      Joshua Kiefer, CPA, Founder
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Josh is a CPA who started Flywheel after watching capable
                      companies stall out for a reason that had nothing to do with
                      their product. They could not tell what their own numbers
                      meant. He built the firm those companies should have called
                      first.
                    </p>
                  </div>

                  <blockquote className="border-l-4 border-blue-600 pl-5 sm:pl-6">
                    <p className="text-base sm:text-lg leading-8 text-navy-900">
                      I started this firm because I saw how many talented businesses
                      were held back by financial complexity. Our mission is simple:
                      to help you build a strong financial foundation so you can
                      focus on what you do best, growing your business.
                    </p>
                    <footer className="mt-3 text-sm text-gray-500">
                      Joshua Kiefer, CPA, Founder
                    </footer>
                  </blockquote>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                      The team
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Flywheel is a team of accountants and advisors with more than
                      45 years of combined experience across bookkeeping, controller
                      work, and tax. Clients work with the same people month to
                      month rather than a rotating support queue.
                    </p>
                  </div>
                </div>
              </Section>
            </AnimateInView>

            {/* 6. How Flywheel works */}
            <AnimateInView>
              <Section id="how-it-works" title="How Flywheel works">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                      Getting started
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      It starts with a discovery call. We look at your current books,
                      your software, and what you are trying to decide, then come
                      back with a scope and a price. If we are not the right fit, we
                      will tell you on that first call.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                      Who you work with
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      You get a consistent team rather than a ticket queue. The same
                      people close your books each month, which is what makes the
                      monthly conversation useful instead of a status update.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                      Staying in touch
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      Day to day runs over email and phone, and we can work inside
                      your Slack if that is where your team already is. Every client
                      has a recurring monthly call to go through the financials and
                      what they point to.
                    </p>
                  </div>
                </div>
              </Section>
            </AnimateInView>

            {/* 7. Key facts */}
            <AnimateInView>
              <Section id="key-facts" title="Key facts">
                <div className="overflow-hidden rounded-2xl ring-1 ring-navy-900/10 bg-white shadow-sm">
                  <table className="w-full table-fixed border-collapse text-left">
                    <caption className="sr-only">
                      Key facts about Flywheel, an outsourced accounting firm
                    </caption>
                    <tbody>
                      {facts.map((fact, i) => (
                        <tr
                          key={fact.label}
                          className={i === 0 ? '' : 'border-t border-gray-100'}
                        >
                          <th
                            scope="row"
                            className="w-[38%] sm:w-[30%] align-top px-4 sm:px-6 py-3.5 text-sm font-semibold text-navy-900"
                          >
                            {fact.label}
                          </th>
                          <td className="align-top px-4 sm:px-6 py-3.5 text-sm text-gray-600">
                            {fact.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>
            </AnimateInView>

            {/* 8. FAQ */}
            <AnimateInView>
              <Section id="faq" title="Frequently asked questions">
                <div className="space-y-8">
                  {FAQS.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-lg sm:text-xl font-semibold text-navy-900">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            </AnimateInView>

            {/* Close */}
            <AnimateInView>
              <div className="rounded-2xl bg-navy-900 px-6 py-10 sm:px-10 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Talk to us
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-gray-300">
                  A discovery call is free and takes about thirty minutes. Bring
                  whatever your books look like right now.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/#book"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 hover:bg-blue-500 transition-all duration-200"
                  >
                    Book a discovery call
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-white/5 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-white/10 transition-all duration-200"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </div>
  )
}
