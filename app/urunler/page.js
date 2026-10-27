import Link from 'next/link';
import Image from 'next/image';
import data from '../../products.json';

export const metadata={title:'Kapı Koleksiyonları',description:'ARVIONA lake ve laminat iç mekân kapı koleksiyonları.'};

export default function Page(){return <main className="page">
<section className="imageHero doorCollectionHero"><Image src="/door-category.webp" alt="ARVIONA iç mekân kapısı gerçek yaşam alanı" fill priority sizes="100vw"/><div><span className="eyebrow">ARVIONA DOORS</span><h1>Kapı Koleksiyonları</h1><p>Lake ve laminat yüzeylerde 12 model. Konut, villa, otel ve toplu projeler için sade, çağdaş ve proje odaklı iç mekân kapıları.</p><Link className="btn" href="#koleksiyon">Modelleri İncele →</Link></div></section>
<section className="visualCollection doorEnvironment"><div className="visualGrid"><figure className="visualLarge"><Image src="/doors-page-concept.png" alt="ARVIONA kapı koleksiyonu iç mekân uygulama görünümü" fill sizes="(max-width:900px) 100vw,66vw"/><figcaption>İç mekânda bütüncül tasarım</figcaption></figure><figure><Image src="/door-category.webp" alt="ARVIONA modern kapı yaşam alanı" fill sizes="(max-width:900px) 100vw,34vw"/><figcaption>Modern çizgi</figcaption></figure><figure><Image src="/project-concept.webp" alt="ARVIONA proje ve yaşam alanı konsepti" fill sizes="(max-width:900px) 100vw,34vw"/><figcaption>Proje odaklı çözümler</figcaption></figure></div></section>
<section id="koleksiyon" className="gridProducts">{data.map((p)=><Link className="productCard large" href={'/urunler/'+p.slug} key={p.slug}><Image src={`/products/${p.slug}.webp`} alt={`${p.code} ${p.name} ARVIONA iç mekân kapısı`} width={600} height={900} sizes="(max-width:520px) 50vw,(max-width:900px) 50vw,25vw"/><h3>{p.code} · {p.name}</h3><span>{p.type} · {p.color}</span><p>{p.description||p.shortDescription||'ARVIONA iç mekân kapı koleksiyonu.'}</p></Link>)}</section>
</main>}