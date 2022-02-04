

function findMatching(drivers, list) {
  return drivers.filter(
    (result) => result.toLowerCase() === list.toLowerCase()
  );
}

function fuzzyMatch(drivers, list2)
{
  return drivers.filter(
    (result) => result.toLowerCase().indexOf(list2.toLowerCase()) === 0
  );
}

function matchName(drivers, list3) {
  return drivers.filter((result) => result.name === list3);
}