import { colors } from './deps.js'

import {
    createApp,
  } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();

function generateColorList(){
    const colorList = [];

    Deno.args.forEach( color => {
        colorList.push(`<li style="color:${color};">${color}</li>`)
    })
    return colorList;
}




app.handle("/",async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html",
        }),
        body: generateColorList().join("")
    })
})

app.listen({port: 8080})