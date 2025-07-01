'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { skills } from '../data/skills'
import { Skill } from '../types'

const COLORS = ['#0070F3', '#00C4CC', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F']

export function SkillVisualization() {
  const [viewMode, setViewMode] = useState<'bars' | 'pie' | 'radar'>('bars')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))]

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const pieData = filteredSkills.map(skill => ({
    name: skill.name,
    value: skill.level,
    category: skill.category
  }))

  const barData = filteredSkills.map(skill => ({
    name: skill.name,
    level: skill.level,
    category: skill.category
  }))

  return (
    <div className="space-y-8">
      {/* View Mode Toggle */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-background-tertiary text-text-secondary hover:text-text-primary'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Chart Toggle */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {[
          { key: 'bars', label: 'Bar Chart' },
          { key: 'pie', label: 'Pie Chart' }
        ].map((mode) => (
          <motion.button
            key={mode.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode(mode.key as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              viewMode === mode.key
                ? 'bg-primary text-white'
                : 'bg-background-tertiary text-text-secondary hover:text-text-primary'
            }`}
          >
            {mode.label}
          </motion.button>
        ))}
      </div>

      {/* Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-96"
      >
        {viewMode === 'bars' && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fill: '#a1a1aa', fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 100]}
                tick={{ fill: '#a1a1aa', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #27272a',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
              />
              <Bar dataKey="level" fill="#0070F3" radius={[4, 4, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}

        {viewMode === 'pie' && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #27272a',
                  borderRadius: '8px',
                  color: '#ffffff'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </motion.div>

      {/* Skill Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        <div className="bg-background-tertiary p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {filteredSkills.length}
          </div>
          <div className="text-text-secondary">Total Skills</div>
        </div>
        <div className="bg-background-tertiary p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {Math.round(filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length)}
          </div>
          <div className="text-text-secondary">Average Level</div>
        </div>
        <div className="bg-background-tertiary p-6 rounded-xl text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {filteredSkills.filter(skill => skill.level >= 90).length}
          </div>
          <div className="text-text-secondary">Expert Level</div>
        </div>
      </motion.div>
    </div>
  )
} 