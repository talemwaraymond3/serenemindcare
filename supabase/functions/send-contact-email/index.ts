import { corsHeaders } from '@supabase/supabase-js/cors'
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const BodySchema = z.object({
  name: z.string().min(1).max(255),
  contact: z.string().min(1).max(255),
  helpType: z.string().min(1).max(100),
  message: z.string().max(2000).optional().default(''),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured')
    }

    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { name, contact, helpType, message } = parsed.data

    const helpLabels: Record<string, string> = {
      school: 'School Program (Serene Minds Thrive)',
      individual: 'Individual Therapy',
      family: 'Family Therapy',
      crisis: 'Crisis/Urgent Support',
      xspace: 'Mental Health Spot / X Space',
      partnership: 'Partnership Inquiry',
      other: 'Other',
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #55AC59; border-bottom: 2px solid #55AC59; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #18211A; width: 140px;">Name:</td>
            <td style="padding: 10px; color: #696D74;">${name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #18211A;">Contact:</td>
            <td style="padding: 10px; color: #696D74;">${contact}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #18211A;">Help Type:</td>
            <td style="padding: 10px; color: #696D74;">${helpLabels[helpType] || helpType}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #18211A;">Message:</td>
            <td style="padding: 10px; color: #696D74;">${message || 'No message provided'}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">
          This email was sent from the Serene MindCare contact form.
        </p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Serene MindCare <onboarding@resend.dev>',
        to: ['serenemindcare5@gmail.com'],
        subject: `New Contact: ${helpLabels[helpType] || helpType} - ${name}`,
        html,
      }),
    })

    const data = await res.json()
    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    console.error('Error sending email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
