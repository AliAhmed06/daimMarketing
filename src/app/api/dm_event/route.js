import { connect } from "@/helpers/connection";
import { verifyJwtToken } from "@/helpers/jwt";

import DmEvent from "@/models/dmEventsModel";

export async function POST(req){
    connect();

    const accessToken = req.headers.get("authorization");
    const token = accessToken.split(" ")[1];

    const decodedToken = verifyJwtToken(token);

    if(!accessToken || !decodedToken){
        return new Response(JSON.stringify({error: "unauthorized (wrong or expired token)"}), {status: 403})
    }

    try {
        const body = await req.json();
        const { eventUrl } = reqBody;

        let newEvent = await DmEvent.create({eventUrl});
        
        return new Response(JSON.stringify(newEvent), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }
}


