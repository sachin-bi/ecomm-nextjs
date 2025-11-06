import { dbConnect } from "@/lib/dbConnect";
import Product from "@/lib/models/Product";

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();

    const newProduct = await Product.create(body);
    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find();
    return Response.json(products);
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
