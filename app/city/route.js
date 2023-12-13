import City from "@/models/city"
import { NextResponse } from "next/server";

export async function GET(){
    // await connectMongoDB()
    const cities = await City.find();
    return NextResponse.json({cities});
}

export async function POST(request){
    const {name, population, country, elevation, cityId} = await request.json()
    // await connectMongoDB()
    await City.create({name, population, country, elevation, cityId});
    return NextResponse.json({message: "City added to favourites!"}, {status: 201})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id')
    // await connectMongoDB()
    await City.findByIdAndDelete(id)
    return NextResponse.json({message: "City deleted from favourites!"}, {status: 200})
}