import { connect } from "@/helpers/connection";
import { verifyJwtToken } from "@/helpers/jwt";
import { NextRequest, NextResponse } from "next/server";

import DmEvent from "@/models/dmEventsModel";

export async function GET(req){
    connect();
    try {
        const events = await DmEvent.find({});
        return NextResponse.json({
            success: true,
            events
        })
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500,
            success: false,
        })
    }
}


export async function POST(req){
    connect();
    
    try {
        const reqBody = await req.json();
        const { eventUrl } = reqBody;
        
        // Save event in db
        const savedEvent = await DmEvent.create({eventUrl});
        
        
        return NextResponse.json({
            message: "Event added successfully",
            success: true,
            savedEvent
        })
                
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status: 500,
            success: false,
        })
    }
}

