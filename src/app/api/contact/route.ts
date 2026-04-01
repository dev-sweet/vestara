import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { fullName, email, country, productCategories, estimatedQuantity } = body
    if (!fullName || !email || !country || !productCategories?.length || !estimatedQuantity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In production, this would send via Resend email service
    // For now, log the inquiry and return success
    console.log('New inquiry received:', {
      fullName,
      email,
      country,
      productCategories,
      estimatedQuantity,
      submittedAt: new Date().toISOString(),
    })

    // Store in database using Prisma (optional)
    // const inquiry = await db.inquiry.create({ data: { ... } })

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
