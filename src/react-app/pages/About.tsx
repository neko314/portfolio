import React from 'react';
import './About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main">
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Me</h1>
            <p className="about-hero-subtitle">自己紹介</p>
          </div>
        </section>

        <section className="about-content-section">
          <div className="about-content-container">
            <div className="about-career">
              <h2 className="about-section-title">経歴</h2>
              <div className="about-text">
                <p>
                  異業種から転職し2019年からWebアプリケーション開発に携わってきました。
                  Rubyを用いたバックエンド開発を中心に、運用中サービスの保守・エンハンスと、大規模機能の新規立ち上げを継続的に担当しています。
                  フロントエンド、バックエンド、インフラを含め、設計から実装、リリース、運用まで一連のフェーズに関わる形での開発経験があります。
                </p>
              </div>
            </div>

            <div className="about-skills">
              <h2 className="about-section-title">スキル</h2>
              
              <div className="skill-category">
                <h3 className="skill-category-title category-backend">バックエンド</h3>
                <div className="skills-tags">
                  <span className="skill-tag tag-backend">Ruby</span>
                  <span className="skill-tag tag-backend">Ruby on Rails</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="skill-category-title category-frontend">フロントエンド</h3>
                <div className="skills-tags">
                  <span className="skill-tag tag-frontend">React</span>
                  <span className="skill-tag tag-frontend">Next.js</span>
                  <span className="skill-tag tag-frontend">Vue.js</span>
                  <span className="skill-tag tag-frontend">Nuxt.js</span>
                  <span className="skill-tag tag-frontend">TypeScript</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="skill-category-title category-database">データベース</h3>
                <div className="skills-tags">
                  <span className="skill-tag tag-database">MySQL</span>
                  <span className="skill-tag tag-database">PostgreSQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="skill-category-title category-infra">インフラ</h3>
                <div className="skills-tags">
                  <span className="skill-tag tag-infra">Docker</span>
                  <span className="skill-tag tag-infra">AWS</span>
                  <span className="skill-tag tag-infra">Terraform</span>
                </div>
              </div>
            </div>

            <div className="about-strengths">
              <h2 className="about-section-title">得意なこと・大事にしていること</h2>
              <div className="about-text">
                <p>コミュニケーションや合意形成、しくみづくりを重視し、得意としています。具体的には以下のような行動をとる場面が多くあります。</p>
                <ul className="strengths-list">
                  <li>仕様が固まりきっていない段階から関係者と会話しながら前提や制約を整理すること</li>
                  <li>技術的な背景や判断理由を相手に応じた言葉に置き換えて共有すること</li>
                  <li>チームの状況や負荷を踏まえ現実的に進められる進行や役割分担を考えること</li>
                  <li>しくみを整え、特定の人に負荷が偏らない形で作業を進められる状態をつくること</li>
                  <li>不明点や曖昧さを放置せず言語化して共有すること</li>
                </ul>
              </div>
            </div>

            <div className="about-contact">
              <h2 className="about-section-title">Contact</h2>
              <div className="about-text">
                <p>
                  お問い合わせは、<a href="https://x.com/neko314_" target="_blank" rel="noopener noreferrer">X (Twitter)</a> または <a href="https://github.com/neko314" target="_blank" rel="noopener noreferrer">GitHub</a> からお気軽にどうぞ。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
