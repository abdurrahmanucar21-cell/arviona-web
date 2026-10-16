import "./style.css";
import Link from "next/link";
export const metadata={title:"ARVIONA | İç Mekân Kapıları",description:"ARVIONA lake ve laminat iç mekân kapıları."};
export default function Layout({children}){return <html lang="tr"><body><header><Link className="logo" href="/">ARVIONA<small>DOORS • KITCHENS • LIVING</small></Link><nav><Link href="/">Ana Sayfa</Link><Link href="/urunler">Ürünler</Link><Link href="/teklif">Teklif Al</Link></nav></header>{children}<footer><b>ARVIONA</b><span>Doors • Kitchens • Living</span><span>© 2026</span></footer></body></html>}