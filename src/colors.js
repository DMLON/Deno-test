import { colors } from './deps.js'

Deno.args.forEach( color => {
    console.log(colors[color](color))
})

