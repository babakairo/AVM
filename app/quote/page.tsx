'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { CheckCircle } from 'lucide-react'

export default function QuotePage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      pickupLocation: formData.get('pickupLocation'),
      onSiteNeeded: formData.get('onSiteNeeded') === 'on',
      itemDescription: formData.get('itemDescription'),
      length: formData.get('length'),
      width: formData.get('width'),
      height: formData.get('height'),
      weight: formData.get('weight'),
      fragile: formData.get('fragile') === 'on',
      heatTreated: formData.get('heatTreated') === 'on',
      vacuumPackaging: formData.get('vacuumPackaging') === 'on',
      destinationType: formData.get('destinationType'),
      timeline: formData.get('timeline'),
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setIsSubmitted(true)
      toast({
        title: 'Quote Request Submitted!',
        description: 'We\'ll respond within a few hours.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-2xl mx-auto border-2 border-green-500">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl">Thank You!</CardTitle>
              <CardDescription className="text-lg">
                Your quote request has been received.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-700">
                We typically respond to quote requests within <strong>2-4 hours</strong> during 
                business hours.
              </p>
              <p className="text-gray-700">
                A member of our team will contact you at the phone number or email you provided 
                with a detailed quote.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Submit Another Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and we\'ll respond within hours with a detailed quote.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                  
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>
                </div>

                {/* Location & Service */}
                <div className="space-y-4 pt-6 border-t">
                  <h2 className="text-xl font-semibold text-gray-900">Location & Service</h2>
                  
                  <div>
                    <Label htmlFor="pickupLocation">Pickup Location (City, State) *</Label>
                    <Input 
                      id="pickupLocation" 
                      name="pickupLocation" 
                      placeholder="e.g., Atlanta, GA"
                      required 
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="onSiteNeeded"
                      name="onSiteNeeded"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="onSiteNeeded" className="font-normal">
                      I need on-site packaging service
                    </Label>
                  </div>
                </div>

                {/* Item Details */}
                <div className="space-y-4 pt-6 border-t">
                  <h2 className="text-xl font-semibold text-gray-900">Item Details</h2>
                  
                  <div>
                    <Label htmlFor="itemDescription">Item Description *</Label>
                    <Textarea 
                      id="itemDescription" 
                      name="itemDescription"
                      placeholder="Describe what needs to be crated (e.g., industrial machinery, furniture, artwork, etc.)"
                      required 
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label>Dimensions (inches)</Label>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <Input name="length" placeholder="Length" type="number" step="0.1" />
                      <Input name="width" placeholder="Width" type="number" step="0.1" />
                      <Input name="height" placeholder="Height" type="number" step="0.1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="weight">Approximate Weight (lbs)</Label>
                    <Input id="weight" name="weight" type="number" step="0.1" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="fragile"
                      name="fragile"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="fragile" className="font-normal">
                      Fragile / requires special handling
                    </Label>
                  </div>
                </div>

                {/* Service Requirements */}
                <div className="space-y-4 pt-6 border-t">
                  <h2 className="text-xl font-semibold text-gray-900">Service Requirements</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="heatTreated"
                        name="heatTreated"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <Label htmlFor="heatTreated" className="font-normal">
                        Heat-treated crate needed (ISPM-15 compliant for international shipping)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="vacuumPackaging"
                        name="vacuumPackaging"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <Label htmlFor="vacuumPackaging" className="font-normal">
                        Vacuum packaging needed
                      </Label>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="destinationType">Destination Type *</Label>
                    <select
                      id="destinationType"
                      name="destinationType"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select destination type</option>
                      <option value="domestic">Domestic (within USA)</option>
                      <option value="international">International</option>
                      <option value="ocean-container">Ocean Container Loading</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="timeline">When do you need this? *</Label>
                    <Input 
                      id="timeline" 
                      name="timeline" 
                      type="date"
                      required 
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-amber-700 hover:bg-amber-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
