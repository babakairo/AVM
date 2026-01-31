import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { quoteFormSchema } from '@/lib/validations'
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
    const validatedData = quoteFormSchema.parse(body)
    
    // Convert string dimensions to floats
    const quoteData = {
      ...validatedData,
      length: validatedData.length ? parseFloat(validatedData.length) : null,
      width: validatedData.width ? parseFloat(validatedData.width) : null,
      height: validatedData.height ? parseFloat(validatedData.height) : null,
      weight: validatedData.weight ? parseFloat(validatedData.weight) : null,
      photoUrls: [],
    }
    
    // Save to database
    const quoteLead = await prisma.quoteLead.create({
      data: quoteData,
    })
    
    // Send email notification to admin
    if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
      try {
        const resend = getResend()
        await resend.emails.send({
          from: 'AVM Crating <noreply@yourdomain.com>',
          to: process.env.ADMIN_EMAIL,
          subject: 'New Quote Request - AVM Packaging',
          html: `
            <h2>New Quote Request</h2>
            <p><strong>From:</strong> ${validatedData.name}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <hr>
            <p><strong>Pickup Location:</strong> ${validatedData.pickupLocation}</p>
            <p><strong>On-Site Service:</strong> ${validatedData.onSiteNeeded ? 'Yes' : 'No'}</p>
            <p><strong>Item Description:</strong> ${validatedData.itemDescription}</p>
            ${validatedData.length ? `<p><strong>Dimensions:</strong> ${validatedData.length}" L x ${validatedData.width}" W x ${validatedData.height}" H</p>` : ''}
            ${validatedData.weight ? `<p><strong>Weight:</strong> ${validatedData.weight} lbs</p>` : ''}
            <p><strong>Fragile:</strong> ${validatedData.fragile ? 'Yes' : 'No'}</p>
            <p><strong>Heat-Treated Crate:</strong> ${validatedData.heatTreated ? 'Yes' : 'No'}</p>
            <p><strong>Vacuum Packaging:</strong> ${validatedData.vacuumPackaging ? 'Yes' : 'No'}</p>
            <p><strong>Destination Type:</strong> ${validatedData.destinationType}</p>
            ${validatedData.timeline ? `<p><strong>Timeline:</strong> ${validatedData.timeline}</p>` : ''}
            <hr>
            <p><small>Quote ID: ${quoteLead.id}</small></p>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't fail the request if email fails
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      id: quoteLead.id 
    })
  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    )
  }
}
