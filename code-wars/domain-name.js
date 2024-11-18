const domainName = (url) => {
    if (url.includes('www.')){
        url = url.replace('www.', '')
    } 
    
    if (url.includes('https://')){
        url = url.replace('https://', '')
    } else if (url.includes('http://')){
        url = url.replace('http://', '')
    } 
    return url.split('.')[0]
  }

//   Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//   * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"   

console.log(domainName('http://github.com/carbonfive/raygun'))
console.log(domainName('http://www.zombie-bites.com'))
console.log(domainName('https://www.cnet.com'))