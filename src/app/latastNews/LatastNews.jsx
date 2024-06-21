"use client";

import { useEffect, useState } from "react";
import "./latastNews.css";
import Image from "next/image";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch("https://the-news-dragon-server-ittarek.vercel.app/news")
      .then(res => res.json())
      .then(data => {
        setNewsData(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="page mx-auto">
      <h1>LATEST NEWS</h1>
      <div className="archive ">
        <article className="article">
          1
          <Image
            width={500}
            height={500}
            className="image"
            src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture of the author"
          />
        </article>
        <article className="article">
          2 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          3 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          4 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
          <Image
            width={500}
            height={500}
            className="image"
            src="https://images.unsplash.com/photo-1478940020726-e9e191651f1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </article>
        <article className="article">
          5 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          6 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          7 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          8 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          9 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          10 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          11 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          12 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
          <Image
            width={500}
            height={500}
            className="image"
            src="https://images.unsplash.com/photo-1478940020726-e9e191651f1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </article>
        <article className="article">
          13 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
          <Image
            width={500}
            height={500}
            className="image"
            src="https://images.unsplash.com/photo-1478940020726-e9e191651f1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </article>
        <article className="article">
          14 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          15 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
          <Image
            width={500}
            height={500}
            className="image"
            src="https://images.unsplash.com/photo-1478940020726-e9e191651f1a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </article>
        <article className="article">
          16 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
        <article className="article">
          17 Her mother, Cessie, brewed her a mug of herbal tea, added a slug of
          whisky, and countered it with a tale of her own.At just 12, Cessie had
          been raped by her riding instructor. The Horseman, she called him.
          Having groomed her for assault, he then persuaded her that she was in
          love with him.
        </article>
      </div>
    </div>
  );
};

export default LatestNews;
