import Link from "next/link";
import Image from "next/image";

const collections=[
  ["/urunler","/door-category.webp","01 — KAPI","İç Mekân Kapıları","DOĞAL. SADE. ZAMANSIZ."],
  ["/mutfak","/kitchen-category.webp","02 — MUTFAK","Mutfak Sistemleri","RAFİNE. İŞLEVSEL. ÖZGÜN."],
  ["/banyo","/bath-category.webp","03 — BANYO","Banyo Mobilyaları","SAKİN. MODERN. DENGELİ."]
];

export default function Home(){return <main className="zHome">
  <section className="zHero">
    <Image src="/hero.webp" alt="ARVIONA modern iç mekân" fill priority quality={100} sizes="100vw"/>
    <div className="zHeroShade"/>
    <div className="zHeroCopy">
      <span>ARVIONA · KITCHEN · DOOR SYSTEMS · INTERIOR</span>
      <h1>Mekânın karakteri.<br/>Detaylarda başlar.</h1>
      <p>Kapı, mutfak ve banyo sistemlerinde çağdaş tasarım; güçlü malzeme dili ve projeye özel üretim.</p>
      <div className="zHeroActions"><Link href="/urunler">Koleksiyonları keşfet</Link><Link href="/teklif">Projeniz için teklif alın</Link></div>
    </div>
    <div className="zHeroIndex"><b>01</b><span>ARVIONA / 2026</span></div>
  </section>

  <section className="zStatement"><span>ARVIONA</span><h2>Yaşam alanları için<br/>zamansız bir tasarım dili.</h2><p>Malzeme, oran ve işlevi aynı çizgide buluşturuyor; konuttan toplu projelere kadar bütüncül çözümler üretiyoruz.</p></section>

  <section className="zCollectionsHead"><span>KOLEKSİYONLAR</span><h2>Her mekân, ayrı bir karakter.</h2><p>Kapıdan mutfağa, banyodan proje detaylarına kadar aynı mimari dili sürdüren ürün grupları.</p></section>
  <section className="zCollections">{collections.map(([href,img,no,title,tag])=><Link href={href} className="zCollection" key={href}><Image src={img} alt={`ARVIONA ${title}`} fill quality={95} sizes="(max-width:900px) 100vw,33vw"/><div className="zCollectionShade"/><div className="zCollectionCopy"><span>{no}</span><h3>{title}</h3><p>{tag}</p><b>Keşfet →</b></div></Link>)}</section>

  <section className="zProject"><div className="zProjectVisual"><Image src="/project-concept.webp" alt="ARVIONA proje çözümleri" fill quality={100} sizes="(max-width:900px) 100vw,58vw"/></div><div className="zProjectCopy"><span>PROJELER İÇİN ARVIONA</span><h2>Ölçek büyür.<br/>Tasarım dili değişmez.</h2><p>Mimarlar, yükleniciler, oteller, villalar, toplu konut ve ticari projeler için ürün seçimi, üretim ve teklif sürecini tek noktada ele alıyoruz.</p><div className="zStats"><div><b>03</b><small>Ana ürün grubu</small></div><div><b>360°</b><small>Proje yaklaşımı</small></div></div><Link className="zDarkButton" href="/profesyoneller">Profesyoneller için →</Link></div></section>

  <section className="zConfig"><span>KİŞİSELLEŞTİRME</span><h2>Seçin. Birleştirin.<br/>Mekânınızda görün.</h2><p>Model, dekor ve yüzey alternatiflerini bir araya getirerek kendi kombinasyonunuzu oluşturun.</p><div><Link href="/mutfak">Mutfak tasarla →</Link><Link href="/banyo">Banyo tasarla →</Link><Link href="/urunler">Kapı seç →</Link></div></section>

  <section className="zFinal"><span>ARVIONA PROJECT</span><h2>Projenizi birlikte<br/>şekillendirelim.</h2><Link href="/teklif">Teklif talebi oluştur →</Link></section>
</main>}
