import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

const sql = neon(process.env.DATABASE_URL!)
 
export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string
    const image = formData.get("image") as File | null

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    // Validate image type if provided
    if (image && image.size > 0) {
      const validTypes = ["image/jpeg", "image/png"]
      if (!validTypes.includes(image.type)) {
        return NextResponse.json(
          { error: "Solo se permiten archivos JPG o PNG" },
          { status: 400 }
        )
      }
    }

    // TODO: Add database integration
    // When you add a PostgreSQL integration (like Neon), uncomment and modify:
    /*
    import { neon } from "@neondatabase/serverless"
    const sql = neon(process.env.DATABASE_URL!)
    
    // First, create the table if not exists:
    // CREATE TABLE contact_requests (
    //   id SERIAL PRIMARY KEY,
    //   name VARCHAR(255) NOT NULL,
    //   email VARCHAR(255) NOT NULL,
    //   phone VARCHAR(50) NOT NULL,
    //   message TEXT NOT NULL,
    //   image_url TEXT,
    //   created_at TIMESTAMP DEFAULT NOW()
    // );
    */
    // Handle image upload to Vercel Blob or similar service
    
    let imageUrl: string | null = null
    if (image && image.size > 0) {
      // Convertir a Buffer antes de subir
      const buffer = Buffer.from(await image.arrayBuffer())
      console.log("Token:", process.env.BLOB_READ_WRITE_TOKEN)

      //Upload to Vercel Blob
      const blob = await put(image.name, image, { 
          access: 'public',
          token: process.env.BLOB_READ_WRITE_TOKEN
       })
      imageUrl = blob.url
    }
    
   
    // console.log("Datos recibidos:", name, email, phone, message, imageUrl )

    await sql`
      INSERT INTO public.contact_requests (name, email, phone, message, image_url)
      VALUES (${name}, ${email}, ${phone}, ${message}, ${imageUrl})
    `
    

    // For now, log the submission (remove in production)
    console.log("Contact form submission:", { name, email, phone, message })

    return NextResponse.json(
      { success: true, message: "Solicitud recibida correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    )
  }
}
