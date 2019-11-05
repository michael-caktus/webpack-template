// Import SASS entrypoint so Webpack will treat it as a dependency
import '../styles/main.scss';

// Import modules
import { listifyAdjectives } from './myModule/myModule'

const whatWebpackIs = [
    'doop',
    'croosh',
    'rad',
    'sick'
]

console.log("Crooshed.")
console.log(`Webpack is totally ${listifyAdjectives(whatWebpackIs)}`)
