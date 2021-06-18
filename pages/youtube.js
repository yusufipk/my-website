import Head from "next/head";
import Image from "next/image";

export default function Youtube() {
  return (
    <div className="youtube">
      <Head>
        <title>Youtube - Yusuf Ipek</title>
        <meta property="og:title" content="Youtube - Yusuf Ipek" />
        <meta
          property="og:description"
          content="Information about my Youtube channel."
        />
        <meta
          property="og:image"
          content={
            "https://images.ctfassets.net/adn4iqhmi2t3/7DK68GzQfM57MAAyPw33At/3539a5206b985990379e0b9a3765fe3a/youtube.png"
          }
        />
      </Head>

      <h1 className="heading-1">My Youtube Channel</h1>
      <hr />
      <p>
        In 21st century, privacy is a big problem. Companies like Facebook can
        change people's mind and even manipulate elections. But many people
        sadly, do not know these problems or some of them do not care. I wanted
        to create a Youtube channel where I feature free and open source
        software, and talk about privacy. <br /> If you are interested, here are
        some videos I think you'll like. Also I have a podcast where I talk
        about privacy, free and open source news. (also in Turkish) If you'd
        like to check it out, here is the{" "}
        <a
          href="https://dar.vin/pdcwb"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          link
        </a>
        .
      </p>
      <div className="youtube__iframes">
        <a
          href="https://www.youtube.com/watch/dd3CopniBW4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/youtube/vpn2.png"
            width="550px"
            height="320px"
            alt="VPN Firmalarının Tuzakları"
          />
        </a>
        <a
          href="https://www.youtube.com/watch/X9WLQfZ8Ff0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/youtube/firefox.jpg"
            width="550px"
            height="320px"
            alt="Neden Firefox En İyi Web Tarayıcısı"
          />
        </a>
        <a
          href="https://www.youtube.com/watch/1VJxXIG_YHI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/youtube/açık.png"
            width="550px"
            height="320px"
            alt="Neden Açık Kaynak Program Kullanıyorum"
          />
        </a>
        <a
          href="https://www.youtube.com/watch/jUgJUqFw_O8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/youtube/eklenti.png"
            width="550px"
            height="320px"
            alt="Olmazsa Olmaz Eklentilerim"
          />
        </a>
      </div>
    </div>
  );
}
