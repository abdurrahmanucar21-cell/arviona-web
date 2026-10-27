import Link from 'next/link';
import data from '../../products.json';

export const metadata={title:'Kapı Koleksiyonları',description:'ARVIONA lake ve laminat iç mekân kapı koleksiyonları.'};

export default function Page(){return <main className="page"><section className="pageHero"><span className="eyebrow">ARVIONA DOORS</span><h1>Kapı Koleksiyonları</h1><p>Lake ve laminat yüzeylerde 12 model. Konut, villa, otel ve toplu projeler için sade, çağdaş ve proje odaklı iç mekân kapıları.</p></section><section className="gridProducts">{data.map((p)=><Link className="productCard large" href={'/urunler/'+p.slug} key={p.slug}><img src={`/products/${p.slug}.webp`} alt={`${p.code} ${p.name} ARVIONA iç mekân kapısı`}/><h3>{p.code} · {p.name}</h3><span>{p.type} · {p.color}</span><p>{p.description||p.shortDescription||'ARVIONA iç mekân kapı koleksiyonu.'}</p></Link>)}</section></main>