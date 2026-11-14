export type Task={id:string;store:string;district:string;product:string;reason:string;lastSeen:string;assignee:string;due:string;status:'Жаңа'|'Тағайындалды'|'Жұмыста'|'Талдауды күтуде'|'Жабық';explanation:string;sample:number};
export type Observation={id:string;product:string;store:string;date:string;price:number;amount:number;unitPrice:number;quality:'Жарамды'|'Қайталанған'|'Қате';source:string;demo:boolean};
export const stores=[
{id:'s1',name:'Орталық',district:'Орталық',verified:false},
{id:'s2',name:'Арай',district:'Арай',verified:false},
{id:'s3',name:'Мерей',district:'Мерей',verified:false},
{id:'s4',name:'Титов',district:'Титов',verified:false},
{id:'s5',name:'Тасбөгет',district:'Тасбөгет',verified:false}
];
export const tasks:Task[]=[
{id:'t1',store:stores[0].name,district:stores[0].district,product:'Картофель',reason:'Жалпы өзгеріс',lastSeen:'14.11.2026',assignee:'Демо-инспектор 1',due:'15.11.2026',status:'Жұмыста',explanation:'Демо: нужно перепроверить изменение медианы по тренду за 14 дней.',sample:14},
{id:'t2',store:stores[1].name,district:stores[1].district,product:'Морковь столовая',reason:'Локальный ауытқу',lastSeen:'14.11.2026',assignee:'Демо-инспектор 2',due:'15.11.2026',status:'Тағайындалды',explanation:'Демо: цена района отличается от городской медианы. Проверьте ценник и упаковку.',sample:14},
{id:'t3',store:stores[2].name,district:stores[2].district,product:'Мука пшеничная первого сорта',reason:'Дерек жаңарту керек',lastSeen:'14.11.2026',assignee:'Тағайындалмаған',due:'16.11.2026',status:'Жаңа',explanation:'Демо: обновите наблюдение в районе и подтвердите цену и единицу измерения.',sample:14},
{id:'t4',store:stores[3].name,district:stores[3].district,product:'Рис шлифованный (круглозерный)',reason:'Локальный ауытқу',lastSeen:'14.11.2026',assignee:'Демо-инспектор 1',due:'16.11.2026',status:'Жабық',explanation:'Демо: цена и упаковка проверены, наблюдение закрыто.',sample:14},
{id:'t5',store:stores[4].name,district:stores[4].district,product:'Картофель',reason:'Жалпы өзгеріс',lastSeen:'14.11.2026',assignee:'Демо-инспектор 2',due:'16.11.2026',status:'Жұмыста',explanation:'Демо: цены района сравниваются.',sample:14}
];
const mk=(id:string,product:string,store:string,date:string,unitPrice:number,quality:'Жарамды'|'Қайталанған'|'Қате'='Жарамды'):Observation=>({id,product,store,date,price:unitPrice,amount:1,unitPrice,quality,source:'Синтетикалық демонстрация',demo:true});
export const observations:Observation[]=[];




const seriesProducts=[['Мука пшеничная первого сорта',220],['Хлеб пшеничный из муки первого сорта (формовой)',280],['Рожки',360],['Крупа гречневая (ядрица)',510],['Рис шлифованный (круглозерный)',460],['Картофель',238],['Морковь столовая',310],['Лук репчатый',190],['Капуста белокочанная',180],['Помидоры (кроме черри и виноградных сортов)',850]] as const;
const districtOffsets=[-0.04,0.02,0.05,-0.01,0.03];
const districtObservations:Observation[]=seriesProducts.flatMap(([product,base],pi)=>stores.flatMap((store,si)=>Array.from({length:30},(_,day)=>{const date=new Date(Date.UTC(2026,9,16+day)).toISOString().slice(0,10);const trend=(day-6.5)*(pi%3===0?0.002:pi%3===1?-0.001:0.0013);const wave=Math.sin((day+si*2+pi)*1.7)*0.008;const unitPrice=Math.round(base*(1+districtOffsets[si]+trend+wave));return mk('series-'+pi+'-'+si+'-'+day,product,store.name,date,unitPrice)})));
observations.push(...districtObservations,mk('demo-duplicate','Картофель',stores[0].name,'2026-11-14',238,'Қайталанған'),mk('demo-invalid','Картофель',stores[1].name,'2026-11-14',-10,'Қате'));
