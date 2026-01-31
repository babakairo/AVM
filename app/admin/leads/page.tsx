'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatDate } from '@/lib/utils'

type QuoteLead = {
  id: string
  createdAt: string
  name: string
  email: string
  phone: string
  pickupLocation: string
  itemDescription: string
  destinationType: string
  status: string
}

type ContactLead = {
  id: string
  createdAt: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  status: string
}

export default function AdminLeadsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [quoteLeads, setQuoteLeads] = useState<QuoteLead[]>([])
  const [contactLeads, setContactLeads] = useState<ContactLead[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'quotes' | 'contacts'>('quotes')

  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      fetchLeads()
    } else {
      setIsLoading(false)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (response.ok) {
        setIsAuthenticated(true)
        sessionStorage.setItem('adminAuthenticated', 'true')
        fetchLeads()
      } else {
        alert('Incorrect password')
      }
    } catch (error) {
      alert('Login failed')
    }
  }

  const fetchLeads = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/leads')
      if (response.ok) {
        const data = await response.json()
        setQuoteLeads(data.quoteLeads)
        setContactLeads(data.contactLeads)
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateStatus = async (type: 'quote' | 'contact', id: string, status: string) => {
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id, status }),
      })
      if (response.ok) {
        fetchLeads()
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center py-16">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter password to view leads</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage quote and contact form submissions</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={activeTab === 'quotes' ? 'default' : 'outline'}
            onClick={() => setActiveTab('quotes')}
            className={activeTab === 'quotes' ? 'bg-amber-700 hover:bg-amber-800' : ''}
          >
            Quote Requests ({quoteLeads.length})
          </Button>
          <Button
            variant={activeTab === 'contacts' ? 'default' : 'outline'}
            onClick={() => setActiveTab('contacts')}
            className={activeTab === 'contacts' ? 'bg-amber-700 hover:bg-amber-800' : ''}
          >
            Contact Messages ({contactLeads.length})
          </Button>
        </div>

        {/* Quote Leads */}
        {activeTab === 'quotes' && (
          <div className="space-y-4">
            {quoteLeads.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center text-gray-500">
                  No quote requests yet
                </CardContent>
              </Card>
            ) : (
              quoteLeads.map((lead) => (
                <Card key={lead.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{lead.name}</CardTitle>
                        <CardDescription>{formatDate(lead.createdAt)}</CardDescription>
                      </div>
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus('quote', lead.id, e.target.value)}
                        className="px-3 py-1 border rounded-md text-sm"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="quoted">Quoted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-sm">
                    <div><strong>Email:</strong> {lead.email}</div>
                    <div><strong>Phone:</strong> {lead.phone}</div>
                    <div><strong>Pickup Location:</strong> {lead.pickupLocation}</div>
                    <div><strong>Item:</strong> {lead.itemDescription}</div>
                    <div><strong>Destination:</strong> {lead.destinationType}</div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Contact Leads */}
        {activeTab === 'contacts' && (
          <div className="space-y-4">
            {contactLeads.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center text-gray-500">
                  No contact messages yet
                </CardContent>
              </Card>
            ) : (
              contactLeads.map((lead) => (
                <Card key={lead.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{lead.name}</CardTitle>
                        <CardDescription>{formatDate(lead.createdAt)}</CardDescription>
                      </div>
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus('contact', lead.id, e.target.value)}
                        className="px-3 py-1 border rounded-md text-sm"
                      >
                        <option value="new">New</option>
                        <option value="responded">Responded</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-2 text-sm">
                    <div><strong>Email:</strong> {lead.email}</div>
                    {lead.phone && <div><strong>Phone:</strong> {lead.phone}</div>}
                    {lead.subject && <div><strong>Subject:</strong> {lead.subject}</div>}
                    <div><strong>Message:</strong></div>
                    <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-3 rounded">
                      {lead.message}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
