// Mypage.js
import React from 'react';
import '../components/css/Mypage.css';

const Mypage = () => {
  return (
    <div className="mypage-container">
      {/* 헤더 */}
      <header className="header">
        <div className="header-logo">
          <img src="/path/to/새길로고.png" alt="로고" />
        </div>
        <div className="welcome-text">환영합니다 000 님!</div>
        <button className="logout-button">로그아웃</button>
      </header>

      {/* 마이페이지 타이틀 */}
      <h1 className="mypage-title">마이페이지</h1>
      <h2 className="mypage-subtitle">나의 정보를 확인해보세요</h2>

      {/* 히어로 이미지 */}
      <div className="hero-image">
        <img src="image.png" alt="Hero Image" />
      </div>

      {/* 회원 정보 섹션 */}
      <div className="user-info-section">
        <p>회원 닉네임 :</p>
        <button className="button">비밀번호 변경하기</button>
        <button className="button">닉네임 변경하기</button>
        <button className="button">사진 변경하기</button>
      </div>

      {/* 소셜 아이콘 */}
      <div className="social-icons">
        <img src="facebook-icon.png" alt="Facebook" />
        <img src="linkedin-icon.png" alt="LinkedIn" />
        <img src="youtube-icon.png" alt="YouTube" />
        <img src="instagram-icon.png" alt="Instagram" />
      </div>

      {/* 마이페이지 기능 버튼 */}
      <div className="mypage-buttons">
        <button className="button">1:1 문의하기</button>
        <button className="button">회원탈퇴 하기</button>
      </div>

      {/* 기타 기능 */}
      <div className="extra-buttons">
        <button className="button">평가한 레시피 보기</button>
        <button className="button">작성글 보기</button>
        <button className="button">작성 댓글 보기</button>
      </div>
    </div>
  );
};

export default Mypage;
