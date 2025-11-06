import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, enum: ["clothing", "cup", "sticker"], required: true },
    description: { type: String },
    images: [{ type: String }],
    basePrice: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    variants: [
        {
            sku: { type: String, unique: true },
            color: { type: String },
            size: { type: String },
            price: { type: Number, required: true },
            stock: { type: Number, required: true },
            image: { type: String },
        },
    ],
    tags: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
