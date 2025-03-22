'use client'

import React, { useState } from 'react'
import AnimateInView from '@/components/AnimateInView'
import { CurrencyDollarIcon, ArrowTrendingUpIcon, ChartBarIcon } from '@heroicons/react/24/outline'

interface CalculatorInputs {
  revenue: number
  directCosts: number
  overhead: number
  employeeSalaries: number
  ownerSalary: number
}

interface CalculatorResults {
  grossProfit: number
  grossProfitMargin: number
  operatingProfit: number
  operatingProfitMargin: number
  netProfit: number
  netProfitMargin: number
}

export default function ProfitabilityCalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    revenue: 0,
    directCosts: 0,
    overhead: 0,
    employeeSalaries: 0,
    ownerSalary: 0,
  })

  const [results, setResults] = useState<CalculatorResults | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }))
  }

  const calculateProfitability = (e: React.FormEvent) => {
    e.preventDefault()

    const grossProfit = inputs.revenue - inputs.directCosts
    const grossProfitMargin = (grossProfit / inputs.revenue) * 100

    const operatingProfit = grossProfit - inputs.overhead - inputs.employeeSalaries
    const operatingProfitMargin = (operatingProfit / inputs.revenue) * 100

    const netProfit = operatingProfit - inputs.ownerSalary
    const netProfitMargin = (netProfit / inputs.revenue) * 100

    setResults({
      grossProfit,
      grossProfitMargin,
      operatingProfit,
      operatingProfitMargin,
      netProfit,
      netProfitMargin,
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

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  return (
    <div className="bg-white">
      <div className="relative isolate pt-28">
        <div className="container-custom py-24 sm:py-32">
          <AnimateInView>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Agency Profitability Calculator
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Calculate your agency's true profitability and identify opportunities for improvement.
              </p>
            </div>
          </AnimateInView>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calculator Form */}
              <AnimateInView delay={0.1}>
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Enter Your Numbers
                  </h2>
                  <form onSubmit={calculateProfitability} className="mt-8 space-y-6">
                    <div>
                      <label htmlFor="revenue" className="block text-sm font-medium leading-6 text-gray-900">
                        Annual Revenue
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="revenue"
                          id="revenue"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          placeholder="0"
                          value={inputs.revenue || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="directCosts" className="block text-sm font-medium leading-6 text-gray-900">
                        Direct Costs (Contractors, Project Expenses)
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="directCosts"
                          id="directCosts"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          placeholder="0"
                          value={inputs.directCosts || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="overhead" className="block text-sm font-medium leading-6 text-gray-900">
                        Overhead (Rent, Software, etc.)
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="overhead"
                          id="overhead"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          placeholder="0"
                          value={inputs.overhead || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="employeeSalaries" className="block text-sm font-medium leading-6 text-gray-900">
                        Employee Salaries & Benefits
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="employeeSalaries"
                          id="employeeSalaries"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          placeholder="0"
                          value={inputs.employeeSalaries || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="ownerSalary" className="block text-sm font-medium leading-6 text-gray-900">
                        Owner's Salary
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          name="ownerSalary"
                          id="ownerSalary"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                          placeholder="0"
                          value={inputs.ownerSalary || ''}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-md bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                      Calculate Profitability
                    </button>
                  </form>
                </div>
              </AnimateInView>

              {/* Results */}
              <AnimateInView delay={0.2}>
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Your Results
                  </h2>
                  <div className="mt-8 space-y-8">
                    {results ? (
                      <>
                        <div>
                          <h3 className="flex items-center gap-x-2 text-lg font-semibold text-gray-900">
                            <CurrencyDollarIcon className="h-5 w-5 text-brand-primary" />
                            Gross Profit
                          </h3>
                          <p className="mt-2 text-3xl font-bold text-brand-primary">
                            {formatCurrency(results.grossProfit)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Margin: {formatPercentage(results.grossProfitMargin)}
                          </p>
                        </div>

                        <div>
                          <h3 className="flex items-center gap-x-2 text-lg font-semibold text-gray-900">
                            <ArrowTrendingUpIcon className="h-5 w-5 text-brand-primary" />
                            Operating Profit
                          </h3>
                          <p className="mt-2 text-3xl font-bold text-brand-primary">
                            {formatCurrency(results.operatingProfit)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Margin: {formatPercentage(results.operatingProfitMargin)}
                          </p>
                        </div>

                        <div>
                          <h3 className="flex items-center gap-x-2 text-lg font-semibold text-gray-900">
                            <ChartBarIcon className="h-5 w-5 text-brand-primary" />
                            Net Profit
                          </h3>
                          <p className="mt-2 text-3xl font-bold text-brand-primary">
                            {formatCurrency(results.netProfit)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Margin: {formatPercentage(results.netProfitMargin)}
                          </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-4">
                          <h4 className="font-semibold text-gray-900">Analysis</h4>
                          <p className="mt-2 text-sm text-gray-600">
                            {results.netProfitMargin < 10
                              ? 'Your net profit margin is below industry average. Consider reviewing your pricing strategy and operational costs.'
                              : results.netProfitMargin < 20
                              ? 'Your profitability is solid, but there might be room for improvement in operational efficiency.'
                              : 'Excellent profitability! Your agency is performing above industry averages.'}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-600">
                        Enter your numbers and click calculate to see your agency's profitability metrics.
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