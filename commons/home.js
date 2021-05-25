import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <div className="main">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="heading-1">Hi, I am Yusuf.</h1>
      <div className="main__image">
        <Image
          src="/IMG-20200818-WA0000.jpg"
          alt="Picture of myself"
          width={250}
          height={250}
        />
      </div>
      <div className="main__social">
        <a
          href="https://youtube.com/c/Yusufİpek"
          className="social__icon"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://github.com/yusufipk"
          className="social__icon"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon className="social__icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/yusufipk/"
          className="social__icon"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon className="social__icon" icon={faLinkedin} />
        </a>
      </div>

      <p className="paragraph">
        I am a web developer and a content creator. I am creating videos about
        open-source and technology in my Youtube channel. I have a podcast and I
        am writing blog.
      </p>

      <h2 className="heading-2">What I am Doing</h2>
      <ol className="list">
        <li>
          💻 I am a web developer and{" "}
          <Link href="/projects">these are my projects.</Link>
        </li>
        <li>
          📹 I am passionate about computers and software. I have a{" "}
          <Link href="/youtube">Youtube</Link> channel where I create videos
          about technology, free and open source software.
        </li>
        <li>
          🎙️ I have a podcast called{" "}
          <a
            href="https://dar.vin/pdcwb"
            _target="blank"
            rel="noopener noreferrer"
          >
            "Gizlilik Raporu"
          </a>{" "}
          which means "Privacy Report." I am talking about monthly technology
          and open source news.
        </li>
        <li>
          ✍️ On this website I am writing a <Link href="/blog"> blog </Link>{" "}
          about anything I want to talk about.
        </li>
      </ol>

      <h2 className="heading-2">Hobbies</h2>
      <ol className="list">
        <li>
          🎤I love public speaking. It is a passion for me since my high school
          years.
        </li>
        <li>
          😤I am debating. I have played tournaments both in Turkey and
          internationally.
        </li>
        <li>🎹 I have been playing piano for 6 months and I enjoy singing.</li>
      </ol>
      <h2 className="heading-2" id="contact">
        Get in Touch
      </h2>
      <ol className="list">
        <li>
          You can send an{" "}
          <a
            target="_blank"
            relf="noopener noreferrer"
            href="mailto:yusufipek.telekinesis@8shield.net"
          >
            email
          </a>{" "}
          to me.
        </li>
        <li>
          {" "}
          My matrix adress is;{" "}
          <a
            href="https://matrix.to/#/@yusufipek:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yusufipek:matrix.org
          </a>
        </li>
      </ol>
    </div>
  );
}
