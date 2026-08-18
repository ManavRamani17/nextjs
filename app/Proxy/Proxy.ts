import { NextRequest, NextResponse } from "next/server";

export function Proxy(request:NextRequest){
    console.log("Proxy is working")
    return NextResponse.next()
}