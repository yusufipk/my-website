import Head from "next/head";
export default function Youtube() {
  return (
    <div className="youtube">
      <Head>
        <title>Youtube</title>
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
          _target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          link
        </a>
        .
      </p>
      <div className="youtube__iframes">
        <div className="youtube__iframes-1">
          <iframe
            title="VPN Firmalarının Tuzakları"
            src="https://www.youtube.com/embed/dd3CopniBW4"
            className="youtube__iframe"
          />
          <iframe
            title="Neden Firefox En İyi Web Tarayıcısı"
            src="https://www.youtube.com/embed/X9WLQfZ8Ff0"
            className="youtube__iframe"
          />
        </div>
        <div className="youtube__iframes-2">
          <iframe
            title="Neden Açık Kaynak Program Kullanıyorum"
            src="https://www.youtube.com/embed/1VJxXIG_YHI"
            className="youtube__iframe"
          />
          <iframe
            title="Olmazsa Olmaz Eklentilerim"
            src="https://www.youtube.com/embed/jUgJUqFw_O8"
            className="youtube__iframe"
          />
        </div>
      </div>
    </div>
  );
}
