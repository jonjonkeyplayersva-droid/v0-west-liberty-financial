'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FieldDef {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'number' | 'select'
  options?: string[]
  full?: boolean
}

interface ApplicationFormProps {
  fields: FieldDef[]
  submitLabel: string
  ariaLabel: string
}

type Status = 'idle' | 'loading' | 'success'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-cream placeholder:text-slate/60 outline-none transition-colors duration-300 focus:border-gold/60 focus:ring-1 focus:ring-gold/40'

export function ApplicationForm({ fields, submitLabel, ariaLabel }: ApplicationFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    // No backend — simulate submission. Will be wired in Cursor.
    setTimeout(() => setStatus('success'), 1400)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-gold/30 bg-navy-light px-6 py-16 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-cream">Application Received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate">
          {"We'll contact you within 1 business day."}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label={ariaLabel}
      className="grid gap-5 rounded-2xl border border-white/10 bg-navy-light p-6 md:grid-cols-2 md:p-8"
    >
      {fields.map((field) => (
        <div
          key={field.name}
          className={cn('flex flex-col gap-2', field.full && 'md:col-span-2')}
        >
          <label
            htmlFor={field.name}
            className="text-xs font-semibold uppercase tracking-wider text-slate"
          >
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              required
              defaultValue=""
              className={cn(inputClass, 'appearance-none')}
            >
              <option value="" disabled>
                Select…
              </option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? 'text'}
              required
              className={inputClass}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold py-4 text-sm font-semibold text-navy transition-all duration-500 ease-luxe hover:bg-gold-light disabled:opacity-70 md:col-span-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  )
}
