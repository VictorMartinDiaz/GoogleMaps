interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
  console.log(`Name: ${vehicle.name}
    year: ${vehicle.year}
    broken: ${vehicle.broken}`);
};
const printVehicleUsingInterface = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}
    year: ${vehicle.year}
    broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
printVehicleUsingInterface(oldCivic);