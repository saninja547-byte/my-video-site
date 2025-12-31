import { NextResponse } from 'next/server';

const validInviteCodes = [
  'FRIEND123',
  'BETA456',
  'PREVIEW789',
  'EVAL2024'
];

export async function POST(request) {
  try {
    const { code } = await request.json();
    
    if (!code || !validInviteCodes.includes(code.toUpperCase())) {
      return NextResponse.json(
        { error: 'Invalid invite code' },
        { status: 401 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Access granted'
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}