import { z } from 'zod'

export const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  pickupLocation: z.string().min(3, 'Please enter pickup location'),
  onSiteNeeded: z.boolean().default(false),
  itemDescription: z.string().min(5, 'Please describe what needs to be crated'),
  length: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
  fragile: z.boolean().default(false),
  heatTreated: z.boolean().default(false),
  vacuumPackaging: z.boolean().default(false),
  destinationType: z.enum(['domestic', 'international', 'ocean-container']),
  timeline: z.string().optional(),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
