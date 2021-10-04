const ipAddress = "0.0.0.0";
const anodtherIpAdress = "127.0.0.1";

const isValidIpAddress = (ipAddress) => {
  const splitted = ipAddress.split(".");

  for (let i = 0; i < splitted.length; i++) {
    if (isNaN(splitted[i])) {
      return "IP Address harus berupa angka!";
    }
  }

  if (splitted.length !== 4) {
    return "IP Address harus berjumlah 4 okte";
  }

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] < 0 || splitted[i] > 255) {
      return "IP Address harus diantara 0 - 255";
    }
  }

  return `IP Address ${ipAddress} valid`;
};

console.log(isValidIpAddress(ipAddress));
console.log(isValidIpAddress(anodtherIpAdress));
