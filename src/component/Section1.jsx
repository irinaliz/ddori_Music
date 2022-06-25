import React from "react";
import "../css/song.css";

export default function Section1() {
  return (
    <section>
      {/* 이번주 베스트 곡들 */}
      <div className="best_song">
        <h1>이번주 베스트 곡</h1>
        <ol>
          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">1</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">Next Level</h2>
              <p className="song_singer">aespa - Next Level</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">2</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">파란하늘 파란하늘 꿈이</h2>
              <p className="song_singer">드리운 푸른언덕에</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">3</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">아기염소</h2>
              <p className="song_singer">풀을 뜯고 놀아요</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">4</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">노래 제목</h2>
              <p className="song_singer">가수명</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">5</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">노래 제목</h2>
              <p className="song_singer">가수명</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">6</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">노래 제목</h2>
              <p className="song_singer">가수명</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">7</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">노래 제목</h2>
              <p className="song_singer">가수명</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">8</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">노래 제목</h2>
              <p className="song_singer">가수명</p>
            </div>
          </li>
          
          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">9</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">노래 제목</h2>
              <p className="song_singer">가수명</p>
            </div>
          </li>

          <li>
            <div className="song_left">
              <span className="song_art">앨범아트</span>
              <span className="song_num">10</span>
            </div>
            <div className="song_right">
              <h2 className="song_name">노래 제목</h2>
              <p className="song_singer">가수명</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
