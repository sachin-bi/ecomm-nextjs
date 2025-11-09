import { dbConnect } from "@/lib/dbConnect";
import Product from "@/lib/models/Product";

export async function GET(request, context) {
    try {
        await dbConnect();

        const { id } = await context.params; // unwrap Promise here

        const product = await Product.findById(id);
        if (!product)
            return Response.json({ message: "Product not found" }, { status: 404 });

        return Response.json(product);
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(request, context) {
    try {
        await dbConnect();
        const { id } = await context.params; // unwrap
        const body = await request.json();

        const updated = await Product.findByIdAndUpdate(id, body, { new: true });
        if (!updated)
            return Response.json({ message: "Product not found" }, { status: 404 });

        return Response.json(updated);
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(request, context) {
    try {
        await dbConnect();

        const { id } = await context.params; // unwrap
        const deleted = await Product.findByIdAndDelete(id);
        if (!deleted)
            return Response.json({ message: "Product not found" }, { status: 404 });

        return Response.json({ message: "Product deleted successfully" });
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}
