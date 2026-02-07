mapboxgl.accessToken = 'ضع_مفتاحك_هنا'; 

let map;
let userMarker;
let userCoords = AppConfig.defaultLocation; // افتراضي النزهة 2

function initMap() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // خريطة شوارع واضحة
        center: userCoords,
        zoom: 15
    });

    // إضافة أداة تحديد الموقع التلقائي (الزر الصغير)
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true }, // دقة عالية جداً
        trackUserLocation: true,
        showUserHeading: true
    });
    
    map.addControl(geolocate);

    // عند تحديد الموقع بنجاح
    geolocate.on('geolocate', (e) => {
        userCoords = [e.coords.longitude, e.coords.latitude];
        console.log("الموقع الدقيق:", userCoords);
        showToast("تم تحديد موقعك بدقة 🎯");
    });

    // السماح للمستخدم بوضع علامة يدوية بالضغط على الخريطة
    map.on('click', (e) => {
        if (userMarker) userMarker.remove();
        userCoords = [e.lngLat.lng, e.lngLat.lat];
        userMarker = new mapboxgl.Marker({ color: "#00ff88" })
            .setLngLat(userCoords)
            .addTo(map);
    });
}

// تعديل وظيفة تأكيد الطلب في js/request.js لترسل رابط الخريطة
function confirmRequest() {
    const user = getUserData();
    const service = selectedService || 'طلب عام';
    
    // إنشاء رابط جوجل مابس بناءً على مكان ضغطة المستخدم على الخريطة
    const googleMapsUrl = `https://www.google.com/maps?q=${userCoords[1]},${userCoords[0]}`;
    
    const msg = `
*طلب جديد من BertyPro* 🚀
---------------------------
👤 *العميل:* ${user.name}
📱 *الهاتف:* ${user.phone}
🛠 *الخدمة:* ${service}
📍 *الموقع الدقيق:* ${googleMapsUrl}
---------------------------
    `;

    window.open(`https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`, '_blank');
}
