import Link from "next/link";
import Image from "next/image";

const collections=[
  ["/urunler","/door-category.webp","KAPILAR","Zarif detaylar, zamansız tasarımlar."],
  ["/mutfak","/kitchen-category.webp","MUTFAK","Fonksiyonel ve modern yaşam alanları."],
  ["/banyo","/bath-category.webp","BANYO","Şıklık ve konfor bir arada."]
];

export default function Home(){return <main className="zHome approvedHome">
  <section className="zHero approvedHero">
    <Image src="/hero.webp" alt="ARVIONA modern yaşam alanı" fill priority quality={100} sizes="100vw"/>
    <div className="zHeroShade"/>
    <div className="zHeroCopy"><span>ARVIONA · KITCHEN · DOOR SYSTEMS · INTERIOR</span><h1>Hayallerinizdeki Mekânlar İçin <em>Modern Çözümler</em></h1><p>ARVIONA ile yaşam alanlarınıza estetik, kalite ve fonksiyonellik katın.</p><div className="zHeroActions"><Link href="/urunler">Ürünleri Keşfet →</Link></div></div>
  </section>

  <section className="approvedCategories">{collections.map(([href,img,title,text])=><Link href={href} className="approvedCategory" key={href}><div className="approvedCategoryImage"><Image src={img} alt={`ARVIONA ${title}`} fill quality={100} sizes="(max-width:900px) 100vw,33vw"/></div><div><h2>{title}</h2><p>{text}</p><b>Keşfet →</b></div></Link>)}</section>

  <section className="approvedPartners"><span>PELİLAM</span><span>ASD LAMİNAT</span><span>ÇAMSAN ENTEGRE</span><span>KASTAMONU ENTEGRE</span><span>YILDIZ ENTEGRE</span><span>GENTAŞ</span></section>

  <section className="approvedDesign"><div className="approvedDesignCopy"><span>KALİTEYİ DETAYLARDA HİSSEDİN</span><h2>Modern Yaşamın<br/>En Şık Hali</h2><p>ARVIONA, estetiği kaliteyle buluşturan tasarımlarıyla yaşam alanlarınıza değer katar.</p><Link href="/projeler">Projeleri İncele →</Link></div><div className="approvedDesignVisual"><Image src="/project-concept.webp" alt="ARVIONA modern iç mekân projesi" fill quality={100} sizes="(max-width:900px) 100vw,65vw"/></div></section>

  <section className="approvedTools"><div><span>TASARIM ARACI</span><h2>Kendi Tarzınızı Oluşturun</h2><p>Renk, model ve malzeme seçenekleriyle size özel kombinasyonlar oluşturun.</p></div><Link href="/urunler">Kapı Tasarımı →</Link><Link href="/mutfak#tasarla">Mutfak Tasarımı →</Link><Link href="/banyo#tasarla">Banyo Tasarımı →</Link></section>

  <section className="approvedTrust"><div><b>◇</b><span>Uluslararası Kalite<br/>Standartları</span></div><div><b>⚙</b><span>Özel Tasarım<br/>Çözümleri</span></div><div><b>◇</b><span>Güvenilir İş<br/>Ortağı</span></div><div><b>◉</b><span>Proje Odaklı<br/>Destek</span></div></section>
</main>}
