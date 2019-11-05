/**
 * listifyAdjectives
 * @param {Array} adjectives an array of adjectives
 * turns an array of adjectives in to a string of adjectives
 */
export const listifyAdjectives = adjectives => {
    adjectives[adjectives.length - 1] = `and ${adjectives[adjectives.length - 1]}`
    return adjectives.join(", ")
}
