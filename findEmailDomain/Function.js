// FindEmailDomain

function findEmailDomain(address) {
  return address.substring(address.lastIndexOf("@") + 1);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
