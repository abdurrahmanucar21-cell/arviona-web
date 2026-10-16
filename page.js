import Link from 'next/link';
import data from '../products.json';
export default function Home(){
 const lake=data.filter(p=>p.type==='Lake'), lam=data.filter(p=>p.type==='Laminat');
 return <main>
  <section className="hero"><img src="/hero.webp" alt="ARVIONA yaşam alanı"/><div className="heroShade"/><div className="heroCopy"><span>ARVIONA · KAPI · MUTFAK · BANYO</span><h1>Değer Katan<br/>Modern Çözümler.</h1><p>Kapı, mutfak ve banyo koleksiyonlarımızla estetik, kalite ve fonksiyonelliği bir araya getiriyoruz.</p><Link className="btn light" href="/urunler">Koleksiyonları İncele →</Link></div></section>
  <section className="categories"><Card img="/door-category.webp" title="Kapı Koleksiyonları" href="/urunler"/><Card img="/kitchen-category.webp" title="Mutfak Koleksiyonları" href="/mutfak"/><Card img="/bath-category.webp" title="Banyo Koleksiyonları" href="/banyo"/></section>
  <Collection title="Lake Kapı Serisi" sub="Modern çizgiler, zamansız tasarımlar" items={lake}/>
  <Collection title="Laminat Kapı Serisi" sub="Doğal dokular, modern renkler" items={lam}/>
  <section className="projectBand"><img src="/project-concept.webp" alt="ARVIONA proje yaklaşımı"/><div><span className="eyebrow">PROFESYONELLER İÇİN</span><h2>Projeye özel çözümler.</h2><p>Mimar, müteahhit ve proje firmaları için koleksiyon, ölçü ve tamamlayıcı detayları proje ihtiyacına göre birlikte planlıyoruz.</p><Link className="btn" href="/teklif">Teklif Al →</Link></div></section>
 </main>}
function Card({img,title,href}){return <Link href={href} className="cat"><img src={img} alt={title}/><div><h2>{title}</h2><span>İncele →</span></div></Link>}
function Collection({title,sub,items}){return <section className="collection"><div className="sectionHead"><div><h2>{title}</h2><p>{sub}</p></div><Link href="/urunler">Tümünü Gör →</Link></div><div className="productRow">{items.map(p=><Link className="productCard" href={'/urunler/'+p.slug} key={p.slug}><img src={'/products/'+p.slug+'.webp'} alt={p.code+' '+p.name}/><b>{p.code}</b><span>{p.name}</span></Link>)}</div></section>}
