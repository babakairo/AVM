import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { contactFormSchema } from '@/lib/validations'
import { Resend } from 'resend'

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = contactFormSchema.parse(body)
    
    // Save to database
    const contactLead = await prisma.contactLead.create({
      data: validatedData,
    })
    
    // Send email notification to admin
    if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
      try {
        const resend = getResend()
        await resend.emails.send({
          from: 'AVM Crating <noreply@yourdomain.com>',
          to: process.env.ADMIN_EMAIL,
          subject: validatedData.subject 
            ? `Contact Form: ${validatedData.subject}` 
            : 'New Contact Form Submission - AVM Packaging',
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
            ${validatedData.subject ? `<p><strong>Subject:</strong> ${validatedData.subject}</p>` : ''}
            <hr>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Contact ID: ${contactLead.id}</small></p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't fail the request if email fails
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      id: contactLead.id 
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
