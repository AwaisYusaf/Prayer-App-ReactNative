function getEmptyPrayerObject(date) {
  let obj = {};
  obj[date] = [
    { isOffered: false, offeredWithJamat: false },
    { isOffered: false, offeredWithJamat: false },
    { isOffered: false, offeredWithJamat: false },
    { isOffered: false, offeredWithJamat: false },
    { isOffered: false, offeredWithJamat: false },
  ];
  return obj;
}
export default getEmptyPrayerObject;
