import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Log the contact form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      company: 'CV REKA ARSI BANJARNEGARA'
    })

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to client
    
    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda segera.',
      data: {
        name,
        email,
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint for CV REKA ARSI BANJARNEGARA',
    company: 'CV REKA ARSI BANJARNEGARA',
    services: ['Meta Ads Management', 'Konsultasi Teknis', 'Keinsinyuran YBDI']
  })
}