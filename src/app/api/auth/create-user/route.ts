import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        
        const body = await request.json();
        console.log(body);

        return NextResponse.json({data: "test"})

    } catch (err) {
        if (err instanceof Error && 'status' in err && typeof (err as any).status === 'number' && 'error' in err) {
            return NextResponse.json({
                error: err.error,
            }, {
                status: (err as any).status,
            })
        } else {
            return NextResponse.json({
                error: "server error",
            }, {
                status: 500,
            })
        }
    }
}