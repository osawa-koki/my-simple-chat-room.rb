import React from "react";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div id="About">
        <h1>Here, About page.</h1>
        <p className="mt-5">
          `Ruby on Rails` × `Next.js`で作成したチャットアプリです。<br />
          <br />
          `Ruby on Rails`はAPIモードを使用し、`Next.js`は`TypeScript`で開発しました。<br />
          転職先の企業で`Ruby on Rails` × `Next.js`を使用するので、その学習用です。
        </p>
      </div>
    </Layout>
  );
};
