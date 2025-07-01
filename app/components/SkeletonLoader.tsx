'use client'

import { motion } from 'framer-motion'
import { SkeletonProps } from '../types'

export function SkeletonLoader({ className = '', count = 1 }: SkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`animate-pulse bg-background-tertiary rounded-lg ${className}`}
        />
      ))}
    </>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-background-tertiary rounded-xl overflow-hidden">
      <div className="h-48 bg-background-secondary animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="h-6 bg-background-secondary rounded w-3/4 animate-pulse" />
          <div className="h-6 bg-background-secondary rounded w-16 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-background-secondary rounded w-full animate-pulse" />
          <div className="h-4 bg-background-secondary rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-background-secondary rounded w-4/6 animate-pulse" />
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-6 bg-background-secondary rounded w-16 animate-pulse"
            />
          ))}
        </div>
        <div className="flex gap-4">
          <div className="h-4 bg-background-secondary rounded w-12 animate-pulse" />
          <div className="h-4 bg-background-secondary rounded w-12 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-background-tertiary rounded-xl overflow-hidden">
      <div className="h-48 bg-background-secondary animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-background-secondary rounded w-full animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-background-secondary rounded w-full animate-pulse" />
          <div className="h-4 bg-background-secondary rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-background-secondary rounded w-4/6 animate-pulse" />
        </div>
        <div className="flex items-center gap-4">
          <div className="h-4 bg-background-secondary rounded w-20 animate-pulse" />
          <div className="h-4 bg-background-secondary rounded w-16 animate-pulse" />
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="h-6 bg-background-secondary rounded w-16 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function SkillBarSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="h-4 bg-background-secondary rounded w-24 animate-pulse" />
          <div className="flex items-center gap-3">
            <div className="w-24 h-2 bg-background-secondary rounded-full animate-pulse" />
            <div className="h-4 bg-background-secondary rounded w-8 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="h-16 bg-background-secondary rounded w-3/4 mx-auto animate-pulse" />
          <div className="h-8 bg-background-secondary rounded w-1/2 mx-auto animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-6 bg-background-secondary rounded w-full animate-pulse" />
          <div className="h-6 bg-background-secondary rounded w-5/6 mx-auto animate-pulse" />
        </div>
        <div className="flex justify-center gap-4">
          <div className="h-12 bg-background-secondary rounded w-32 animate-pulse" />
          <div className="h-12 bg-background-secondary rounded w-12 animate-pulse" />
          <div className="h-12 bg-background-secondary rounded w-12 animate-pulse" />
        </div>
      </div>
    </div>
  )
} 