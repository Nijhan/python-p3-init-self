function calculatebodafare(distanceInKm){
    const baseFare =50
    const chargePerKm =15
    const travelFare =distanceInKm*chargePerKm
    const totalFare =baseFare+travelFare
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
      console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
      console.log(`Mpaka Uko: KES ${travelFare}`);
      console.log(`Total: KES ${totalFare}`);
      console.log("\nPanda Pikipiki! ");

}
const userInput=prompt("Unafika Wapi Mkubwa?Kilometre Ngapi?")
const distanceInKm=parseFloat(userInput)
if (!isNaN(distanceInKm) && distanceInKm > 0) {
      calculatebodafare(distanceInKm);
    } else {
      console.log("Tafadhali andika nambari sahihi ya kilometer.");
    }