// حساب المسافة بين نقطتين باستخدام Turf.js
function calculateDistance(userCoords, providerCoords) {
    const from = turf.point(userCoords);
    const to = turf.point(providerCoords);
    const options = {units: 'kilometers'};
    return turf.distance(from, to, options).toFixed(2);
}

// مثال: تحديث حالة "وقت الاستجابة" بناءً على الزحام الوهمي
function updateLiveStatus() {
    const baseTime = 3.2; 
    const randomExtra = Math.random() * 2;
    document.getElementById('responseTime').innerHTML = 
        `${(baseTime + randomExtra).toFixed(1)}<span>دقائق استجابة</span>`;
}
setInterval(updateLiveStatus, 10000);
