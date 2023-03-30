// Domain type problem
function domainType(domains) {
  const labels = {
    com: "commercial",
    org: "organization",
    net: "network",
    info: "information",
  };
  const result = [];
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const parts = domain.split(".");
    const label = labels[parts[parts.length - 1]];
    result.push(label);
  }
  return result;
}

console.log(
  domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
); // ["organization", "commercial", "network", "information"]
