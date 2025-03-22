'use client'

import React, { useState } from 'react'
import AnimateInView from '@/components/AnimateInView'
import { CurrencyDollarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

interface CalculatorInputs {
  targetAnnualRevenue: number
  workingHoursPerWeek: number
  weeksPerYear: number
  utilization: number
  teamSize: number
  profitMargin: number
}

interface CalculatorResults {
  hourlyRate: number
  monthlyRetainer: number
  projectMinimum: number
  annualPerClient: number
  clientsNeeded: number
}

export default function PricingCalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    targetAnnualRevenue: 500000,
    workingHoursPerWeek: 40,
    weeksPerYear: 48,
    utilization: 70,
    teamSize: 1,
    profitMargin: 30,
  })

  const [results, setResults] = useState<CalculatorResults | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }))
  }

  const calculatePricing = (e: React.FormEvent) => {
    e.preventDefault()

    const totalAnnualHours = inputs.workingHoursPerWeek * inputs.weeksPerYear * (inputs.utilization / 100)
    const revenueWithMargin = inputs.targetAnnualRevenue / (1 - inputs.profitMargin / 100)
    
    const hourlyRate = Math.ceil(revenueWithMargin / (totalAnnualHours * inputs.teamSize))
    const monthlyRetainer = Math.ceil((hourlyRate * totalAnnualHours) / 12)
    const projectMinimum = hourlyRate * 20 // Minimum 20-hour project
    const annualPerClient = monthlyRetainer * 12
    const clientsNeeded = Math.ceil(revenueWithMargin / annualPerClient)

    setResults({
      hourlyRate,
      monthlyRetainer,
      projectMinimum,
      annualPerClient,
      clientsNeeded,
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white">
      <div className="relative isolate pt-28">
        <div className="container-custom py-24 sm:py-32">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Agency Pricing Calculator
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Calculate optimal rates for your agency based on your revenue goals and team capacity.
              </p>
            </div>
          </AnimateInView>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calculator Form */}
              <AnimateInView delay={0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Enter Your Goals
                  </h2>
                  <form onSubmit={calculatePricing} className="mt-8 space-y-6">
                    <div>
                      <label htmlFor="targetAnnualRevenue" className="block text-sm font-medium leading-6 text-gray-900">
                        Target Annual Revenue
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="targetAnnualRevenue"
                          id="targetAnnualRevenue"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          value={inputs.targetAnnualRevenue}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="workingHoursPerWeek" className="block text-sm font-medium leading-6 text-gray-900">
                        Working Hours per Week
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="workingHoursPerWeek"
                          id="workingHoursPerWeek"
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          value={inputs.workingHoursPerWeek}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="weeksPerYear" className="block text-sm font-medium leading-6 text-gray-900">
                        Working Weeks per Year
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="weeksPerYear"
                          id="weeksPerYear"
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          value={inputs.weeksPerYear}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="utilization" className="block text-sm font-medium leading-6 text-gray-900">
                        Utilization Rate (%)
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="utilization"
                          id="utilization"
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          value={inputs.utilization}
                          onChange={handleInputChange}
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Percentage of time spent on billable work
                      </p>
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium leading-6 text-gray-900">
                        Team Size (Billable Members)
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="teamSize"
                          id="teamSize"
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          value={inputs.teamSize}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="profitMargin" className="block text-sm font-medium leading-6 text-gray-900">
                        Target Profit Margin (%)
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          name="profitMargin"
                          id="profitMargin"
                          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          value={inputs.profitMargin}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-md bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                      Calculate Optimal Rates
                    </button>
                  </form>
                </div>
              </AnimateInView>

              {/* Results */}
              <AnimateInView delay={0.2}>
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Recommended Rates
                  </h2>
                  <div className="mt-8 space-y-8">
                    {results ? (
                      <>
                        <div>
                          <h3 className="flex items-center gap-x-2 text-lg font-semibold text-gray-900">
                            <CurrencyDollarIcon className="h-5 w-5 text-brand-primary" />
                            Hourly Rate
                          </h3>
                          <p className="mt-2 text-3xl font-bold text-brand-primary">
                            {formatCurrency(results.hourlyRate)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Per billable hour
                          </p>
                        </div>

                        <div>
                          <h3 className="flex items-center gap-x-2 text-lg font-semibold text-gray-900">
                            <ClockIcon className="h-5 w-5 text-brand-primary" />
                            Monthly Retainer
                          </h3>
                          <p className="mt-2 text-3xl font-bold text-brand-primary">
                            {formatCurrency(results.monthlyRetainer)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Recommended monthly retainer
                          </p>
                        </div>

                        <div>
                          <h3 className="flex items-center gap-x-2 text-lg font-semibold text-gray-900">
                            <UserGroupIcon className="h-5 w-5 text-brand-primary" />
                            Client Strategy
                          </h3>
                          <p className="mt-2 text-3xl font-bold text-brand-primary">
                            {results.clientsNeeded} Clients
                          </p>
                          <p className="text-sm text-gray-600">
                            At {formatCurrency(results.annualPerClient)} per year each
                          </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                          <h4 className="font-semibold text-gray-900">Project Pricing</h4>
                          <p className="mt-2 text-sm text-gray-600">
                            Minimum project size should be {formatCurrency(results.projectMinimum)} (20 hours).
                            Consider value-based pricing for larger projects to maximize profitability.
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-600">
                        Enter your goals and click calculate to see recommended rates for your agency.
                      </p>
                    )}
                  </div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 