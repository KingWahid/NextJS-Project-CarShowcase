
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '7240476242msh0959b87ff584489p10f943jsn6f35a4eeed5f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const res = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {headers: headers});
    const result = await res.json();

    return result;
}

export function calculateCarRent (city_mpg: number, year: number) {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFacto = 0.05; 

    const mileageRate = city_mpg * mileageFactor;
    const ageFactor = (new Date().getFullYear() - year) * ageFacto;

    const rentalRatePerDay = basePricePerDay +  mileageRate + ageFactor;
    return rentalRatePerDay.toFixed(0);
}

export function calculateCarPrice (city_mpg: number, cylinders: number) {
    // Aturan harga dasar berdasarkan merek mobil
    const basePrice = 30000;
    
    // Aturan penyesuaian harga berdasarkan city mpg
    // Semakin tinggi city mpg, semakin tinggi harga
    const mpgAdjustmentRate = 100; // Setiap mpg menambah $100
    const mpgAdjustment = city_mpg * mpgAdjustmentRate;

    // Penyesuaian harga berdasarkan jumlah silinder
    // Semakin banyak silinder, semakin tinggi harga
    const cylinderAdjustment = cylinders * 1000; // Setiap silinder menambah $1000

    // Menghitung harga akhir
    let finalPrice = basePrice + mpgAdjustment + cylinderAdjustment;

    return finalPrice;
    
}