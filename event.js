const params =new URLSearchParams(window.location.search);
const eventId=params.get("id")
const events=
{
    chess:
    {
        title:"بطولة الشطرنج",
        date:"12/11/2026 :الزمان",
        location:"قاعة الألعاب الرياضية ",
        description:"تقام بطولة الشطرنج في قاعة الألعاب الرياضية الساعة 5 مساءً. جميع اللاعبين مدعوون للمشاركة.",
        event_map:"images/map1.png",
        gallery_img:["images/chess 2.jpeg","images/chess 3.jpeg","images/chess 4.jpeg"]
    },
    maldive:{
        title:"رحلة للمالديف",
        date:"10/11/2026 :الزمان",
        location:"المكان :شاطئ المالديف الرملي",
        description:"تقام معارض المالديف على الشاطئ الساعة 6 مساءً. جميع الزوار مدعوون للمشاركة وتقام نشاطات متنوعة.",
        event_map:"images/map2.jpeg",
        gallery_img:["images/maldive1.jpeg","images/maldive2.jpeg","images/maldive3.jpeg"]
    },
    book:{
        title:"معرض الكتاب",
        date:"1/10/2026 :الزمان",
        location:"المكان : قاعة الكتب",
        description:"يضم معرض الكتاب مجموعة متنوعة من الكتب في مجالات الأدب والعلوم والتكنولوجيا والثقافة.",
        event_map:"images/map3.jpeg",
        gallery_img:["images/book1.jpeg","images/book2.jpeg","images/book3.jpeg"]
    },
    marathon:{
        title:"الماراثون",
        date:"6/10/2026 :الزمان",
        location:"المكان: ملعب المدينة الرياضي",
        description:"سباق الماراثون هو حدث رياضي يتضمن الجري لمسافة طويلة، ويشارك فيه العداؤون من مختلف الأعمار والقدرات. يهدف السباق إلى تعزيز اللياقة البدنية وتشجيع روح المنافسة.",
        event_map:"images/map4.jpeg",
        gallery_img:["images/marathon1.jpeg","images/marathon2.jpeg","images/marathon3.jpeg"]
    },
    drawing:{
        title:"معرض الرسم",
        date:"13/10/2026 :الزمان",
        location:"المكان : كلية الفنون الجميلة",
        description:"مسابقة الرسم هي فعالية فنية تهدف إلى تشجيع الفنانين على التعبير عن إبداعهم من خلال الرسم. يمكن للمشاركين استخدام مجموعة متنوعة من المواد والتقنيات لإنتاج أعمال فنية مميزة.",
        event_map:"images/map5.jpeg",
        gallery_img:["images/drawing1.jpeg","images/drawing2.jpeg","images/drawing3.jpeg"]
    },
    tech:{
        title:"المعرض التقني",
        date:"20/10/2026:الزمان",
        location:"المكان : جامعة تشرين",
        description:"المعرض التقني هو فعالية تجمع بين المهندسين والعلماء لعرض أحدث التقنيات والابتكارات في مجالات التكنولوجيا والهندسة والعلوم.",
        event_map:"images/map6.jpeg",
        gallery_img:["images/tec1.jpeg","images/tec2.jpeg","images/tec3.jpeg"]
    },
    calis:{
        title:"عرض كالستانيكس وفنون قتالية",
        date:"24/10/2026 : الزمان",
        location:"المكان : نادي  الماتادور الرياضي",
        description: "تمارين رياضية ممتعة تساعد على تقوية الجسم وبناءه بتناسق وتحسين اللياقة البدنية وزيادة مرونة العضام والعضلات      بإدارة الكوتش سلطان  الغضبان ",
        event_map:"images/map7.jpeg",
        gallery_img:["images/calis1.jpeg","images/calis2.jpeg","images/calis3.jpeg"]
    },
    app:{
        title: "مسابقة برمجة تطبيق",  
        date:"30/10/2026 : الزمان",
        location:"المكان : الجامعة الإفتراضية السورية",
        description:"مسابقة برمجة تطبيقات الهاتف المحمول تهدف إلى تشجيع المبرمجين على تطوير تطبيقات مبتكرة ومفيدة للمستخدمين. سيتم تقييم التطبيقات بناءً على الإبداع والوظائف وسهولة الاستخدام.",
        event_map:"images/map8.jpeg",
        gallery_img:["images/app1.jpeg","images/app2.jpeg","images/app3.jpeg"]
    }


}
const selectedEvent = events[eventId];

if (!selectedEvent) {
    window.location.href = "events.html";
} else {
document.getElementById("event_title").textContent= selectedEvent.title;
document.getElementById("event_date").textContent= selectedEvent.date;
document.getElementById("event_location").textContent= selectedEvent.location;
document.getElementById("event_description").textContent= selectedEvent.description;
document.getElementById("event_map").src= selectedEvent.event_map;
document.getElementById("images1").src= selectedEvent.gallery_img[0];
document.getElementById("images2").src= selectedEvent.gallery_img[1];
document.getElementById("images3").src= selectedEvent.gallery_img[2];

const similarEvents = Object.entries(events)
    .filter(([id]) => id !== eventId)
    .slice(0, 2);

similarEvents.forEach(([id, event], index) => {
    const cardNumber = index + 1;
    document.getElementById(`similar_image_${cardNumber}`).src = event.gallery_img[0];
    document.getElementById(`similar_title_${cardNumber}`).textContent = event.title;
    document.getElementById(`similar_description_${cardNumber}`).textContent = event.description;
    const link = document.getElementById(`similar_link_${cardNumber}`);
    link.href = `event.html?id=${id}`;
});
}