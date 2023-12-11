import { createStore } from "vuex";

export default createStore({
  state: {
    pageStatus: "skincare",
    products: [
      {
        id: 1,
        img: require("@/assets/Products/01.all-in-one/img1.png"),
        ingredients: ["Lauric Acid", "Vitamin A & E", "Antioxidants"],
        name: "Dr.face all in one facial cleanser ",
        price: "18900 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #d5a5ad 50%, #e1bbc2 40%);",
        info: `
                <ul>
                  <li class="mb-2"> <span style="color: #da6972;">Lauric Acid</span> ဖြင့်အရေပြားကိုအာဟာရဖြည့်တင်းပေးနိုင်သည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Vitamin A & E</span> ပါ ဝင်တာကြောင့် ဆဲလ်အသစ်ဖြစ်ပေါ်စေသည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Antioxidants</span> မြောက်မြားစွာဖြင့်အရေပြားကိုကြည်လင်နူးညံ့စေပါသည်</li>
                  <li class="mb-2">ရောင်ရမ်းခြင်းများကိုကျစေပြီး ဝက်ခြံ အမာရွတ် အနာအဆာများကို ပြန်လည်ကုသပေးနိုင်သည်။</li>
              </ul>
                `,
        set: ["acne", "anti-aging"],
      },
      {
        id: 2,
        img: require("@/assets/Products/01.all-in-one/img2.png"),
        ingredients: ["Lauric Acid", "Vitamin A & E", "Antioxidants"],
        name: "Dr.face all in one facial cleanser ",
        price: "18900 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #4987e6 50%, #85b1f3 40%)",
        info: `
                <ul>
                  <li class="mb-2"> <span style="color: #da6972;">Lauric Acid</span> ဖြင့်အရေပြားကိုအာဟာရဖြည့်တင်းပေးနိုင်သည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Vitamin A & E</span> ပါ ဝင်တာကြောင့် ဆဲလ်အသစ်ဖြစ်ပေါ်စေသည်</li>
                  <li class="mb-2"> <span style="color: #da6972;">Antioxidants</span> မြောက်မြားစွာဖြင့်အရေပြားကိုကြည်လင်နူးညံ့စေပါသည်</li>
                  <li class="mb-2">ရောင်ရမ်းခြင်းများကိုကျစေပြီး ဝက်ခြံ အမာရွတ် အနာအဆာများကို ပြန်လည်ကုသပေးနိုင်သည်။</li>
              </ul>
                `,
        set: ["whitening", "glow"],
      },
      {
        id: 3,
        img: require("@/assets/Products/02.gluta/img.png"),
        ingredients: [
          "Glutathione",
          "Vitamin – C",
          "Collagen Peptide",
          "CoQ10",
        ],
        name: "The Beauty Doctor (Gluta Glow Dietary Supplement)",
        price: "59000 Ks",
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
                `,
        set: [],
      },
      {
        id: 4,
        img: require("@/assets/Products/03.byebye/img.png"),
        ingredients: ["Salicylic acid", "Calamine", "Sulfur"],
        name: "Dr.face Bye Bye Blemishes Solution Drying Lotion",
        price: "19800 Ks",
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
                `,
        set: ["acne"],
      },
      {
        id: 5,
        img: require("@/assets/Products/04.acne-back-spray/img.png"),
        ingredients: [
          "Salicylic acid",
          "Zinc",
          "Vitamin E",
          "Chamomile extract",
        ],
        name: "Dr.Face Body Acne Spray ",
        price: "23600 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #93b9a2 50%, #d5e5d8 40%)",
        info: `
                <ul>
                  <li class="mb-2">ရင်ဘတ် နဲ့ နောက်ကျောဝက်ခြံ ထွက်သူတွေအတွက် တစ်နေ့ တစ်ကြိမ် (ည) ၃လလောက် ဖျန်းလေးရုံနဲ့ သက်သာပယ့် <span style="color: #da6972;">Dr.face Body Acne Spray</span></li>
                  <li class="mb-2"> <span style="color: #da6972;">Salicylic acid + Zinc + Vitamin E + Chamomile extract</span> အကောင်းဆုံးဖော်မြူလာ</li>
                  <li class="mb-2">ဝက်ခြံ ဖြစ်စေသော ဘတ်တီးရီးယား ပိုးများသေစေပြီး ရောင်ရမ်းခြင်းအမြန်ကျစေသည် ။ </li>
                  <li class="mb-2">ကျန်ခဲ့သောအမာရွတ်များကို မှေးမှိန်ပြီး အရှင်းပျောက်ကင်းစေသည်။ </li>
                </ul>
                `,
        set: [],
      },
      {
        id: 6,
        img: require("@/assets/Products/05.glow-body-serum/img.png"),
        ingredients: [
          "Glutathtione",
          "Naicinamide",
          "Hyaluronic acid",
          "Shea butter",
        ],
        name: "Dr.face Glow Booster Body Serum ",
        price: "24200 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #e4e4e4 50%, #efefef 40%)",
        info: `
                <ul>
                <li class="mb-2"> <span style="color: #da6972;">Glutathtione ,Naicinamide,Hyaluronic acid</span>  နဲ့ <span style="color: #da6972;">Shea butter</span>ပါဝင်လို့ အသားအရေ ကိုဖြူဖွေးစေတယ်</li>
                <li class="mb-2"><span style="color: #da6972;">Vitamin E</span>ကအသားအရေ ကိုနူးညံ့ချော့မွေ့စေတယ် ။ </li>
                <li class="mb-2">မနက်ရောညရောလိမ်းနိုင်ပါသည် ။</li>
                </ul>
                `,
        set: [],
      },
      {
        id: 7,
        img: require("@/assets/Products/06.aha-serum/img.png"),
        ingredients: ["AHA", "Shea Butter", "Hyaluronic acid"],
        name: "Dr.face AHA Repair & Revive Body Serum ",
        price: "24200 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #e9c16c 50%, #f9e5bc 40%)",
        info: `
                <ul>
                <li class="mb-2"> <span style="color: #da6972;">AHA</span> ကဆဲလ်သေတွေ ဂျီးတွေချွတ်ပေးပြီး ကြမ်းတမ်းခြောက်သွေ့ပျက်စီးနေသော အသားအရေကို ကုသပေးနိုင်ပါသည်။</li>
                <li class="mb-2"><span style="color: #da6972;">Shea Butter </span> နဲ့ <span style="color: #da6972;">Hyaluronic Acid </span>က အသားအရေကို ပြန်လည် ချောမွေ့အောင်ကုသပေးပြီး အစိုဓာတ်ဖြည့်ပေးပါတယ်  ။ </li>
                <li class="mb-2">ကြာဆူးတွေ ခန္ဓာကိုယ် မှာ ဝက်ခြံ ဖြစ်ပြီး ကျန်ခဲ့တဲ့အမာရွတ် အမဲစက် တွေ ၊လက်မဲ၊ဂျိုင်းမဲ ၊ဒူးမဲ ၊ပေါင်မဲ နေတာတွေ အကုန်လုံးကိုကုသမပေးမယ့် <span style="color: #da6972;">Repair & Revive Body Serum</span></li>
                <li class="mb-2">အသားအရေကို ပြုစုကုသပေးတဲ့ <span style="color: #da6972;">AHA</span> ပါဝင်တာမို့ ညဘက်လိမ်းပေးသင့်ပါတယ် နေ့ခင်းဘက်လိမ်းမယ်ဆိုရင် နေလောင်ကာ ပါလိမ်းပြီးမှ နေပူထဲထွက်သင့်ပါတယ်</li>
                </ul>
                `,
        set: [],
      },
      {
        id: 8,
        img: require("@/assets/Products/07.lip-balm/img.png"),
        ingredients: [],
        name: "Dr.face Lip Balm ",
        price: "7800 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #b4ca5a 50%, #ccde80 40%)",
        info: `
                <ul>
                  <li class="mb-2"> နှုတ်ခမ်းသားခြောက်သွေ့အက်ကွဲခြင်း၊ညိုမဲနေသော နှုတ်ခမ်းများအတွက် အစိုဓာတ်ဖြည့်ပြီး နူးညံ့သော နှုတ်ခမ်းသားကို ရရှိစေသည့်လိမ်းဆေး ဖြစ်ပါသည်။</li>
                  
                </ul>
                `,
        set: [],
      },
      {
        id: 9,
        img: require("@/assets/Products/08.sun-essence/img.png"),
        ingredients: [],
        name: "Dr.face Sun Essence SPF 50PA++++",
        price: "21700 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #d1bd56 50%, #e0d282 40%)",
        info: `
                <ul>
                  <li class="mb-2"> <span style="color: #da6972;">Dr.face sun essence</span> သည် နေရောင်ခြည် UVA & UVB ၂မျိုးစလုံးကို အဆ ၅၀ ကာကွယ်ပေးနိုင်သည့်အပြင် လိမ်းပြီးနောက် စေးကပ်ခြင်း ပြာနှမ်းခြင်းလုံးဝမရှိပါ။</li>
                  <li class="mb-2"> နေလောင်ကာ <span style="color: #da6972;">sunscreen </span> နှင့် <span style="color: #da6972;">essence </span>ကို ပေါင်းစပ်ထုတ်လုပ်ထားသည်။ </li>
                  <li class="mb-2">Japan နည်းပညာကို အသုံးပြုထားပါသည် </li>
                </ul>
                `,
        set: ["whitening"],
      },
      {
        id: 10,
        img: require("@/assets/Products/09.pore-toner/img.png"),
        ingredients: [],
        name: "Dr.face Pore Minimizer Clarifying  Toner ",
        price: "26800 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #cb6914 50%, #ea8833 40%)",
        info: `
                <ul>
                  <li class="mb-2"> သဘာဝသစ်ဖုများမှ ထုတ်ယူထားသော တိုနာ ဖြစ်ပါသည်။</li>
                  <li class="mb-2"> ဆဲလ်သေများဖယ်ရှားပေးခြင်း</li>
                  <li class="mb-2">အဆီနှင့်အညစ်အကြေးများဖယ်ရှားပေးခြင်း </li>
                  <li class="mb-2">ချွေးပေါက်ကျဉ်းစေခြင်း</li>
                  <li class="mb-2">ဝက်ခြံ ရောင်ရမ်းကျစေသည့်အပြင် အစိုဓာတ် ကိုလည်း ထိန်းညှိပေးနိုင်သောတိုနာ ဖြစ်ပါသည် ။</li>
                </ul>
                `,
        set: ["acne"],
      },
      {
        id: 11,
        img: require("@/assets/Products/10.vitamin-C/img.png"),
        ingredients: [],
        name: "Dr.face Vitamin C serum ",
        price: "28800 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #d9d9d9 50%, #f0ecec 40%)",
        info: `
                <ul>
                  <li class="mb-2">ဝက်ခြံ ၊ အမာရွတ် ၊ ချွေးပေါက်ကျယ်၊ အရေးအကြောင်းများအတွက် အထူးထုတ်လုပ်ထားသည့်လိမ်းဆေးဖြစ်ပါသည်။ </li>
                  <li class="mb-2"> သဘာဝနာနတ်သီး အဆီအနှစ်ဖြင့်ဖော်စပ်ထားပါသည် ။</li>
                </ul>
                `,
        set: ["whitening"],
      },
      {
        id: 12,
        img: require("@/assets/Products/11.aloe-gel/img.png"),
        ingredients: [],
        name: "Dr.face Aloe Vera With Tea Tree Oil",
        price: "11500 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #82b88a 50%, #a9e9b3 40%)",
        info: `
                <ul>
                  <li class="mb-2">ရှားစောင်းလက်ပတ် နှင့် လက်ဖက်စိမ်းပေါင်းစပ်ထားသော ဖော်မြူလာအသစ် ဖြစ်ပါသည်</li>
                  <li class="mb-2">ဦးရေပြားယားယံခြင်း ၊ ဗောက်ထခြင်းကိုသက်သာစေသည် </li>
                  <li class="mb-2">ဦးရေပြား၏ရောင်ရမ်းခြင်းများကျစေပြီး အစိုဓာတ်ဖြည့်ပေးသည်</li>
                  <li class="mb-2">ဝက်ခြံကြောင့် ဖြစ်သော အမာရွတ် များနှင့် အရေပြားခြောက်သွေ့ခြင်းကို သက်သာ စေပါသည် </li>
                  <li class="mb-2">နေလောင်ထားသော အသားအရေကို အေးမြစေသည်</li>
                </ul>
                `,
        set: [],
      },
      {
        id: 13,
        img: require("@/assets/Products/12.pink-egg/img.png"),
        ingredients: [],
        name: "Dr.face Pink Egg",
        price: "4950 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #d6aab6 50%, #e4c4cd 40%)",
        info: `
                <ul>
                  <li class="mb-2">အလှဆုံးမိတ်ကပ်လိမ်းဖို့ နူးညံ့အိစက်တဲ့ Dr.face ရဲ့ ပန်းရောင်ဥ</li>
                  <li class="mb-2">မိတ်ကပ် ပေါင်ဒါ ဖောင်ဒေးရှင်း တွေကိုမြန်မြန်ဆန်ဆန် ညီညီညာညာ လှပစေမယ့် ဥ </li>
                  <li class="mb-2">အကောင်းဆုံးအနူးညံ့ဆုံး အထိအတွေ့နဲ့ နှစ်သက်စရာ ဥ</li>
                  <li class="mb-2">အလာဂျီ (ဓာတ်မတည့်မှု)လုံးဝမရှိသော နည်းပညာ အပြင် <span style="color: #da6972;">UV sterilization </span> ဖြင့် ပိုးသတ်ထားသော အလွန်သန့်ရှင်းသည့် ဥ များဖြစ်ပါသည်</li>
                </ul>
                `,
        set: [],
      },
      {
        id: 14,
        img: require("@/assets/Products/13.eye-serum/img.png"),
        ingredients: [
          "Adenosine",
          "Astaxanthin",
          "Glutathtione",
          "Niacinamide",
          "Panthenol",
        ],
        name: "Dr.face Advanced Repair Eye Serum",
        price: "26200 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #e5bb71 50%, #efcb8b 40%)",
        info: `
                <ul>
                  <li class="mb-2">မျက်ကွင်းညိုခြင်း မျက်ဝန်းတဝိုက် အရေးအကြောင်းများအတွက် <span style="color: #da6972;">2 in 1</span> ဖော်မြူလာ </li>
                  <li class="mb-2"> <span style="color: #da6972;"> Adenosine </span>  နဲ့ <span style="color: #da6972;"> Astaxanthin </span>  ဆိုတဲ့ <span style="color: #da6972;"> botox-like ingredient </span> (botox လိုအသားအရေတင်းရင်းစေ) ပါဝင်လို့ အရေးအကြောင်းဖြစ်လွယ်တဲ့ မျက်လုံးတဝိုက် ကိုတင်းရင်းစေတယ်  </li>
                  <li class="mb-2"><span style="color: #da6972;"> Glutathtione, Niacinamide </span> တွေက မျက်ကွင်းညိုတာတွေကို ပြန်ဖြူစေတယ်</li>
                  <li class="mb-2"><span style="color: #da6972;"> Panthenol (Vitamin B complex) </span> က အသားအရေကိုဖြူဖွေးနူးညံ့စေတယ်</li>
                  <li class="mb-2"><span style="color: #da6972;"> Serum Type (Vitamin B complex) </span> ဖြစ်လို့ ပိုပြီးစိမ့်ဝင်မှု လွယ်တယ်၊ ကုသမှုမြန်တဲ့ဖော်မြူလာ </li>
                </ul>
                `,
        set: ["anti-aging"],
      },
      {
        id: 15,
        img: require("@/assets/Products/14.anti-aging/img.png"),
        ingredients: ["Hyaluronic acid"],
        name: "Dr.face Anti-Aging Serum",
        price: "26900 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #f0b5c9 50%, #fdc7d9 40%)",
        info: `
                <ul>
                  <li class="mb-2">အရွယ်မတိုင်ခင် အိုမင်းရင့်ရော်ခြင်းကို ကာကွယ်ပေးပြီး အရေးမကြောင်းများကို လျော့ပါးတင်းရင်းစေတဲ့ <span style="color: #da6972;">Dr.face Ant- Aging serum</span></li>
                  <li class="mb-2"> <span style="color: #da6972;"> Filler </span>  ထိုးဆေးမှု ပါဝင်တဲ့ <span style="color: #da6972;"> Hyaluronic acid  </span>  ကို <span style="color: #da6972;"> Gel in serum formula </span> ဖြင့် ထည့်သွင်းထားသောကြောင့် တင်းရင်းလာစေပြီး အရေးအကြောင်းတွေကို ပြေပျောက်စေပါတယ် </li>
                  <li class="mb-2">အရေပြားကိုအမြင့်ဆုံးအစိုဓာတ်ဖြည့်ပေးနိုင်ပါတယ် </li>
                  <li class="mb-2">ရှားစောင်းလက်ပတ်ပါဝင်ပါတယ် </li>
                  <li class="mb-2">အသက်ကြီးလာတာနဲ့ အရေပြားကအသစ်ဖြစ်နှုန်းနှေးလာမယ် ၊ခြောက်သွေ့လာမယ် ၊ အတွန့်လေးတွေ ပေါ်လာမယ် ဘာလိမ်းလိမ်းထိရောက်မှု မရှိတော့ဘူးဘာကြောင့်လဲဆိုတော့ အရေပြားရဲ့ဗီတာမင်အေ စုပ်ယူမှု နှေးလာလို့ပါ။ <span style="color: #da6972;"> Dr.face anti-aging serum </span> မှာ <span style="color: #da6972;"> Retinol </span> လို့ခေါ်တဲ့ ဗီတာမင်အေ ဓာတ်ပေါင်းပါဝင်လို့ ဆဲလ်အသစ်အမြန်ဖြစ်ပေါ်စေပြီးအသားအရေတင်းရင်းစေပါတယ်</li>
                </ul>
                `,
        set: ["anti-aging"],
      },
      {
        id: 16,
        img: require("@/assets/Products/15.powder/img.png"),
        ingredients: ["oil"],
        name: "Dr.face Powder Foundation",
        price: "26200 Ks",
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
                `,
        set: [],
      },
      {
        id: 17,
        img: require("@/assets/Products/16.water-gel/img.png"),
        ingredients: [],
        name: "Dr.face Skin Moisturizer Water Gel",
        price: "19900 Ks",
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
                `,
        set: [],
      },
      {
        id: 18,
        img: require("@/assets/Products/17.treatment-toner/img.png"),
        ingredients: [],
        name: "Dr.face Treatment Toning Lotion ",
        price: "26800 Ks",
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
                `,
        set: ["whitening", "anti-aging", "glow"],
      },
      {
        id: 19,
        img: require("@/assets/Products/18.remover/img.png"),
        ingredients: [],
        name: "Dr.face Tea Tree Make Up Remover Cleansing Wipes ",
        price: "7900 Ks",
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
                `,
        set: ["acne"],
      },
      {
        id: 20,
        img: require("@/assets/Products/19.t-zone/img.png"),
        ingredients: [],
        name: "Dr.face Tzone pack ",
        price: "1850 Ks",
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
                `,
        set: [],
      },
      {
        id: 21,
        img: require("@/assets/Products/20.v-mask/img.png"),
        ingredients: [
          "PPC",
          "Collagen",
          "Caffeine",
          "Vitamin-C",
          "Gingko biloba leaf extract",
          "Pumpkin fruit extract",
        ],
        name: "Dr.face V Shape Mask",
        price: "4150 Ks",
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
                `,
        set: [],
      },
      {
        id: 22,
        img: require("@/assets/Products/21.skin-care-mask/img.png"),
        ingredients: [
          "CICA Tea Tree Leaf extract",
          "Panthenol",
          "allantoin",
          "Hyaluronic Acid",
        ],
        name: "Dr.face all in one skin care mask ",
        price: "3100 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #6f8750 50%, #a5c876 40%)",
        info: `
                <ul>
                  <li class="mb-2">ဝက်ခြံကင်းရှင်း မျက်နှာဖြူဝင်းလာစေဖို့</li>
                  <li class="mb-2"> <span style="color: #da6972;"> CICA (Centella asiatica extract) Tea Tree Leaf extract ,Panthenol, allantoin,Hyaluronic Acid </span> တို့ဖြင့် ထုတ်လုပ်ထားသော <span style="color: #da6972;"> Dr.face all in one mask</span> ဖြစ်ပါသည်</li>
                  <li class="mb-2"> ဝက်ခြံ ၊ ချွေးပေါက်ကျယ် ၊ အမဲစက် ၊ အရေးအကြောင်း အားလုံးအတွက် တစ်မျိုးတည်းအသုံးပြုရုံဖြင့် သိသာသောရလဒ်ကို တစ်ကြိမ်တည်းမှာ ချက်ချင်းတွေ့မြင်ခံစားနိုင်ပါသည်</li>
                </ul>
                `,
        set: [],
      },
      {
        id: 23,
        img: require("@/assets/Products/22.spot-gel/img.png"),
        ingredients: [
          "Salicylic Acid",
          "Moisturizer",
          "Centella extract",
          "Niacinamide",
        ],
        name: "Dr.face spot clear gel",
        price: "14400 Ks",
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
                `,
        set: ["acne"],
      },
      {
        id: 24,
        img: require("@/assets/Products/23.cutton/cotton.png"),
        ingredients: [],
        name: "Dr.Face Skin-Friendly Cotton Pads ",
        price: "5900 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #777 50%, #f2f2f2 40%)",
        info: `
              <ul>
                <li class="mb-2">အ​ရေပြား ပြသနာများအတွက် အထူးသီးသန့်​ဖော်မြူလာ ဖွာထွက်ခြင်းမရှိ </li>
                <li class="mb-2"> အလွန်နူးညံ့​သော <span style="color: #da6972;"> Skin-friendly cotton </span> သဘာဝဝါဂွမ်းဖြင့်ပြုလုပ်ထားသည်cotton pad </li>
                <li class="mb-2"> တစ်ထုပ်လျှင် ( ၂၂၂ ) ခု တိတိ ပါဝင်ပါသည် </li>
              </ul>
              `,
        set: [],
      },
      {
        id: 25,
        img: require("@/assets/Products/v_shape_box.png"),
        ingredients: [],
        name: "Dr.Face V Shape Mask Box",
        price: "22500 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #b8447a 50%, #d997b6 40%)",
        info: `
             
              `,
        set: [],
      },
      {
        id: 26,
        img: require("@/assets/Products/all_in_one_mask_box.png"),
        ingredients: [],
        name: "Dr.Face All In One Skin Care Mask Box",
        price: "29300 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #6f8750 50%, #a5c876 40%)",
        info: `
                
                `,
        set: [],
      },
      {
        id: 27,
        img: require("@/assets/Products/t_zone_box.png"),
        ingredients: [],
        name: "Dr.Face T zone Box ",
        price: "9250 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #d29da2 50%, #fbdcde 40%)",
        info: `
                
                `,
        set: [],
      },
      {
        id: 28,
        img: require("@/assets/Products/purple_egg.png"),
        ingredients: [],
        name: "Dr.Face purple egg ",
        price: "4950 Ks",
        bg: "background-image: -webkit-linear-gradient(65deg, #e9cfcf 50%, #dedcf3 40%)",
        info: `
                
                `,
        set: [],
      },
    ],
    product: "",

    skincareSetProducts: [],
    address: [
      {
        city: "ရန်ကုန်",
        location: [
          "Capital Hypermarket",
          "Beauty Diary",
          "Medicare health and beauty stores",
          "Shwe Ohh ဆေးဆိုင်",
          "City Care",
          "Orange",
          "Super One",
          "ဂမုန်းပွင့်",
          "စိန်ဂေဟာ",
          "One Stop Mart",
          "Life Plus",
          "Clover",
          "119 Store ",
          "abc convenience Store",
          "ပြည့်စုံအောင်စတိုး - အမှတ်(၃၉၂)၊ ဝေပုလ္လလမ်းမကြီး၊ ကျောင်းရှေ့မှတ်တိုင်၊ လှိုင်သာယာ။",
          "မြမြစတိုး -အမှတ်(ခ)၊ ၁၂/၁၃၊ နန္ဒာဝန်စျေး၊ ရုံအသစ်၊ တောင်ဥက္ကလာပ။",
          "Apple Store - ဘုရင့်နောင်လမ်းမကြီးပေါ်၊ ဆေးရုံရှေ့၊ ရွှေပြည်သာမြို့နယ်။",
          "Dahila အလှကုန် - အမှတ် ( 34/B1 ) မဟာမြိုင်အိမ်ရာ ၊ စျေးလမ်း ၊ မြောက်ဒဂုံ",
          "Girl Selection Beauty Saloon- အမှတ်(၄၄၄) ၊ မြင်တော်သာလမ်း ၊ ၃/ရပ်ကွက်၊သာကေတမြို့။",
          "အောင်ကိုလတ်စတိုး - အမှတ် (၈၄၅) ရတနာပုံ (၃)လမ်း ၊ ၉ ရပ်ကွက်၊ သာကေတ။",
          "မြတ်သဇင်ဆေးဆိုင် - အမှတ် (၂)၊ အောင်တံခွန်လမ်း၊ ဝါဆိုရပ်ကွက်၊ ဒေါပုံ။",
          "The Face Myanmar - အမှတ်(B5/8)ရတနာလမ်းမကြီးပေါ်၊မလိခအိမ်ရာတိုက်တန်းသစ်၊သင်္ဃန်းကျွန်းမြို့နယ်။",
          "ဒေါ်ကျော့စတိုး - သံသုမာလမ်း ၊ စံပြစျေး ၊ စံပြစျေးရုံဝန်းအတွင်း၊ သင်္ဃန်းကျွန်း။",
          "Angle Accessories - ဘုရားလမ်း၊ သင်္ဃန်းကျွန်းမြို့နယ်။",
          "ထွန်းတောက်ဆေးဆိုင် - အမှတ်(၃၉)၊ အခန်း(၁) ရွေအုန်းပင်အိမ်ရာ၊ ရန်ရှင်းလမ်း ၊ ရန်ကင်း။",
          "Laureal (beauty saloon) ဈဈေးအနီး၊မေဓါဝီလမ်း၊သုဓမ္မာလမ်းမကြီးမြောက်ဥက္ကလာ။",
          "April P Store - တိုက် ၃၉၊ အခန်း၀၀၁ ကျန်စစ်မင်းအိမ်ရာ၊ လှိုင်သာယာ။",
          "ချမ်းမြေ့အိမ်စတိုး - (၃)ထိပ်၊ ဗိုလ်ချုပ်အောင်ဆန်းလမ်း၊ လှိုင်သာယာ။",
          "နန်းအိမ်သူ - တိုက်အမှတ်(၃၂)အခန်း(၀၀၁)၊ကျန်စစ်သားအိမ်ရာ ၊စိန်တခြူလမ်း၊လှိုင်သာယာမြို့",
          "နေခြည်ရွန်းလဲ့စတိုး - လှိုင်သာယာ မီးခွက်စျေးအောက်ထိပ်၊ ဗိုလ်အောင်ကျော်အိမ်ယာ၊ လှိုင်သာယာ။",
          "DaDa Mini Store -၅၁၂/ က ဘိုးရာဇာလမ်း ၊ တံတားဖြူမှတ်တိုင် (၇) ရပ်ကွက်၊ အုပ်ချုပ်ရေးမှူးရုံးအနီး ၊ လှိုင်သာယာမြို့နယ်။",
          "Lucky Shine (beauty saloon) A-16, အာကာဆိုင်ခန်း ၊ ဗိုလ်ချုပ်နေဝင်းလမ်း၊ ဖိုးမြေမှတ်တိုင်အနီး၊KBZ bankမျက်စောင်းထိုး သန်လျင်မြို့နယ်။",
          "Smile cosmetics ( ယုဇနပလာဇာ )",
          "Easy shop ( ယုဇနပလာဇာ )",
          "ကျောက်မြောင်း (စတိုး) ကျောက်မြောင်းလမ်း ၊ကျောက်မြောင်း/တာမွေ။",
          "Beauty Shop (ယုဇနပလာဇာ)",
          "ယွန်းလဲ့ (စတိုး) - မြောက်ဒဂုံ၊ပင်လုံလမ်းမကြီး။",
          "Myat Cosmetics - မြောက်ဒဂုံ၊ ဗထူးလမ်းမပေါ် ဗထူးစျေးအနီး၊ ၄၇ရပ်ကွက်။",
          "Cover Myanmar - အမှတ် (၃/ကခ) ပင်လုံလမ်းမကြီး ၊ ၂၉ ရပ်ကွက်၊ မြောက်ဒဂုံ။",
          "ရွှေစတိုး - ရုံ(စ)၄၃၊သုဝဏ္ဏဈေး၊သင်္ကန်းကျွန်းမြို့နယ်။",
          "ပွိုင့် (အလှကုန်) - အမှတ်(၆၀၈) ၊ (၆၀၉)၊ (၅၇၈) တတိယထပ် ၊ ရွှေမင်္ဂလာဈေး။",
          "SunShine – C33/34 ဒုတိယထပ် ၊ အမှတ်(၂၁) ၊ ရွေပြည့်စုံစျေး အရှေ့၊ ၁၃၈လမ်း၊။",
          "Paing Soe အလှကုန် - အမှတ် 172/174 ဗညားဒလလမ်း၊ မင်္ဂလာတောင်ညွန့်မြို့နယ်။",
          "Best 149 – No.149 ဗိုလ်ချုပ်ဈေး၊ ပန်းပဲတန်းမြို့နယ်။",
          "MayNanda Store - ဆုံဆီလမ်း၊မြေညီထပ်၊စမ်းချောင်း",
          "ကလျာ cosmetics - ဈဈေး၊ မြောက်ဥက္ကလာပမြို့နယ်။",
          "အလှကမ္ဘာ အလှကုန်အမျိုးမျိုး အရောင်းဆိုင် - အမှတ်55 ၊ ပြည်လမ်း ၊ ထောက်ကြံ လမ်းဆုံ၊မင်္ဂလာဒုံမြို့နယ်။",
          "အောင်မြင့်မြတ်စတိုး - အမှတ်(၆၃)၊ (၁) လမ်း၊ ၃ရပ်ကွက်၊ ခရမ်းမြို့။",
          "မစန္ဒာစတိုး - ရွှေမင်္ဂလာဈေး ။",
          "BeautyLand - မေဒါဝီဈေး၊ မြောက်ဥက္ကလာပမြို့နယ်။",
          "မအိအိဝင်း - ရွေမင်္ဂလာဈေး ၊ ဒုတိယထပ် ၊ တာမွေမြို့နယ်။",
          "သမာဓိ(၂) - ဖော့ကန်၊ Citymart ရှေ့",
          "Victoria Excel (ရွှေဂုံတိုင်)",
          "မြန်မာဘစ်ရှော့ -အမှတ်(၃၄)၊ ရေတာရှည်လမ်းသစ် ၊ ဗဟန်းမြို့နယ်။",
          "IceLand Supermarket-အမှတ်(၁၂၃-၁၂၄)၊ပြည်လမ်း၊၁၀မိုင်ကုန်း၊အင်းစိန်မြို့နယ်။",
          "Girl Generation Korea Cosmetics -စံရိပ်ငြိမ် ဂမုန်းပွင့် ၃လွာ၊လှိုင်မြို့နယ်။",
          "Yuzana Convenience Store( grand hantha) – No.3, နနတ်တောလမ်း၊ ကြည့်မြင်တိုင်လမ်းမ၊ကမာရွတ်မြို့နယ်။",
          "တံခွန်မားကပ်- -အမှတ်(965) တ(၁၅)ရပ်ကွက်၊ မဟာဗန္စုလလမ်းမကြီး၊ ရွှေပြည်သာမြို့နယ်။",
          "အောင်( မီနီမတ်) မြောက်ဥက္ကလာပ၊ ချချေးရှေ့",
          "Laural Beauty scloon မြောက်ဥက္ကလာ၊ ချချေးရှေ့",
          "ရွှေပိုးအိမ် အလှကုန် - အမှတ်24 ၊ ၁၁လမ်း ၊ ယုဇနပလာဇာ ဥယျာဉ်မြို့တော်။",
          "ပွင့်လွှာစတိုး - မြို့မဈေး၊ သံလျင်မြို့နယ်။",
          "လှမိသားစုစတိုး - ရွှေပြည်သာ၊ ထန်းခြောက်ပင်မြို့နယ်။",
          "May Online Shop - သန်လျင်၊ ဆောက်လုပ်ရေးဝန်း၊ အမှုထမ်းရပ်ကွက် (သန်လျင်နာရီစင်နား)",
          "ဒေါ်၀ိုင်းစိန် စတိုး - ဗိုလ်တထောင်ဘုရားရှေ့။",
          "လဝန်းဖြူဆေးဆိုင် - SSC ဆေးရုံအနီး၊ ဗိုလ်စိန်မှန်လမ်း ထိပ်တည့်တည့် ၊ အရှေ့ ရွှေဂုံတိုင်လမ်း။",
          "ချမ်းသာသုခ Pharmacy & Beauty - အမှတ်( ၁၃၀၁) မြင်သော်တာလမ်း၊ (၁) ရပ်ကွက်။",
          "Bazaar Yangon Hyper Market - အမှတ်(၅၈) ၊ အထက်ပန်းဆိုးတန်းလမ်း နှင့် မြန်မာ့ဂုဏ်ရည်လမ်းထောင့်၊ မင်္ဂလာတောင်ညွန့်။",
          "A 81 Cosmetics & Fancy Store - အမှတ်(၅၁၄) ၊ ပုဂံလမ်း၊ ၁၂ရပ်ကွက်၊ ရွေပေါက်ကံ။",
          "K Authentic Cosmetics (1) – 35 ရပ်ကွက် ၊ ဆက်သွယ်ရေးမှတ်တိုင် ၊ မြောက်ဒဂုံ၊ ပင်လုံလမ်းမပေါ်။",
          "K Authentic Cosmetics (2) -၂ ရပ်ကွက် ၊ မြောက်ဥက္ကလာပ ၊ သုဇိဘာလမ်းမ၊ ကျောင်းလမ်းမှတ်တိုင် နှင့် (၂) စျေးကြား။",
          "Aung Ko Ko Win Store - တိုက်အမှတ် (၂၀) ၊ နှင်းဆီလမ်း ၊ တာမွေ၊ အောင်မင်္ဂလာ။",
          "Lady Princess Collection - အမှတ် (၂၈၄) ၊ ဘုံမာ (၉)လမ်းထိပ် ၊ ကန်သာယာမှတ်တိုင် ၊ မြောက်ဥက္ကလာပ။",
          "Phoo Cosmetics - အမှတ် (၁၀၈) ၊ ၃၇လမ်း နှင့် ၃၈ လမ်းကြား ၊ အနော်ရထာလမ်း ၊ ကျောက်တံတား။",
        ],
      },
      {
        city: "မန္တလေး",
        location: [
          "Beauty Diary",
          "Medicare",
          "Life Pluse",
          "Shwe Ohh",
          "City Care",
          "စံပယ်ဖြူ -၃၂လမ်း ၊ ၇၄×၇၅လမ်းကြား ၊မန္တလေးမြို့။",
          "Pinky Cosmetic-၈၄လမ်း၊ ၃၂ နှင့် ၃၃လမ်းကြား ၊မန္တလေး။",
          "မြောက်ပိုင်းကြယ် -၆၅လမ်း နှင့် မနော်ဟရီလမ်းကြား၊မန္တလေးမြို့ ။",
          "Dinky Diana -၆၈ လမ်းနှင့်စိန်ပန်းလမ်းထောင့်မြို့သစ် မန္တလေး။",
          "Megashine -လမ်း ၃၀၊၆၆×၆၇ ကြား၊မန္တလေးမြို.။",
          "JuJu Cosmetics - ၂၇လမ်း၊ ၆၈×၆၉ ကြား ၊ မန္တလေးမြို့။",
          "Princess99 အလှကုန် - 65/66လမ်းကြား၊ မနော်ဟာရီလမ်း ၊ မန္တလေးမြို့။",
          "Full House Convenience Store - စစ်ကိုင်းမန်းလေးလမ်း ၊ သိမ်ကြီးစျေးမြောက်ဘက်၊ အမရပူရ။",
          "Zin Mar Pyone Store - ၇၈လမ်း ၊ ခိုင်ရွေဝါလမ်း၊ မန္တလေး။",
          "ဦးဘိုအေးစတိုး - အမှတ်(၅၅) ၊ (၈၃) လမ်း၊ (၂၀x၂၁) လမ်းကြား၊ မန္တလေးမြို့။",
          "Mei’s Diary Cosmetics Store – 66လမ်း 108*109 ကြား ၊ မန္တလေး။",
          "Swiss Beauty & Health – 66 လမ်း နှင့် ၁၀၉ ကြား ၊ မန္တလေး။",
          "Khin Zar Lwin Cosmetics - မန်းလေးအမရပူရ ၊ စစ်ကိုင်း-မန်းလေး လမ်းမပေါ် g&g ဆိုင်နား။",
          "စိန်သဇင် - 62*64/110လမ်း ၊ မန္တလေးမြို့။",
        ],
      },
      {
        city: "ကျောက်တော်",
        location: [
          "ပုလဲဖြူစတိုး -အမှတ်(၂၁၀) ဥက္ကာပြန်လမ်း၊မြို့သစ်ရပ်ကွက်၊ကျောက်တော်မြို့။",
        ],
      },
      {
        city: "ကွမ်းခြံကုန်း",
        location: [
          "Mi Mi Lay Online Shop - အမှတ် (၁၉) ၊ မြို့မပိုင်းလမ်းထိပ် မီးပွိုင့်နား၊ ကွမ်းခြံကုန်း။",
        ],
      },
      {
        city: "ကျောက်တံခါး",
        locations: ["ShweBone Store -ကျောက်တံခါးမြို့နယ်၊ ပဲခူးတိုင်း။"],
      },
      {
        city: "ကန့်ပလူ",
        location: [
          "မိုးကောင်းကင်စတိုး - ရန်ကြီးအောင်ရပ်ကွက်၊ မြို့ဝင်ဆီဆိုင်တန်း၊ဆီးကုန်းမြို့နယ်။",
        ],
      },
      {
        city: "ကျိုက်ထို",
        location: [
          "အောင်ချိုဇင်စတိုး - ပြည်သူ.ဈေးရှေ.၊ရန်ကုန်ကျိုက်ထိုလမ်းမ၊ကျိုက်ထိုမြို.။",
          "Kaung Mon Store Cosmetics & skin care - ဆေးရုံလမ်း ၊ သီရိစံ အိမ်ဆောက်ပစ္စည်းဆိုင်အနီး ၊ ကျိုက်ထိုမြို့",
        ],
      },
      {
        city: "ကျိုက်လတ်",
        location: [
          "JJKK Skincare & Cosmetics - ၇၊၈ ဦးစန္မလမ်း၊ ကျိုက်လတ်မြို့။",
        ],
      },
      {
        city: "ကျိုက်မရော",
        location: ["အေးအေးမွန်စတိုး - ကျိုက်မရောမြို့နယ်၊ ကော့ပလိုင်ကျေးရွာ။"],
      },
      {
        city: "ကျိုင်းတုံ",
        location: ["ချစ်သဲဦး စတိုး - ကျိုင်းတုံ ၊ မိုင်းယောင်းမြို့"],
      },
      {
        city: "ကလေး",
        location: [
          "Girl Beauty House SkinCare - အမှတ်(4/6) လမ်းဆုံ၊ အနီး၊ဗိုလ်ချုပ်လမ်း ။",
        ],
      },
      {
        city: "ကလေးမြို့",
        location: [
          "Beauty Cottage Skin Care & Cosmetic - ပင်လုံ(23/5) ဗိုလ်ချုပ်လမ်း၊ ကလေးမြို့။",
          "အိန်ဂျယ်လ်စတိုး - ဗိုလ်ချုပ်လမ်း၊ တာဟန်းရပ်ကွက်၊ ကလေးမြို့။",
        ],
      },
      {
        city: "ကော့သောင့်",
        location: [
          "စုစံ Cosmetics - အမှတ်(၄၆၀) မဉ္ဖူသက္ကလမ်း၊ကော့သောင်းမြို့နယ်။",
          "Cosmetics Crazy -C(29),A1 Service ဘေး၊ဗိုလ်ချုပ်လမ်း၊ကော့သောင်းမြို့။",
        ],
      },
      {
        city: "ကျောက်ဆည်",
        location: [
          "Cosmetics Studio -အမှတ်46၊ ကျောင်းမြောက်ဘက်ကပ်ရပ်၊မြို့ပတ်လမ်း၊ကျောက်ဆည်မြို့။",
        ],
      },
      {
        city: "ကျွန်းလှ",
        location: ["ငွေနန်းစံ စတိုး-စစ်ကိုင်းတိုင်း၊အထက်ပိုင်း၊ကျွန်းလှမြို့။"],
      },
      {
        city: "ကျောက်ပတောင်း",
        location: [
          "ရွှေမန်းသူစတိုး -ဘူတာမီးပွိုင့်အနီး၊အောင်မင်္ဂလာရပ်ကွက်၊ကျောက်ပတောင်းမြို့။",
          "လင်းလက်စတိုး - ကျောက်ပန်းတောင်း။",
        ],
      },
      {
        city: "ကျောက်မဲ",
        location: [
          "လင်းလက်စတိုး - ရှမ်းပြည်နယ် မြောက်ပိုင်း၊ ကျောက်မဲမြို့နယ်။",
          "ယမင်းအလှကုန် - ကျောက်မဲမြို့နယ် ။",
          "မိုင်းတင်းဆေးဆိုင် - စျေးအနောက်မြောက်ထောင့် ၊ ပြည်ဇသီလမ်း ၊ ၅ရပ်ကွက် ၊ ကျောက်မဲမြို့",
        ],
      },
      {
        city: "ကန်ပတ်လက်",
        location: [
          "ခိုင်သဉာမြင့်စတိုး - မြို့မ(၁)ရပ်ကွက်၊ကန်ပက်လက်မြို့၊ချင်းပြည်နယ်။",
          "Mari Store - ကန်ပက်လက်မြို့။",
        ],
      },
      {
        city: "ကျောက်ဖြူ",
        location: [
          "ဦးအောင်သိမ်းစတိုး - ကျောက်ဖြူမြို့။",
          "ရိုးလှသန္တာအလှပြုပြင်ရေး - ဗိုလ်ချုပ်လမ်း ၊ ကျောက်ဖြူမြို့။",
        ],
      },
      {
        city: "ချောက်",
        location: ["Ocean Light Mini Mart -လမ်းမတော်၊ချောက်မြို့။"],
      },
      {
        city: "ဂွ",
        location: [
          "Yoon 97 Lady Fashion - အမှတ်(၁၄) ၊ ပဒုံမာလမ်း ၊ အလယ်ရွာ၊ ဂွမြို့။",
          "Yadanar Fashion shop ( treasure ) - ဗိုလ်ချုပ်လမ်းမကြီး ၊ ဂွမြို့ ၊ ရခိုင်ပြည်နယ်",
        ],
      },
      {
        city: "စစ်တွေ",
        location: [
          "999 Pharmacy -အမှတ် (၉၀)၊ ရွှေသာလမ်း၊ မိဇံရပ်ကွက်၊စစ်တွေမြို့။",
          "Kyaw Nyein Store - စစ်တွေ။",
        ],
      },
      {
        city: "စစ်ကိုင်း",
        location: [
          "ဝင်း အလှကုန် နှင်. ဖန်စီ စတိုး - ၂၅လမ်းနှင်.၁၃လမ်းထောင်.၊ရွှေမင်းဝန်ရပ်ကွက်၊စစ်ကိုင်းမြို.။",
          "Smile Entertainment - ခရိုင်ချင်းဆက် ၊ စရေးလမ်း ၊ စစ်ကိုင်းမြို့။",
        ],
      },
      {
        city: "ဆိုင်းတောင်",
        location: [
          "အောင်သုခအလှကုန်-အမှတ်(၂/၁၅၅) ၊ ဆိပ်ငိုဆိုင်းတောင်မြို့၊ ရွာလယ်လမ်းမကြီး။",
        ],
      },
      {
        city: "ညောင်ဦး",
        location: ["မသီတာ စတိုး - ညောင်ဦး ။(09-897557711)"],
      },
      {
        city: "တောင်ကြီး",
        location: [
          "Beauty diary (Showroom-10) City Square Center ဒု-ထပ် ဗိုလ်ချုပ်အောင်ဆန်းလမ်း ၊ မြို့မဈေးရှေ့၊တောင်ကြီး။",
          "City Care – City Square Shopping Center, Taunggyi။",
          "Medicare 69 - အမှတ်(၅၀) ၊ ပင်လုံလမ်း ၊ ခနောက်ရပ်၊ တောင်ကြီး ။",
          "Clover -No (103-A), Bogyoke St & Yay Htwt Oo St,In Front of Kan Shae Quarter, Taunggyi",
          "Ma Thet အမှတ် (C-15),City square shopping Centre 1st Floor ,တောင်ကြီး Ocean",
          "ရွှေရင်သိမ်းသစ် စတိုး -ဗိုလ်ချုပ်အောင်ဆန်းလမ်း၊ မြင်းစီးရုပ်အနီး မင်္ဂလာဦးရပ်၊ တောင်ကြီးမြို့။",
          "Fashion Store - အမှတ်(၇၈) ဗိုလ်ချုပ်လမ်း၊ လမ်းမတော်ရပ်ကွက်၊ မြန်မာ့စီးပွားရေးဘဏ်ရှေ့၊ တောင်ကြီး။",
          "Black N White Cosmetics Shop - အမှတ်(၂၄) ဗိုလ်ချုပ်လမ်း၊ ခြင်္သေ့လမ်းထောင့် ၊ ညောင်ရွေဟော်ကုန်းရပ်ကွက်၊ မင်းကျောင်းရှေ့တည့်တည့်၊ တောင်ကြီး။",
          "61 Mart – No.(98) Main Road Nyaung Phyu Sakham ward, Taunggyi.",
          "ရွှေမှုံ cosmetics -မြေဖြူရပ်ကွက်၊ တေဇလမ်း ၊ ည/၆၃၄ ၊ တောင်ကြီး။",
          "Eastern Store - တောင်ကြီး",
        ],
      },
      {
        city: "တိုက်ကြီး",
        location: [
          "wow cosmetics – KBZ Bank ရှေ့၊ Venus mobile ပထမထပ်၊ ပြည်လမ်း၊ တိုက်ကြီးမြို့။",
        ],
      },
      {
        city: "တွံတွေး",
        location: [
          "Q&Q Mini Mart - အမှတ်(၅/၁၁) - ကန်ဘဲ့လမ်းဆုံအနီး၊ တွံတေးမြို့နယ်",
          "Htoo Mini Mart - ကျုံးကြီးကျောင်းလမ်း၊ တွံတေးမြို့။",
        ],
      },
      {
        city: "တောင်ငူ",
        location: [
          "နှင်းဆီနီစတိုး- ၇/ ၁၃၈ ၊ဗိုလ်မှူးဖိုးကွန်လမ်း ၊တောင်ငူမြို့။",
          "စိန်တိုက် စတိုး - ၁၆/၁၄၉ ကုန်သည်ကြီးလမ်းနှင်.ဈေးလမ်းထောင်.၊၁၆ ရပ်ကွက်၊တောင်ငူမြို.။",
        ],
      },
      {
        city: "တောင်တွင်းကြီး",
        location: [
          "သမာအာဇီ၀ဦးရာကျူစတိုး - နတ်မောက်လမ်း၊တောင်တွင်းကြီး။",
          "ပန်ထွာစင်တာ - အမှတ်(74)၊မကွေးလမ်း၊ အုန်းတောရပ်ကွက်၊ တောင်တွင်းကြီးမြို့။",
        ],
      },
      {
        city: "တောင်ကုတ်",
        location: [
          "BeautyHouse အမှတ်(336) တိုးပွားရေးလမ်း၊ ရခိုင်ပြည်နယ်၊တောင်ကုတ်မြို့။",
          "LadyStore -ဦးအောင်ဇေယျလမ်း၊ ဆေးရုံဟောင်းအနီး၊တောင်ကုတ်မြို့။",
          "ဟာမိုနီအလှကုန် - အမှတ် ၄၀၂ ၊ နံ့သာမြိုင်လမ်း ၊ ဂူတာရပ်ကွက် ၊ တောင်ကုတ်မြို့",
          "Ma Sandar Store - အမှတ် (၄၃၁) ၊ နိုးကြားရေးလမ်း ကံပိုင်ရပ်ကွက်၊ တောင်ကုတ်မြို့။",
          "Perfect Beauty Store - တောင်ကုတ်။",
        ],
      },
      {
        city: "တာချီလိတ်",
        location: ["ဇိကုန် ဆေးဆိုင် - ဝမ်ကောင်းရပ်ကွက်၊ ကချင်ရွာ၊ တာချီလိတ်။"],
      },
      {
        city: "တမူးမြို့",
        location: [
          "စိမ်းလဲ့အလှပြင်နှင့် အလှကုန် ရောင်းဝယ်ရေး - ဈေးအရှေ့ဘက် ဈေးတန်း၊ တမူးမြို့။",
          "Beauty House အလှပြင်ဆိုင် - ဗိုလ်ချုပ်လမ်း ၊တမူးမြို့။",
        ],
      },
      {
        city: "တနှိုင်း",
        location: ["ဂမုန်းပွင့်စတိုး - တနိုင်းမြို့၊ ကချင်ပြည်နယ်။"],
      },
      {
        city: "ထားဝယ်",
        location: [
          "Saloon One Skin Care - အမှတ်၅၅၅ (က) ရေးလမ်း ၊ ပုံကျွန်းရပ်၊ ရှင်ဥသြဘုရား၊ မြို့မဂနှင့် ဂေါပင်ကျောင်းအနီး ထားဝယ်မြို့။",
          "အလှသစ် စင်တာ - ၄၁မြို့တွင်းရပ်၊ ရေးလမ်း၊ ထားဝယ်မြိူ့။",
          "Beauty Queen - အမှတ် ၂၉၉ ၊ ပိတောက်ရွှေဝါလမ်း၊ ခုံဝင်းဒပ်ရပ်၊ ထားဝယ်မြို့။",
          "ရွှေထားဝယ်သူစတိုး - အမှတ် (၄၃၉)၊ ဘုံပေါ်၆လမ်း၊ ထားဝယ်မြို့။",
          "Heez lady Collections - ဆိုင် (၂) ထားဝယ်၊ မြို့သစ် (၁၀)လမ်း၊ မြတ်သိန်းငှေး သွပ်ပြားစက်ရုံအနီး။",
          "Heez lady Collections -ဆိုင်(၁) လောင်းလုံမြို့(က) ရပ်ကွက်၊ သီရိမင်္ဂလာလမ်း၊ လောင်းလုံမြို့နယ်၊ ပြည်သူ့ဆေးရုံရှေ့။",
        ],
      },

      {
        city: "တန့်ယန်း",
        location: ["Afu Fashion Shop - တန့်ယန်း။"],
      },
      {
        city: "ဒိုက်ဦး",
        location: [
          "သီရိစတိုး - ဒိုက်ဦး",
          "ရွေရူပါ Skin Care & Cosmetics - အမှတ်(၅၄) ၊ မင်းလမ်း ၊ ဒိုက်ဦးမြို့။",
        ],
      },
      {
        city: "ဓနုဖြူ",
        location: [
          "May Beauty Saloon - တရုတ်ကျောင်းလမ်း၊ ဦးရှင်ကြီးကွေ့၊ ဓနူဖြူ။",
          "May Lay Beauty Saloon - အမှတ် (၃) ၊ (၆)ရပ်ကွက်၊ မောရသိမ်ဂီလမ်း၊ဓနုဖြူမြို့။",
        ],
      },
      {
        city: "နတ်တလင်း",
        location: [
          "ပြည့်လျှံ Mart - နတ်တလင်းမြို့။",
          "ဆည်းဆာရတီစတိုး - နတ်တလင်းမြို့။",
        ],
      },
      {
        city: "နေပြည်တော်",
        location: [
          "Super One နေပြည်တော် Junction",
          "Super One နေပြည်တော် Sin Mart",
          "Capital Hypermarket - နေပြည်တော်",
          "Sein Daung Store - သပြေကုန်းအဝိုင်းအနီး၊ ပျဉ်းမနားတောင်ညိုလမ်းမပေါ်၊နေပြည်တော်။",
          "City Care – Junction Center NPT, Front of Hotel Zone, Yarzar Thingaba, Dekkhinathiri , NayPyiTaw",
          "City Care – Commerical Complex, Zayya Htani & Mandalay Corner st, OTARATHIRI, NayPyiTaw",
        ],
      },
      {
        city: "နောင်ချို",
        location: [
          "May Phway Cosmetics - ရှမ်းပြည်နယ်မြောက်ပိုင်း၊ နောင်ချိုမြို့၊ CB Bank မျက်နှာချင်းဆိုင် သရီးစတားကွမ်းယာဆိုင် အနီး။",
          "Lwin May Hnin Store - ရတနာသိင်္ဂီစားသောက်ဆိုင်၊ မန္တလေး - လားရှိုူး လမ်းဘေးစျေးရပ်ကွက်၊ နောင်ချို။",
        ],
      },
      {
        city: "နမ့်ခမ်း",
        location: [
          "ဒေါ်မြရင် ကုန်စုံဆိုင် - ရှမ်းပြည်နယ် မြောက်ပိုင်း၊ လမ်းမတော်၊ နမ့်ခမ်းမြို့။",
        ],
      },
      {
        city: "ပဲခူး",
        location: [
          "ကောင်းသစ်လွင်(အလှကုန်)- အမှတ်(၂၈) ၊ဟသာၤကုန်းဘုရားလမ်း၊ ဗိုလ်ကုန်းရပ်ကွက်၊ ပဲခူးမြို့။",
          "Beauty Zone Skin Care& cosmetics - အမှတ် ၄၈ ၊ ရှင်စောပုလမ်း ၊ မြို့တွင်းကြီးရပ်ကွက် ၊ ပဲခူး",
          "Pink Angela - အမှတ် (၃၈၇) ၊ ကမ်းနားလမ်း၊ ဇိုင်းဂနိုင်း တောင်ပိုင်း ၊ ပဲခူး။",
          "Cosmetics Paradise - ပဲခူးမြို့၊ ပင်စည်ထိပ်။",
        ],
      },
      {
        city: "ပြည်",
        location: [
          "ပါရမီရှင်စတိုး - ဗိုလ်ချုပ်လမ်း၊ ရွှေစံတော်ဘုရားအနီး။",
          "AEC Cosmetics - စစ်ကဲလမ်းနှင့် ဈေးလမ်းထောင့် ၊ပြည်မြို့။",
          "မအိအိခိုင် -ပြည်",
        ],
      },
      {
        city: "ပြင်ဦးလွင်",
        location: [
          "Bee cosmetic – Ruby Mart ပထမထပ်၊Marry Brown ကြက်ကြော်ဆိုင်ရှေ.၊ပြင်ဦးလွင်မြို.။",
          "ဟိန်းဟိန်းစတိုး - အမှတ် (၁၅၂)၊ ရပ်ကွက်ကြီး (၄) ၊ မန်းလေး လားရှိုး လမ်းမကြီး ၊ ပြင်ဦးလွင်။",
        ],
      },
      {
        city: "ပုသိမ်",
        location: [
          "ယွန်းဝတီ (စတိုး )-၅၆၈ စကားဝါလမ်း ၊ယွန်းဝတီစတိုး ၊ ပုသိမ်။",
          "Beloved cosmetic & mart -မရမ်းချိုလမ်း၊ပုသိမ် မြို.။",
          "အလှကမ္ဘာစတိုး - အပေါ်ထပ်၊ အမှတ်(၁၀)၊ ဈေးချောင်းလမ်း၊ ပုသိမ်မြို့။",
          "ပန်းတော်ဝင်စတိုး - အမှတ် (၁၇) ၊ ဥမ္မာဒ်တီလမ်း၊ ပုသိမ်မြို့။",
          "Sweet Heart Cosmetics - အမှတ် (၁၃)၊ စျေးချောင်းလမ်း၊ ရွေပြည်သာစျေးရှေ့၊ ပုသိမ်မြို့။",
          "ထူးပြည့် အလှကုန် နှင့် လူသုံးကုန် - အမှတ် (၅၆၆)၊ တောရကျောင်းလမ်း ၊ ပုသိမ်။",
          "ကြယ်လင်းလက် (စတိုး) - အမှတ် (၁၇၈) မင်္ဂလာလမ်း ပုသိမ်မြို့ ",
        ],
      },
      {
        city: "ပခုက္ကူ",
        location: [
          "သဇင်မြင့် cosmetic storeအမှတ် ၇ ၊ မြို့မလမ်း ၊ ပခုက္ကူမြို့",
          "တော်ဝင်နန်းစတိုး - အ.ထ.က(၂)ကျောင်းမျက်နှာချင်းဆိုင်၊ ပခုက္ကူမြို့နယ်။",
        ],
      },
      {
        city: "ပျဥ်းပနား",
        location: [
          "Sein Daung Store – 3/102 မောင်ခင်လမ်း၊ ပျဉ်းမနား။",
          "ရွှေမင်းသမီး (အမှတ်(၁၁၊ ၃၁) ၊ဗိုလ်တောက်ထိန်လမ်း ၊ပျဉ်းမနားမြို့။",
          "Top Star - ပျဉ်းမနား၊ ဗိုလ်ချုပ်လမ်းပေါ်၊ Giordana မျက်နှာချင်းဆိုင်။",
          "Pearl Store - ပျဉ်းမနား။",
        ],
      },
      {
        city: "ပျော်ဘွယ်",
        location: ["လှိုင်စတိုး - ကျောက်ချပ်ရွာ၊ ပျော်ဘွယ်မြို့။"],
      },
      {
        city: "ပင်လောင်း",
        location: [
          "May SkinCare & Clothes - ပင်လောင်းမြို့။",
          "Ma Cherry Store - ပင်လုံစားသောက်ဆိုင် အပေါ်ဘက် ၊ ရုံးဝင်းရပ်ကွက် ၊ ပင်လောင်းမြို့",
        ],
      },
      {
        city: "ပန်းတနော်",
        location: ["ဇင်သူ cosmeitcs -ပန်းတနော်"],
      },
      {
        city: "ဖျာပုံ",
        location: [
          "ရွှေစံအိမ်စတိုး - 68လမ်း၊ ပထမလမ်း၄ရပ်ကွက်၊ ဖျာပုံမြို့။",
          "ပတ္တမြားစတိုး - ဆိုင်၄၈၉ ပထမလမ်း၊ သီရီရတနာ လေဟာပြင်ဈေး ၊ အောက်ထပ် ၊ဖျာပုံမြို့။",
          "ပတ္တမြားစတိုး - အိမ်အမှတ်၇၀၊ ဒုတိယလမ်း ၊ ဖျာပုံမြို့။",
        ],
      },
      {
        city: "ဖားကန့်",
        location: ["စံပယ်ဖြူစတိုး - ဖားကန့် ။"],
      },
      {
        city: "ဗန်းမော်",
        location: [
          "Eversmile(Cosmeticstore ) - မက/၁၃ မင်းကုန်းရပ်၊ ဗန်းမော်မြို့။",
          "ကေကေစတိုး - ဘောလုံးကွင်း တိုက်တန်း ၊ မြသီတာဧည့်ရိပ်သာ ရှေ့ တည့်တည့် ၊ ဗန်းမော်။",
        ],
      },
      {
        city: "ဘိုကလေး",
        location: [
          "BeautyHome - ဘိုကလေး။",
          "Shwe La Yang Cosmetics - အမှတ်(၂၄)၊ ဈစျေးရုံ၊ မြို့မစျေးကြီး၊ ဘိုကလေး။",
        ],
      },
      {
        city: "ဘားအံ",
        location: [
          "Sun Flower - အမှတ် ၃/၄၈၃၊မဲဘောင်ကျောင်းလမ်း၊ဘားအံမြို.။",
          "ဆည်းဆာစတိုး- အမှတ်(၃) ရပ်ကွက် ၊ ကူးဆိပ်လမ်း၊ ဓမ္မပီယ ဘုန်းကြီး ကျောင်းကုန်းတက်၊ ဘားအံမြို့။",
          "Beauty World Fashion Accessories -အမှတ်(၄)ရပ်ကွက်၊ တိုးချဲ့ကမ်းနားလမ်း၊ဘားအံမြို့။",
          "Cinderella Store - ဘားအံမြို့။",
          "ယွန့်ဝေါ်ဝေါ် ဆေး နှင့် စတိုး ဆိုင် - ဘားအံ-ရန်ကုန်လမ်းမကြီး ၊ ဘားအံ။",
        ],
      },
      {
        city: "မြန်အောင်",
        location: [
          "ဦးတင်မြင့်စတိုး အလှကုန်နှင့် လူသုံးကုန် လက်လီလက်ကားဆိုင် - ဘုရားလမ်းထောင့်၊ နာရီစင်အနီး၊ မြန်အောင်မြို့။",
        ],
      },
      {
        city: "မြင်းခြံ",
        location: [
          "လဝန်းအိမ်စတိုး - အမှတ်(10/234) အောင်မင်္ဂလာလမ်း၊ မြင်းခြံမြို့။",
        ],
      },
      {
        city: "မှော်ဘီ",
        location: [
          "Ngu War oo Store - ရန်ကုန် ပြည်လမ်းမပေါ် ၊ KBZ Bank ရှေ့၊ မှော်ဘီစျေးအနီး၊ မှော်ဘီ။",
        ],
      },
      {
        city: "မြောင်းမြ",
        location: [
          "ချယ်ရီသန့် စတိုး - အမှတ် ၅ ၊ ၄လမ်း ၊ မြောင်းမြမြို့",
          "SweetHeart Cosmetix Gallery - အမှတ်(၅၅) ၊၁၂လမ်း၊ (၆)ရပ်ကွက်၊ မြောင်းမြမြို့။",
        ],
      },
      {
        city: "မိုးကုတ်",
        location: [
          "Kyi Phyu Cosmetics -အနောက်ပိုင်း CB Bank နှင့် ကပ်လျက် မိုးကုတ်မြို့။",
          "ချစ်စုစတိုး -အောင်ချမ်းသာရပ်၊ မိုးကုတ်မြို့။",
        ],
      },
      {
        city: "မအူပင်",
        location: ["တပင်ရွှေထီးအလှကုန် အမှတ် ၃၇ ၊ ဘုရားလမ်း ၊ မအူပင်မြို့ ။"],
      },
      {
        city: "မော်လမြိုင်",
        location: [
          "Beauty Diary -အမှတ်(၁၀၄)၊ ဘိုကုန်းရပ်၊ တနသာၤရီလမ်းထိပ်၊ အထက်လမ်းမကြီး၊ မော်လမြိုင်မြို့။",
          "Clover Cosmetic -အမှတ် ၁၃၂၊ဗဟိုလမ်းနှင့် ဦးဇိနတ်ဘုရားလမ်းထောင့် ၊ ပန်းပဲတန်းမြို့နယ် ၊မော်လမြိုင်။",
          "City Care -Between Thein Gbone Roaf and Taninthayi Road, Bokone Ward, Mawlamyaing",
          "တက်ကောင်း(စတိုး)-အမှတ်၄၆၊တောင်ဝိုင်းလမ်း၊ဈေးချိုရပ်။",
          "မြင့်မိုရ်ခိုင် (စတိုး)- အမှတ်(၃၉/ A)၊တောင်ဝိုင်းလမ်း၊ဈေးချိုရပ်။",
          "တရုတ်မ စတိုး ,အမှတ် 2694 ၊ ရှင်စောပုလမ်း ၊ မော်လမြိုင်",
          "နှင်းပွင့်လှိုင် beauty saloon ရွှေပြည်အေး ၊ မြို့ရှောင်လမ်း ၊ မြေနီကုန်း ကားဝန်းအနီး ၊ မော်လမြိုင်။",
          "မေတ္တာမွန် mini mart-အမှတ်၉၅၊မြဟေဝန်လမ်းထိပ်၊မြို.အဝင်လမ်းမ၊မော်လမြိုင်မြို.။",
          "AKT CosmeticsCenter အမှတ် (103) သိမ်ကုန်းရပ်ကွက်၊ ocean center ရှေ့ မော်လမြိုင်။",
          "Sweety Cho Cosmetics - အမှတ် (၃၇၂) ၊ အောက်လမ်းမကြီး၊ မရမ်းကုန်းရပ်ကွက်၊ မော်လမြိုင်။",
          "Aung Myanmar -B96 မြိုင်ရတနာ၂ထပ်စျေး၊ မော်လမြိုင်။",
        ],
      },
      {
        city: "မြစ်ကြီးနား",
        location: [
          "Beauty Diary (Showroom-13) သခင်နက်ဖေလမ်းနှင့် စည်ပင်လမ်းထောင့် ၊မြို့မရပ်ကွက်၊မီးသတ်ရုံးရှေ့၊မြစ်ကြီးနားမြို့။",
          "Forever More – YMCA MAIN အဝင်ပေါက်၊ မြစ်ကြီးနားမြို့။",
          "မင်းခိုင်(စင်တာ)- မြစ်ကြီးနား။",
          "ပြည်ဟိန်းလျှပ်စစ် - မြို့သစ်ကြီးရပ်ကွက်၊ ပြည်ထောင်စုလမ်းမဘေး၊ AG ဘုရားကျောင်းအနီး၊ မြစ်ကြီးနား။",
          "ဖြူဖြူသန့်စတိုး - ဘူတာတိုက်ခန်း၊ မြစ်ကြီးနားမြို့။",
          "Sweet art Cosmetics Skin Care & Underwear - အမှတ် (၄၂) ၊ စျေးကြီးလမ်း၊ မြို့သစ်ရပ်ကွက်၊ မြစ်ကြီးနား။",
        ],
      },
      {
        city: "မုဒုံ",
        location: [
          "Family Store - 255 A ,ဗိုလ်ချုပ်လမ်း ၊ မင်းတန့်ရပ် ၊မုဒုံ။",
        ],
      },
      {
        city: "မြိတ်မြို့",
        location: [
          "Ayeyawady(မြေပဲဆီ) - ဗိုလ်ချုပ်လမ်း၊ထားဝယ်စုရပ်၊မြိတ်မြို့။",
          "crystal doll beauty saloon - အမှတ် ၆၅ ၊ ဗိုလ်ဗထူးလမ်း ၊ ခရူတောရပ်",
          "မြိတ်ကုန်တိုက် - ကမ်းနားလမ်း",
          "grand jade shopping mall",
          "Glow Cosmetics center – Room (K5) market garden",
          "smile ပိုးထည်ချည်ထည် နှင့် စာရေးကိရိယာ .. ပုလဲလမ်း၊သန်းဖိုရပ်",
          "စံရိပ်နွယ် ဆံပင်မိတ်ကပ် ။ မာန်မာ လမ်းဆုံ ၊ ပုလဲလမ်း ၊",
          "အလှကမ္ဘာ ၊ အလှပြင်ဆိုင်သုံ းပစ္စည်း အရောင်းဆိုင် .. အမှတ်၅ ၊ ပြည်သာယာလမ်း ၊ မြို့သစ်တံတား",
          "နန္ဒာလှိုင်စတိုး ၊ ဇေယျာသီရိ ၁ ရပ်ကွက် ၊ စဉ့်ဝင်းရပ်",
          "Market garden shopping mall",
          "အိမ်ရှင်မ",
          "ဧကရီဖူး",
          "Beauty Fly me",
          "C & Qအလှကုန်နှင့် ဆေးဆိုင်။",
          "မြတ်သဇင်စိုး -Ws Mobile စပါးရွေဝါလမ်း ကောလိပ်အနီး၊ - ဆု အလွကုန်ဆိုင် မြစ်ငယ် ၊",
          "Cherry Cherry skincare ကြောင်ငယ်လမ်းမကြီး -Mee Mee Skincare မြို့သစ်မီးပွို င့်အနီး၊ ဓေလ့ ထားဝယ်စု",
        ],
      },
      {
        city: "မကွေး",
        location: [
          "Beauty diary (Showroom-12) အမှတ်(၂၈၀) ပြည်တော်သာလမ်းမ၊ရွာလေးရပ်၊မကွေး။",
          "မကွေးShopping Mall - အမှတ်(၈)၊ ဗိုလ်ချုပ်လမ်း၊ ပွဲကြိုရပ်မကွေးမြို့။",
          "PT Beauty - အမှတ်(၁/က)၊မဲတီးလမ်း၊ မြို့မအိုးဘိုရပ်ကွက်၊မကွေးမြို့။",
          "ကောင်းမွန်စင်တာ - မကွေး။",
          "ငှေးဦးစတိုး - စံပြရပ်ကွက်၊ မင်းတပ်မြို့။",
        ],
      },
      {
        city: "မိတ္ထှီလာ",
        location: [
          "ဝင်းမာလာစတိုး -(၁) ဈေးအတွင်း (တ)ရုံ။မိတ္ထီလာမြို.။",
          "ဝင်းမာလာစတိုး -(၂) ပွဲစားတန်းထိပ်၊ဈေးအနောက်၊မိတ္ထီလာမြို.။",
          "ဝင်းမာလာစတိုး -(၃) ပထမလမ်းမတော်၊မိတ္ထီလာမြို.။",
          "ဝင်းမာလာစတိုး -(၄) နာရီစင်အနီး၊မိတ္ထီလာမြို.။",
          "ထီလာသူ Cosmetics -စာတိုက်လမ်း၊ မင်းရပ်၊မိတ္ထီလာမြို့။",
          "Smooth Beauty Collection - မ (၃၆၀) ရတနာမာန်အောင်ရပ်၊ ရတနာမာန်အောင် ဘုရားရှေ့၊ မိတ္ထီလာမြို့။",
        ],
      },
      {
        city: "မုံရွာ",
        location: [
          "မြနဂါးစတိုး - ကျောက္ကာလမ်း ၊အလယ်ရပ် ၊မုံရွာမြို့။",
          "ခင်ငှေးစီ Cosmetics - အမှတ် (၁) ၊ ဘောဂလမ်း၊ မုံရွာ။",
        ],
      },
      {
        city: "မော်ကျွန်း",
        location: ["Rayan Van Oline Shop - ဧရာ၀တီတိုင်း ၊ မော်ကျွန်းမြို့။"],
      },
      {
        city: "မူဆယ်",
        location: [
          "ယမင်းအလှကုန် - ဈ-၉၁၊ဈေးရပ်ကွက်၊ပြည်ထောင်စုလမ်းမကြီး၊UAB Bank ဘေး၊မူဆယ်မြို့။",
          "စိန်စတိုး - 105 မိုင် ၊ မူဆယ်။",
        ],
      },
      {
        city: "မင်းပြား",
        location: ["မေကမ္ဘာ အလှကုန် - ရခိုင်ပြည်နယ် ၊ မင်းပြားမြို့နယ်။"],
      },
      {
        city: "မိုင်းတုံ",
        location: [
          "သီတာအောင်စတိုး - မြို့မ ၁၁ ရပ်ကွက် ၊ မိုင်းတုံမြို့ ၊ ရှမ်းပြည်နယ် အရှေ့ပိုင်း",
        ],
      },
      {
        city: "မြဝတီ",
        location: [
          "မေမြတ်ဦး (mini Mart) -အမှတ်(၄) ဘုရင့်နောင်လမ်းမကြီး ၊ ညဈေးအနီး ၊ မြဝတီမြို့။",
          "Ei Shan Bkk cosmetisc & Korea Skin care - အမှတ် ၄ ၊ ချစ်ကြည်ရေးလမ်း ၊ ငွေစင်္ကြာဟိုတယ်အနီး ၊ မြ၀တီ",
          "Chan Chan Cosmetics Store - အနန္တသူရိယလမ်း၊ အမှတ် ၅ ရပ်ကွက် ၊ မြ၀တီ",
          "Yu Yu Cosmetics - ရွှေမြင်းဝန်ဘုရားကြီးရှေ့၊ မနော်ဟရီလမ်း (ခ)ကိုးနဝင်းကျောင်းလမ်း၊ မြ၀တီမြို့ ၊",
          "လင်းသီရိစတိုး",
          "မညွန့်ရီစတိုး",
          "သိန်းသန်း စတိုး",
          "မွန်ဆိုင်",
        ],
      },
      {
        city: "ရေစကြို",
        location: ["မေမီမီစိုးစတိုး - စျေးအနောက်ဘက်၊ရေစကြိုမြို့။"],
      },
      {
        city: "ရေး",
        location: [
          "မဥမ္မာစတိုး -အမှတ်(၇)၊ရှင်စောပုလမ်း၊ရန်ကြီးအောင်ရပ်ကွက်၊ ရေးမြို့။",
          "BeautyHouse Cosmetics - အမှတ်114၊ ဗိုလ်ချုပ်လမ်း၊ ရန်ကြီးအောင်ရပ်ကွက်၊(ရွှေစံတော်ဘူရားအနီး)၊ ရေးမြို့။",
          "တန်ခူးမေစတိုး - အမှတ်(၁၅) ၊ လဂွန်းအိမ်လမ်း၊ ရန်မျိုးအောင်ရပ်ကွက်၊ ရေးမြို့။",
        ],
      },
      {
        city: "‌ရွှေဘို",
        location: [
          "UAung Myint Wholesale&Retail Mart - အမှတ်(၇) နန်းတော်၊တောင်ဘက်၊ ရွှေဘိုမြို့။",
          "မျိုးမဟာစတိုး - ရွှေဘိုမြို့။",
        ],
      },
      {
        city: "ရပ်စောက်မြို့",
        location: [
          "မသဲသဲ (အခရာစတိုး) - ရပ်စောက်မြို။",
          "အာဆီယံစတိုး(၂) - ရပ်စောက်မြို့၊ ရှမ်းပြည်နယ်တောင်ပိုင်း။",
        ],
      },

      {
        city: "ရေနီ",
        location: [
          "ခိုင်နှင်းဖြူစတိုး - တောင်ပိုင်းရပ်ကွက်(၃) ၊ ရေနီမြို့၊ ရေတာရှည်မြို့နယ်။",
        ],
      },
      {
        city: "ရှမ်း",
        location: ["SMK Store - စျေးတန်းရပ်ကွက်၊ ရွာငံမြို့၊ ရှမ်းတောင်။"],
      },
      {
        city: "ရမည်းသင်း",
        location: [
          "စီနီရို နိဗ္ဗာန်ကုန် နှင့် အလှကုန် - မ/၁၀၄၊ ရန်အောင်မြင်လမ်း၊ညောင်ပင်ရပ်ကွက်၊ ရမည်းသင်း။",
        ],
      },
      {
        city: "ရမ်းဗြဲ",
        location: ["Venus Lin Latt Cosmetics & Clothing - ရမ်းဗြဲ။"],
      },
      {
        city: "လယ်ဝေး",
        location: [
          "မိုးကောင်းကင်စတိုး -လယ်ဝေးမြို့။",
          "လမင်းစတိုး -လယ်ဝေးမြို့။",
        ],
      },
      {
        city: "လက်ပံတန်း",
        location: [
          "MON MON Cosmetic and Skincare Retail & Wholesale - အမှတ်(၂၀)၊ ၃-လမ်း၊မြောက်ပိုင်း၊ မင်းရပ် ရပ်ကွက်၊ သမဝါယမ ရုံးရှေ့၊ လက်ပံတန်းမြို့။",
        ],
      },
      {
        city: "လားရှိုး",
        location: [
          "ဝေယံမိုးစတိုး -(၂၁၃ ) လမ်း ၊ရပ်ကွက်(၁၀) ၊နယ်မြေ (၉) ၊လားရှိုးမြို့မကြီး",
          "Gloden Horse SuperMarket - အမှတ်(Da/14/11) ၊ ဟားခါးလမ်း၊လားရှိုးမြို့။",
          "Hnin Skincare Cosmetics - အမှတ်(9/38) စကားဝါလမ်း ၊ အရှေ့ခါးရိုးပရိယတ္တိစာသင်တိုက်လမ်း(9)ရပ်ကွ က် ၊ လားရှိုးမြို့။",
          "ဆုလာဘ် အလှကုန် - အမှတ်(55-56) ၊ အင်းဝဘဏ် အနောက်ဘက်၊ ရွှေကံ့ကော်ရုံ၊ မြို့မဈေးကြီး၊လားရှိုးမြို့။",
          "လှိုင်မျိုးသင်း အထည်ဆိုင် - လားရှိုးမြို့။",
          "Pearl Thuzar Skin Care & Cosmetics - အမှတ် (၅၉)(၇၅)၊ ကံ့ကော်ရုံ၊ အင်း၀ဘဏ်အနောက်၊ မြိုမစျေးကြီး၊ လားရှိုးမြို့။",
          "မကေခိုင် အလှကုန် - တက္ကသိုလ်ရှေ့ ဘူတာလမ်း၊ လားရှိုး။",
        ],
      },
      {
        city: " လွိုင်ကော် ",
        location: [
          "မမစတိုး- န(၂၀) အနော်ရထာလမ်း၊ နောင်ယား(ခ) လွိုင်ကော်မြို့။",
          "Pearl Mart - အမှတ် (၄၅)၊ ရွှေတောင်လမ်း၊ ရွှေတောင်ရပ်ကွက်၊ ဗဟိုလမ်း အရှေ့ဖက်၊ လွိုင်ကော်မြို့။",
          "Pearl Mart -အမှတ် (န ၂၄၅)၊ ၈လမ်း၊ အထက (၂)အနီး၊ နောင်ယား(က)ရပ်ကွက်၊လွိုင်ကော်မြို့။",
          "မချောစတိုး - အမှတ်၉၃၊ ဒေါနိူးကူးရပ်ကွက်၊ လွိုင်ကော်။",
        ],
      },
      {
        city: "လုံးခင်း",
        location: ["စံပယ်ဖြူစတိုး - လုံးခင်း ရပ်ကွက်(၂)၊ ကချင်ပြည်နယ်။"],
      },
      {
        city: "လောက်ကိုင်",
        location: [
          "My Mind (online shop) -လောက်ကိုင် ဆင်ဝိုင်းထိပ်က တိန်ချောက်စီး ။",
        ],
      },
      {
        city: "‌ဝေါ",
        location: [
          "N3 Baby Home Baby Mart - အရှေ့ဘက်ကမ်း ၊ မင်းလမ်း၊ ဝေါမြို့။",
          "Ami Cosmetics and Bags - အရှေ့ဘက်လမ်းကျောင်းပိုင်း၊ ဂေါ်သဇင်လမ်း ၊ ဝေါမြို့။",
        ],
      },
      {
        city: "ဝါးခယ်မ",
        location: [
          "ခန့်ညား (စာရေးကိရိယာနှင့်စတိုး)- ကမ်းနားလမ်း ၊ မင်းပိုင်းရပ်ကွက်၊ ဝါးခယ်မမြို့။",
          "ကိုမျိုးညွှန့် + မခင်မာချို အလှကုန် - အမှတ် ( ၅၀/၅၁ ) အုန်းသီးတန်း ၊သံစျေး ၊ ဝါးခယ်မ",
        ],
      },
      {
        city: "သထုံ",
        location: [
          "Union Mart – CB Bank ရှေ.၊မင်းလမ်း၊သထုံမြို။",
          "Sweet Store-ဘုရားကြီးတောင်ဘက် ၊မင်းလမ်း ၊သထုံမြို့။",
        ],
      },
      {
        city: "သံဖြူဇရပ်",
        location: [
          "နေကြာစတိုး - အမှတ်(၅) သီရီမာလာလမ်း ၊ကျောင်းပိုင်းရပ်၊ သံဖြူဇရပ်မြို့။",
          "တက်နေဝန်း - အမှတ်(46)၊ အောင်ဆန်းလမ်း၊ သံဖြူဇရပ်မြို့။",
          "ယမင်းအလှကုန် - မြို့မစျေးဝင်ပေါက် ရှေ့ ၊ သံဖြူဇရပ်။",
        ],
      },
      {
        city: "ဟင်္သာတ",
        location: [
          "BeautyQueen Store- အမှတ်(၄၉) ၊ တာကလေးရပ်ကွက်၊ နတ်မော်လမ်း၊ ဟသာၤတ။",
          "ပျိုခေတ်မေစတိုး - ဦးဝီစာရလမ်း၊ ဟင်္သာတ။",
        ],
      },
      {
        city: "အောင်လံ",
        location: [
          "နေဝန်းစတိုး - လမ်းမတော်လမ်းနှင့်၁၆လမ်းထောင့်၊ အောင်လံမြို့။",
        ],
      },
      {
        city: "အုတ်ဖို",
        location: [
          "မိတ်ကောင်းစတိုး - အုတ်ဖိုမြို့မဈေးရှေ့၊ မြို့မ(၁)လမ်း၊ အုတ်ဖိုမြို့။",
        ],
      },
      {
        city: "အောင်ပန်း",
        location: [
          "ရွန်းလပြည့်စတိုး -အောင်ပန်းမြို့။",
          "ရွှေဝတ်မှုန်စတိုး - အမှတ်(၇)၊ အောင်မြတ်လမ်း၊ အောင်ပန်းမြို့။",
        ],
      },
      {
        city: "အမ်း",
        location: ["ဝင့်ထည်စတိုး - အမ်းမြို့။"],
      },
      {
        city: "အွန်လိုင်းဝက်ဆိုက်များ",
        location: [
          "Shop.com.mm ( https://www.shop.com.mm/shop/drface/… )",
          "FoodPanda",
          "Grab",
          "GoFresh Myanmar",
          "Zegobird (https://www.zegobird.com/)",
        ],
      },
      {
        city: "ဘန်ကောက်",
        location: [
          "Sharr Lae Wyne Store - Room No (409), Supachai Mansion, 14/1 ratchaprarop road, Makkason Ratchathewi",
          "Kyaw Aung Soe - (Thailand )09423518701(viber)",
        ],
      },
    ],
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
    },

    getAddress(state) {
      return state.address;
    },

    getSkincareSetProducts(state) {
      return state.skincareSetProducts;
    },
  },
  mutations: {
    setPageStatus: (state, status) => (state.pageStatus = status),
    setProduct: (state, product) => (state.product = product),
    setSkincareSetProducts: (state, products) =>
      (state.skincareSetProducts = products),
  },
  actions: {
    getPageStatus: (context, status) => context.commit("setPageStatus", status),
    getProduct: (context, id) => {
      let product = context.state.products.find((product) => product.id == id);
      context.commit("setProduct", product);
    },
    getSkincareSetProducts: (context, slug) => {
      let products = context.state.products.filter((product) =>
        product.set.includes(slug)
      );
      context.commit("setSkincareSetProducts", products);
    },
  },
  modules: {},
});
