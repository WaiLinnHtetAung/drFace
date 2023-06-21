import { createStore } from 'vuex'

export default createStore({
    state: {
        pageStatus: 'skincare',
        products: [{
                id: 1,
                img: require('@/assets/Products/01.all-in-one/img1.png'),
                ingredients: ['Lauric Acid', 'Vitamin A & E', 'Antioxidants'],
                name: "Dr.face all in one facial cleanser ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #d5a5ad 50%, #e1bbc2 40%);",
                info: `
                <ul>
                  <li class="mb-2"> <span style="color: #da6972;">Lauric Acid</span> ဖြင့်အရေပြားကိုအာဟာရဖြည့်တင်းပေးနိုင်သည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Vitamin A & E</span> ပါ ဝင်တာကြောင့် ဆဲလ်အသစ်ဖြစ်ပေါ်စေသည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Antioxidants</span> မြောက်မြားစွာဖြင့်အရေပြားကိုကြည်လင်နူးညံ့စေပါသည်</li>
                  <li class="mb-2">ရောင်ရမ်းခြင်းများကိုကျစေပြီး ဝက်ခြံ အမာရွတ် အနာအဆာများကို ပြန်လည်ကုသပေးနိုင်သည်။</li>
              </ul>
                `
            },
            {
                id: 2,
                img: require('@/assets/Products/01.all-in-one/img2.png'),
                ingredients: ['Lauric Acid', 'Vitamin A & E', 'Antioxidants'],
                name: "Dr.face all in one facial cleanser ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #4987e6 50%, #85b1f3 40%)",
                info: `
                <ul>
                  <li class="mb-2"> <span style="color: #da6972;">Lauric Acid</span> ဖြင့်အရေပြားကိုအာဟာရဖြည့်တင်းပေးနိုင်သည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Vitamin A & E</span> ပါ ဝင်တာကြောင့် ဆဲလ်အသစ်ဖြစ်ပေါ်စေသည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Antioxidants</span> မြောက်မြားစွာဖြင့်အရေပြားကိုကြည်လင်နူးညံ့စေပါသည်</li>
                  <li class="mb-2">ရောင်ရမ်းခြင်းများကိုကျစေပြီး ဝက်ခြံ အမာရွတ် အနာအဆာများကို ပြန်လည်ကုသပေးနိုင်သည်။</li>
              </ul>
                `
            },
            {
                id: 3,
                img: require('@/assets/Products/02.gluta/img.png'),
                ingredients: ['Glutathione', 'Vitamin – C', 'Collagen Peptide', 'CoQ10'],
                name: "The Beauty Doctor (Gluta Glow Dietary Supplement)",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #f2b1b7 50%, #f2bdb9 40%)",
                info: `
                <ul>
                  <li class="mb-2">အသားဖြူဝင်းစေသည့် <span style="color: #da6972;">Glutathione</span></li>
                  <li class="mb-2">ကိုယ်ခံအားမြင့်စေသည့် <span style="color: #da6972;">Vitamin – C </span> </li>
                  <li class="mb-2">အသားအရေတင်းရင်းစေသော <span style="color: #da6972;">Collagen Peptide</span> </li>
                  <li class="mb-2">အရွယ်တင်နုပျိုစေသည့် <span style="color: #da6972;">CoQ10</span>  တို့ပါဝင်ပါသည်။ </li>
                  <li class="mb-2">တစ်နေ့တစ်လုံးပုံမှန်သောက်သုံးပေးရုံဖြင့် ၃လအတွင်း သိသာစွာ အသားအရေ ဖြူဝင်းလာစေပါသည် ။</li>
                  <li class="mb-2">မှတ်ချက် ။   ။ ကိုယ်ဝန်ဆောင်နှင့်နို့တိုက်မိခင်များ၊သွေးတိုး ၊ဆီးချို၊နှလုံးရောဂါ၊ကျောက်ကပ်ရောဂါ (လက်ရှိ )ဖြစ်နေတဲ့သူများမသောက်သုံးသင့်ပါ။  ညစာစားပြီး ရေ (သို့မဟုတ်) သံပုရာရည် ဖြင့် သောက်သုံးနိုင်ပါသည် ။</li>
                </ul>
                `
            },
            {
                id: 4,
                img: require('@/assets/Products/03.byebye/img.png'),
                ingredients: ['Salicylic acid', 'Calamine', 'Sulfur'],
                name: "Dr.face Bye Bye Blemishes Solution Drying Lotion",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #ed677f 50%, #e78a9b 40%)",
                info: `
                <ul>
                  <li class="mb-2">ဘာသုံးသုံးဝက်ခြံ မသက်သာသေးသူများအတွက် Dr.face ရဲ့ ဝက်ခြံကု နောက်ဆုံးကျည်ဆံ</li>
                  <li class="mb-2">ဆိုးရွားနေတဲ့ဝက်ခြံ အလုံးတွေ အရောင်ကျသွားပြီး ဝက်ခြံ ဆိုဒ်ကြီးနေတာတွေ သေးသွားမယ့် ဝက်ခြံ လိုးရှင်း </li>
                  <li class="mb-2"> <span style="color: #da6972;">Salicylic acid</span> - ဝက်ခြံပိုးသေစေတယ် သက်သာစေတယ်။</li>
                  <li class="mb-2"> <span style="color: #da6972;">Calamine acid</span> - ယားယံတာသက်သာ ၊ရောင်ရမ်းတာတွေ ကျစေတယ်။</li>
                  <li class="mb-2"> <span style="color: #da6972;">Sulfur</span> - အဆီပြန်ခြင်းကိုထိန်းချုပ်ပေးတယ်။</li>
                  <li class="mb-2">မျက်နှာသာမကပဲ တစ်ကိုယ်လုံးထွက်သမျှဝက်ခြံ တွေပေါ် အုံပေးနိုင်ပါသည်။ </li>
                </ul>
                `
            },
            {
                id: 5,
                img: require('@/assets/Products/04.acne-back-spray/img.png'),
                ingredients: ['Salicylic acid', 'Zinc', 'Vitamin E', 'Chamomile extract'],
                name: "Dr.Face Body Acne Spray ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #93b9a2 50%, #d5e5d8 40%)",
                info: `
                <ul>
                  <li class="mb-2">ရင်ဘတ် နဲ့ နောက်ကျောဝက်ခြံ ထွက်သူတွေအတွက် တစ်နေ့ တစ်ကြိမ် (ည) ၃လလောက် ဖျန်းလေးရုံနဲ့ သက်သာပယ့် <span style="color: #da6972;">Dr.face Body Acne Spray</span></li>
                  <li class="mb-2"> <span style="color: #da6972;">Salicylic acid + Zinc + Vitamin E + Chamomile extract</span> အကောင်းဆုံးဖော်မြူလာ</li>
                  <li class="mb-2">ဝက်ခြံ ဖြစ်စေသော ဘတ်တီးရီးယား ပိုးများသေစေပြီး ရောင်ရမ်းခြင်းအမြန်ကျစေသည် ။ </li>
                  <li class="mb-2">ကျန်ခဲ့သောအမာရွတ်များကို မှေးမှိန်ပြီး အရှင်းပျောက်ကင်းစေသည်။ </li>
                </ul>
                `
            },
            {
                id: 6,
                img: require('@/assets/Products/05.glow-body-serum/img.png'),
                ingredients: ['Glutathtione', 'Naicinamide', 'Hyaluronic acid', 'Shea butter'],
                name: "Dr.face Glow Booster Body Serum ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #e4e4e4 50%, #efefef 40%)",
                info: `
                <ul>
                <li class="mb-2"> <span style="color: #da6972;">Glutathtione ,Naicinamide,Hyaluronic acid</span>  နဲ့ <span style="color: #da6972;">Shea butter</span>ပါဝင်လို့ အသားအရေ ကိုဖြူဖွေးစေတယ်</li>
                <li class="mb-2"><span style="color: #da6972;">Vitamin E</span>ကအသားအရေ ကိုနူးညံ့ချော့မွေ့စေတယ် ။ </li>
                <li class="mb-2">မနက်ရောညရောလိမ်းနိုင်ပါသည် ။</li>
                </ul>
                `
            },
            {
                id: 7,
                img: require('@/assets/Products/06.aha-serum/img.png'),
                ingredients: ['AHA', 'Shea Butter', 'Hyaluronic acid'],
                name: "Dr.face AHA Repair & Revive Body Serum ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #e9c16c 50%, #f9e5bc 40%)",
                info: `
                <ul>
                <li class="mb-2"> <span style="color: #da6972;">AHA</span> ကဆဲလ်သေတွေ ဂျီးတွေချွတ်ပေးပြီး ကြမ်းတမ်းခြောက်သွေ့ပျက်စီးနေသော အသားအရေကို ကုသပေးနိုင်ပါသည်။</li>
                <li class="mb-2"><span style="color: #da6972;">Shea Butter </span> နဲ့ <span style="color: #da6972;">Hyaluronic Acid </span>က အသားအရေကို ပြန်လည် ချောမွေ့အောင်ကုသပေးပြီး အစိုဓာတ်ဖြည့်ပေးပါတယ်  ။ </li>
                <li class="mb-2">ကြာဆူးတွေ ခန္ဓာကိုယ် မှာ ဝက်ခြံ ဖြစ်ပြီး ကျန်ခဲ့တဲ့အမာရွတ် အမဲစက် တွေ ၊လက်မဲ၊ဂျိုင်းမဲ ၊ဒူးမဲ ၊ပေါင်မဲ နေတာတွေ အကုန်လုံးကိုကုသမပေးမယ့် <span style="color: #da6972;">Repair & Revive Body Serum</span></li>
                <li class="mb-2">အသားအရေကို ပြုစုကုသပေးတဲ့ <span style="color: #da6972;">AHA</span> ပါဝင်တာမို့ ညဘက်လိမ်းပေးသင့်ပါတယ် နေ့ခင်းဘက်လိမ်းမယ်ဆိုရင် နေလောင်ကာ ပါလိမ်းပြီးမှ နေပူထဲထွက်သင့်ပါတယ်</li>
                </ul>
                `
            },
            {
                id: 8,
                img: require('@/assets/Products/07.lip-balm/img.png'),
                ingredients: [],
                name: "Dr.face Lip Balm ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #b4ca5a 50%, #ccde80 40%)",
                info: `
                <ul>
                  <li class="mb-2"> နှုတ်ခမ်းသားခြောက်သွေ့အက်ကွဲခြင်း၊ညိုမဲနေသော နှုတ်ခမ်းများအတွက် အစိုဓာတ်ဖြည့်ပြီး နူးညံ့သော နှုတ်ခမ်းသားကို ရရှိစေသည့်လိမ်းဆေး ဖြစ်ပါသည်။</li>
                  
                </ul>
                `
            },
            {
                id: 9,
                img: require('@/assets/Products/08.sun-essence/img.png'),
                ingredients: [],
                name: "Dr.face Sun Essence SPF 50PA++++",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #d1bd56 50%, #e0d282 40%)",
                info: `
                <ul>
                  <li class="mb-2"> <span style="color: #da6972;">Dr.face sun essence</span> သည် နေရောင်ခြည် UVA & UVB ၂မျိုးစလုံးကို အဆ ၅၀ ကာကွယ်ပေးနိုင်သည့်အပြင် လိမ်းပြီးနောက် စေးကပ်ခြင်း ပြာနှမ်းခြင်းလုံးဝမရှိပါ။</li>
                  <li class="mb-2"> နေလောင်ကာ <span style="color: #da6972;">sunscreen </span> နှင့် <span style="color: #da6972;">essence </span>ကို ပေါင်းစပ်ထုတ်လုပ်ထားသည်။ </li>
                  <li class="mb-2">Japan နည်းပညာကို အသုံးပြုထားပါသည် </li>
                </ul>
                `
            },
            {
                id: 10,
                img: require('@/assets/Products/09.pore-toner/img.png'),
                ingredients: [],
                name: "Dr.face Pore Minimizer Clarifying  Toner ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #cb6914 50%, #ea8833 40%)",
                info: `
                <ul>
                  <li class="mb-2"> သဘာဝသစ်ဖုများမှ ထုတ်ယူထားသော တိုနာ ဖြစ်ပါသည်။</li>
                  <li class="mb-2"> ဆဲလ်သေများဖယ်ရှားပေးခြင်း</li>
                  <li class="mb-2">အဆီနှင့်အညစ်အကြေးများဖယ်ရှားပေးခြင်း </li>
                  <li class="mb-2">ချွေးပေါက်ကျဉ်းစေခြင်း</li>
                  <li class="mb-2">ဝက်ခြံ ရောင်ရမ်းကျစေသည့်အပြင် အစိုဓာတ် ကိုလည်း ထိန်းညှိပေးနိုင်သောတိုနာ ဖြစ်ပါသည် ။</li>
                </ul>
                `
            },
            {
                id: 11,
                img: require('@/assets/Products/10.vitamin-C/img.png'),
                ingredients: [],
                name: "Dr.face Vitamin C serum ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #d9d9d9 50%, #f0ecec 40%)",
                info: `
                <ul>
                  <li class="mb-2">ဝက်ခြံ ၊ အမာရွတ် ၊ ချွေးပေါက်ကျယ်၊ အရေးအကြောင်းများအတွက် အထူးထုတ်လုပ်ထားသည့်လိမ်းဆေးဖြစ်ပါသည်။ </li>
                  <li class="mb-2"> သဘာဝနာနတ်သီး အဆီအနှစ်ဖြင့်ဖော်စပ်ထားပါသည် ။</li>
                </ul>
                `
            },
            {
                id: 12,
                img: require('@/assets/Products/11.aloe-gel/img.png'),
                ingredients: [],
                name: "Dr.face Aloe Vera With Tea Tree Oil",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #82b88a 50%, #a9e9b3 40%)",
                info: `
                <ul>
                  <li class="mb-2">ရှားစောင်းလက်ပတ် နှင့် လက်ဖက်စိမ်းပေါင်းစပ်ထားသော ဖော်မြူလာအသစ် ဖြစ်ပါသည်</li>
                  <li class="mb-2">ဦးရေပြားယားယံခြင်း ၊ ဗောက်ထခြင်းကိုသက်သာစေသည် </li>
                  <li class="mb-2">ဦးရေပြား၏ရောင်ရမ်းခြင်းများကျစေပြီး အစိုဓာတ်ဖြည့်ပေးသည်</li>
                  <li class="mb-2">ဝက်ခြံကြောင့် ဖြစ်သော အမာရွတ် များနှင့် အရေပြားခြောက်သွေ့ခြင်းကို သက်သာ စေပါသည် </li>
                  <li class="mb-2">နေလောင်ထားသော အသားအရေကို အေးမြစေသည်</li>
                </ul>
                `
            },
            {
                id: 13,
                img: require('@/assets/Products/12.pink-egg/img.png'),
                ingredients: [],
                name: "Dr.face Pink Egg",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #d6aab6 50%, #e4c4cd 40%)",
                info: `
                <ul>
                  <li class="mb-2">အလှဆုံးမိတ်ကပ်လိမ်းဖို့ နူးညံ့အိစက်တဲ့ Dr.face ရဲ့ ပန်းရောင်ဥ</li>
                  <li class="mb-2">မိတ်ကပ် ပေါင်ဒါ ဖောင်ဒေးရှင်း တွေကိုမြန်မြန်ဆန်ဆန် ညီညီညာညာ လှပစေမယ့် ဥ </li>
                  <li class="mb-2">အကောင်းဆုံးအနူးညံ့ဆုံး အထိအတွေ့နဲ့ နှစ်သက်စရာ ဥ</li>
                  <li class="mb-2">အလာဂျီ (ဓာတ်မတည့်မှု)လုံးဝမရှိသော နည်းပညာ အပြင် <span style="color: #da6972;">UV sterilization </span> ဖြင့် ပိုးသတ်ထားသော အလွန်သန့်ရှင်းသည့် ဥ များဖြစ်ပါသည်</li>
                </ul>
                `
            },
            {
                id: 14,
                img: require('@/assets/Products/13.eye-serum/img.png'),
                ingredients: ['Adenosine', 'Astaxanthin', 'Glutathtione', 'Niacinamide', 'Panthenol'],
                name: "Dr.face Advanced Repair Eye Serum",
                price: "1000 Ks",
                bg: 'background-image: -webkit-linear-gradient(65deg, #e5bb71 50%, #efcb8b 40%)',
                info: `
                <ul>
                  <li class="mb-2">မျက်ကွင်းညိုခြင်း မျက်ဝန်းတဝိုက် အရေးအကြောင်းများအတွက် <span style="color: #da6972;">2 in 1</span> ဖော်မြူလာ </li>
                  <li class="mb-2"> <span style="color: #da6972;"> Adenosine </span>  နဲ့ <span style="color: #da6972;"> Astaxanthin </span>  ဆိုတဲ့ <span style="color: #da6972;"> botox-like ingredient </span> (botox လိုအသားအရေတင်းရင်းစေ) ပါဝင်လို့ အရေးအကြောင်းဖြစ်လွယ်တဲ့ မျက်လုံးတဝိုက် ကိုတင်းရင်းစေတယ်  </li>
                  <li class="mb-2"><span style="color: #da6972;"> Glutathtione, Niacinamide </span> တွေက မျက်ကွင်းညိုတာတွေကို ပြန်ဖြူစေတယ်</li>
                  <li class="mb-2"><span style="color: #da6972;"> Panthenol (Vitamin B complex) </span> က အသားအရေကိုဖြူဖွေးနူးညံ့စေတယ်</li>
                  <li class="mb-2"><span style="color: #da6972;"> Serum Type (Vitamin B complex) </span> ဖြစ်လို့ ပိုပြီးစိမ့်ဝင်မှု လွယ်တယ်၊ ကုသမှုမြန်တဲ့ဖော်မြူလာ </li>
                </ul>
                `
            },
            {
                id: 15,
                img: require('@/assets/Products/14.anti-aging/img.png'),
                ingredients: ['Hyaluronic acid'],
                name: "Dr.face Anti-Aging Serum",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #f0b5c9 50%, #fdc7d9 40%)",
                info: `
                <ul>
                  <li class="mb-2">အရွယ်မတိုင်ခင် အိုမင်းရင့်ရော်ခြင်းကို ကာကွယ်ပေးပြီး အရေးမကြောင်းများကို လျော့ပါးတင်းရင်းစေတဲ့ <span style="color: #da6972;">Dr.face Ant- Aging serum</span></li>
                  <li class="mb-2"> <span style="color: #da6972;"> Filler </span>  ထိုးဆေးမှု ပါဝင်တဲ့ <span style="color: #da6972;"> Hyaluronic acid  </span>  ကို <span style="color: #da6972;"> Gel in serum formula </span> ဖြင့် ထည့်သွင်းထားသောကြောင့် တင်းရင်းလာစေပြီး အရေးအကြောင်းတွေကို ပြေပျောက်စေပါတယ် </li>
                  <li class="mb-2">အရေပြားကိုအမြင့်ဆုံးအစိုဓာတ်ဖြည့်ပေးနိုင်ပါတယ် </li>
                  <li class="mb-2">ရှားစောင်းလက်ပတ်ပါဝင်ပါတယ် </li>
                  <li class="mb-2">အသက်ကြီးလာတာနဲ့ အရေပြားကအသစ်ဖြစ်နှုန်းနှေးလာမယ် ၊ခြောက်သွေ့လာမယ် ၊ အတွန့်လေးတွေ ပေါ်လာမယ် ဘာလိမ်းလိမ်းထိရောက်မှု မရှိတော့ဘူးဘာကြောင့်လဲဆိုတော့ အရေပြားရဲ့ဗီတာမင်အေ စုပ်ယူမှု နှေးလာလို့ပါ။ <span style="color: #da6972;"> Dr.face anti-aging serum </span> မှာ <span style="color: #da6972;"> Retinol </span> လို့ခေါ်တဲ့ ဗီတာမင်အေ ဓာတ်ပေါင်းပါဝင်လို့ ဆဲလ်အသစ်အမြန်ဖြစ်ပေါ်စေပြီးအသားအရေတင်းရင်းစေပါတယ်</li>
                </ul>
                `
            },
            {
                id: 16,
                img: require('@/assets/Products/15.powder/img.png'),
                ingredients: ['oil'],
                name: "Dr.face Powder Foundation",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #d1d1d3 50%, #eaeaec 40%)",
                info: `
                <ul>
                  <li class="mb-2">ပြီးပြည့်စုံတဲ့ အသားအရေ ကို ဖန်ဆင်းပေးမယ့် <span style="color: #da6972;">Powder Foundation</span></li>
                  <li class="mb-2"> မြန်မာအသားအရောင်နဲ့ လိုက်ဖက်ပြီး ပေါင်ဒါတစ်ခုတည်းနဲ့ ပြီးပြည့်စုံတဲ့ အသားအရေကိုဖန်တီးပေးမှု</li>
                  <li class="mb-2">အဆီပြန်ခြင်းကိုထိန်းချုပ်နိုင်သော  <span style="color: #da6972;">oil control</span> နည်းပညာ </li>
                  <li class="mb-2"><span style="color: #da6972;">Powder Foundation</span> ဖြစ်တာကြောင့် အောက်ခံဖောင်ဒေးရှင်း ထူထူကြီး လိမ်းဖို့မလိုပဲပေါင်ဒါတစ်ခုတည်းနဲ့ အသားအရေကိုဖြူဖွေးလှပစေသည်</li>
                  <li class="mb-2">မျက်နှာပေါ်မှ အနာအဆာ နှင့် ချွေးပေါက်များကို ဖုံးကွယ်ပြီး တစ်နေ့တာလုံးလှပစေပါသည် </li>
                  <li class="mb-2"><span style="color: #da6972;">02</span>-ဖြူ ၊ <span style="color: #da6972;">2.5</span>  ဖြူဝါ / <span style="color: #da6972;">03</span> ဝါဝင်းသော ၊ <span style="color: #da6972;">04</span> ညိုညက်သောအသားအရေအလိုက် အရောင် ရွေးချယ်ဝယ်ယူနိုင်ပါသည်</li>
                </ul>
                `
            },
            {
                id: 17,
                img: require('@/assets/Products/16.water-gel/img.png'),
                ingredients: [],
                name: "Dr.face Skin Moisturizer Water Gel",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #56c0e2 50%, #6ecded 40%)",
                info: `
                <ul>
                  <li class="mb-2">အေးမြစေပြီး လန်းဆန်းစေ‌သော အဆီလုံးဝမပြန်တဲ့  <span style="color: #da6972;">Gel Moisturizer </span></li>
                  <li class="mb-2"> အဆီလုံးဝမပါ</li>
                  <li class="mb-2">စေးကပ်ခြင်းလုံးဝမရှိ </li>
                  <li class="mb-2">အေးမြလန်းဆန်း </li>
                  <li class="mb-2"><span style="color: #da6972;"> sensitive skin </span> အသုံးပြုနိုင်</li>
                  <li class="mb-2">ဝက်ခြံသမာများလည်းအဆင်ပြေ</li>
                  <li class="mb-2">အရေးအကြောင်းတွေတင်းရင်းမယ်</li>
                  <li class="mb-2">Plumping effect</li>
                </ul>
                `
            },
            {
                id: 18,
                img: require('@/assets/Products/17.treatment-toner/img.png'),
                ingredients: [],
                name: "Dr.face Treatment Toning Lotion ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #c9c8c8 50%, #ecedef 40%)",
                info: `
                <ul>
                  <li class="mb-2">တိုနာတွေသုံးနေပေမယ့် ဘာမှ မထူးလာဘူး’ ဆိုသူတွေအတွက် အရေပြားကုထုံးဆေးရည်</li>
                  <li class="mb-2"> ချွေးပေါက်ကျဉ်းမြောင်စေခြင်း</li>
                  <li class="mb-2">အသားအရေကိုကြည်လင်လန်းဆန်းစေခြင်း </li>
                  <li class="mb-2">အစိုဓာတ်ထိန်းညှိပေးနိုင်ခြင်း </li>
                  <li class="mb-2">ဘတ်တီးရီးယားပိုးမွှားများမှ ကာကွယ်ပေးခြင်း</li>
                  <li class="mb-2">အရွယ်တင်နုပျိုစေခြင်း</li>
                </ul>
                `
            },
            {
                id: 19,
                img: require('@/assets/Products/18.remover/img.png'),
                ingredients: [],
                name: "Dr.face Tea Tree Make Up Remover Cleansing Wipes ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #c79d14 50%, #d7bb5e 40%)",
                info: `
                <ul>
                  <li class="mb-2">သင်ကမိတ်ကပ် ဖျက်ရမှာ ပျင်းတဲ့လူလား? </li>
                  <li class="mb-2"> ဝက်ခြံမထွက်အောင်ကာကွယ်ပေးနိုင်တဲ့ အစွမ်းနဲ့ အဝါရောင် <span style="color: #da6972;"> Magic Paper !</span> </li>
                  <li class="mb-2">လက်ဖက်စိမ်းနဲ့ထုတ်လုပ်ထားလို့ ဝက်ခြံ ထွက်လွယ်သော <span style="color: #da6972;"> sensitive skin  </span> များလည်းစိတ်ချသုံးလို့ ရမယ့် နည်းလမ်းသစ် </li>
                  <li class="mb-2">ရောင်ရမ်းခြင်းကိုကျစေပြီး ဝက်ခြံထွက်ခြင်းမှလည်းကာကွယ်ပေးနိုင်တယ် </li>
                  <li class="mb-2">မိတ်ကပ် အဆီနှင့် အညစ်အကြေးများကို ဒီတစ်ပိုင်းတည်းနဲ့ သန့်စင်ပေးနိုင်တယ်</li>
                  <li class="mb-2">မိတ်ကပ်များဖျက်ပြီးချိန်မှာလည်းအသားအရေ ခြောက်သွေ့ခြင်းလုံးဝမရှိတဲ့အပြင် အစိုဓာတ်ကို ဖြည့်တင်းပေးတယ်</li>
                </ul>
                `
            },
            {
                id: 20,
                img: require('@/assets/Products/19.t-zone/img.png'),
                ingredients: [],
                name: "Dr.face Tzone pack ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #d29da2 50%, #fbdcde 40%)",
                info: `
                <ul>
                  <li class="mb-2">ဆဲလ်သေဖယ်ရှားကပ်ခွာ </li>
                  <li class="mb-2"> အရေပြားအပေါ်ဆုံးအလွှာရှိဆဲလ်သေတွေကို နာရီဝက်အတွင်းဖယ်ရှားပေးနိုင်ခြင်း </li>
                  <li class="mb-2">ချွေးပေါက်အတွင်းပိတ်မိနေသောမိတ်ကပ်အကြွင်းအကျန်နှင့်အဆီအညစ်အကြေးများကို ချက်ချင်းဖယ်ရှားနိုင်ခြင်း </li>
                  <li class="mb-2">အရေပြားကိုချက်ချင်းလက်ငင်းဖြူဝင်းသွားစေနိုင်ခြင်း</li>
                  <li class="mb-2">ချွေးပေါက်များကျဉ်းမြောင်းလာခြင်း</li>
                  <li class="mb-2">လျော့တွဲနေသောအသားအရေကိုပြန်လည်တင်းရင်းစေခြင်း</li>
                  <li class="mb-2">မိမိနေ့စဉ်အသုံးပြုနေသော skin care များကို အရေပြားအတွင်းသို့ပုံမှန်ထက် ၁၀ဆ ပိုမိုစိမ့်ဝင်စေနိုင်ခြင်း</li>
                  <li class="mb-2">(မျက်နှာပေါ်တွင် နာရီဝက်ခန့်လိမ်းပြီးခွာပါ ပြီးနောက်မှ ရေနဲ့ဆေးချပေးပါ)</li>
                </ul>
                `
            },
            {
                id: 21,
                img: require('@/assets/Products/20.v-mask/img.png'),
                ingredients: ['PPC', 'Collagen', 'Caffeine', 'Vitamin-C', 'Gingko biloba leaf extract', 'Pumpkin fruit extract'],
                name: "Dr.face V Shape Mask",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #b8447a 50%, #d997b6 40%)",
                info: `
                <ul>
                  <li class="mb-2">မေးနှစ်ထပ်အဆီပိုများ ဖယ်ရှားပြီး မျက်နှာတင်းရင်းသွယ်လျနုပျိုစေသည် </li>
                  <li class="mb-2"> <span style="color: #da6972;"> Transdermal Delivery System</span> ဖြင့် အရေပြားအတွင်းပိုင်းထိ <span style="color: #da6972;"> Nano Technology Formula</span> ဖြင့် <span style="color: #da6972;"> ingredients</span>  များကို ပို့ဆောင်ပေးသည်</li>
                  <li class="mb-2"> <span style="color: #da6972;"> PPC , Collagen ,Caffeine ,Vitamin-C ,Gingko biloba leaf extract , Pumpkin fruit extract</span>  တို့ဖြင့် မျက်နှာပါးရိုး နှင့် မေးရိုးတစ်လျှောက်အဆီပိုများကို ချပ်ရပ်သွယ်လျစေပါသည်</li>
                  <li class="mb-2">အသက်ကြီးလာလို့ ဖြစ်တတ်သော ကြွက်သားတွဲကျခြင်းကို ပြုပြင်ပြီးတင်းရင်းစေပါသည်</li>
                  <li class="mb-2">အသက်အရွယ်ရလာ၍ကြွက်သားလျော့တိလျော့ရဲဖြစ်နေသူများ</li>
                  <li class="mb-2">မျက်နှာဖောင်းအစ်နေသူများ၊မေး၂ထပ်ဖြစ်နေသူများအတွက် မျက်နှာကိုချပ်ရပ်သွယ်လျစေပါသည်</li>
                </ul>
                `
            },
            {
                id: 22,
                img: require('@/assets/Products/21.skin-care-mask/img.png'),
                ingredients: ['CICA Tea Tree Leaf extract', 'Panthenol', 'allantoin', 'Hyaluronic Acid'],
                name: "Dr.face all in one skin care mask ",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #6f8750 50%, #a5c876 40%)",
                info: `
                <ul>
                  <li class="mb-2">ဝက်ခြံကင်းရှင်း မျက်နှာဖြူဝင်းလာစေဖို့</li>
                  <li class="mb-2"> <span style="color: #da6972;"> CICA (Centella asiatica extract) Tea Tree Leaf extract ,Panthenol, allantoin,Hyaluronic Acid </span> တို့ဖြင့် ထုတ်လုပ်ထားသော <span style="color: #da6972;"> Dr.face all in one mask</span> ဖြစ်ပါသည်</li>
                  <li class="mb-2"> ဝက်ခြံ ၊ ချွေးပေါက်ကျယ် ၊ အမဲစက် ၊ အရေးအကြောင်း အားလုံးအတွက် တစ်မျိုးတည်းအသုံးပြုရုံဖြင့် သိသာသောရလဒ်ကို တစ်ကြိမ်တည်းမှာ ချက်ချင်းတွေ့မြင်ခံစားနိုင်ပါသည်</li>
                </ul>
                `
            },
            {
                id: 23,
                img: require('@/assets/Products/22.spot-gel/img.png'),
                ingredients: ['Salicylic Acid', 'Moisturizer', 'Centella extract', 'Niacinamide'],
                name: "Dr.face spot clear gel",
                price: "1000 Ks",
                bg: "background-image: -webkit-linear-gradient(65deg, #196892 50%, #7dbee2 40%)",
                info: `
                <ul>
                  <li class="mb-2">ဝက်ခြံ၊ အမာရွတ်၊ အဆီဖုများ ပျောက်ကင်းသက်သာစေမည့်တို့တို့ဂျယ်</li>
                  <li class="mb-2"> <span style="color: #da6972;"> Moisturizer effect </span>  ပါဝင်မှုကြောင့် အသားအရေ ခြောက်သွေ့ခြင်းလုံးဝ မရှိ</li>
                  <li class="mb-2"> <span style="color: #da6972;"> Salicylic Acid </span> ကြောင့် ဘတ်တီးရီးယားများသေစေပြီး ဝက်ခြံ ထပ်မထွက်အောင်တားဆီးပေးနိုင်သည်</li>
                  <li class="mb-2"> <span style="color: #da6972;"> Centella extract,Niacinamide </span> တို့ကြောင့်အမာရွတ်များကို အမြန်ဆုံးကုသပေးနိုင်သည်
                  </li>
                  <li class="mb-2">အေးမြအထိအတွေ့နဲ့လမ်းဆန်းသော ရနံ့</li>
                </ul>
                `
            },
        ],
        product: '',
    },
    getters: {
        getPageStatus(state) {
            return state.pageStatus;
        },

        getProducts(state) {
            return state.products;
        },

        getProduct(state) {
            return state.product;
        }
    },
    mutations: {
        setPageStatus: (state, status) => state.pageStatus = status,
        setProduct: (state, product) => state.product = product,
    },
    actions: {
        getPageStatus: (context, status) => context.commit('setPageStatus', status),
        getProduct: (context, id) => {
            let product = context.state.products.find(product => product.id == id);
            context.commit('setProduct', product);
        }
    },
    modules: {}
})