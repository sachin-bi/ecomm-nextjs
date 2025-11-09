import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Product from "@/lib/models/Product";


export async function GET(req) {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
        return NextResponse.json({ success: false, message: "No search query provided" });
    }

    try {
        // Case-insensitive search across multiple fields
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { slug: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
                { tags: { $regex: query, $options: "i" } },
                { "variants.color": { $regex: query, $options: "i" } },
                { "variants.size": { $regex: query, $options: "i" } },
                { "variants.sku": { $regex: query, $options: "i" } },
            ],
        });

        return NextResponse.json({ success: true, data: products });
    } catch (error) {
        console.error("Search error:", error);
        return NextResponse.json({ success: false, message: "Error fetching products" });
    }
}
