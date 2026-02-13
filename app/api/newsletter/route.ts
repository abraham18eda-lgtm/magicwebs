import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"


const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: Request) {
  try {

    const { email, message } = await request.json()
    console.log("Datos recibidos:", email, message )

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email y mensaje son requeridos" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de email inválido" },
        { status: 400 }
      )
    }

     await sql`
      INSERT INTO public.newsletter (email, message) VALUES (${email}, ${message} )`
    

    // For now, log the submission (remove in production)
    // console.log("Newsletter/Footer form submission:", { email, message })
     console.log("Insertado correctamente:", { email, message })
      // return NextResponse.json({ data: result.rows[0] });

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)

    return NextResponse.json(
      { error: "Error interno del servido" },
      { status: 500 }
    )
  }
}
