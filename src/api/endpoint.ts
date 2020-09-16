export default function endpoint(route: string) {
    let rootEndpoint = "https://api.maia.codes/"

    const currentLocation = window.location.href
    if (currentLocation.startsWith('http://localhost')) {
        rootEndpoint = "http://localhost:3000/dev"
    }
    
    const endpoint = `${rootEndpoint}/${route}`
    return endpoint
}