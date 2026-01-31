import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const quoteLeads = await prisma.quoteLead.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        createdAt: true,
        name: true,
        email: true,
        phone: true,
        pickupLocation: true,
        itemDescription: true,
        destinationType: true,
        status: true,
      },
    })

    const contactLeads = await prisma.contactLead.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ quoteLeads, contactLeads })
  } catch (error) {
    console.error('Failed to fetch leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { type, id, status } = await request.json()

    if (type === 'quote') {
      await prisma.quoteLead.update({
        where: { id },
        data: { status },
      })
    } else if (type === 'contact') {
      await prisma.contactLead.update({
        where: { id },
        data: { status },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to update status:', error)
    return NextResponse.json(
      { error: 'Failed to update status' },
      { status: 500 }
    )
  }
}
