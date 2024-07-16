import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
`;

// 지원자 정보 컨테이너
export const Container = styled.div`
    width: 290px;
    height: 600px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin-left: 30px;
    position: sticky;
    top: 20px; /* Adjust the distance from the top as needed */
`;

// 지원자 사진
export const InterviewerImage = styled.div`
    display: flex;
    justify-content: center;
`;

// 지원자 이름, 이메일 정보 박스
export const InterviewerInfo = styled.div`
    text-align: center;
    margin-top: 20px;
`;

// 이메일 정보
export const Email = styled.div`
    margin-top: 10px;
    color: gray;
`;

// 목록 이동 버튼
export const BackBtn = styled.div`
    border: 2px solid #404146;
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    margin-top: 250px;
    cursor: pointer;
`;

// 분석 결과 컨테이너
export const InterviewResultContainer = styled.div`
    margin-left: 20px;
`;

export const InterviewVideo = styled.div`
    display: flex;
`;

// 질문 리스트 박스
export const QuestionList = styled.div`
    width: 580px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin-left: 10px;
    margin-top: 5px;
`;

export const QuestionTypeBox = styled.div`
    display: flex;
    margin-top: 10px;
    padding: 15px 20px;
`;

export const QuestionTypeTitle = styled.div`
    font-size: 22px;
    color: black;
    font-weight: 600;
`;

// 
export const QuestionTypeText = styled.div`
    margin-top: 8px;
    font-size: 12px;
    color: gray;
`;

export const QuestionListBox = styled.div`
    max-height: 200px; /* 스크롤을 적용할 최대 높이 설정 */
    overflow-y: auto; /* 세로 스크롤 활성화 */
    width: 100%;
`;

// 질문 리스트
export const QuestionDiv = styled.div`
    border-top: 1px solid #D0D2D7;
    padding: 20px 30px;
    cursor: pointer;
    line-height: 1.5;
`;

// 답변 텍스트 박스
export const AnswerBox = styled.div`
    width: 1130px;
    padding: 30px 35px;
    border-radius: 10px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin-right: 10px;
    margin-top: 20px;
    line-height: 1.7;
`;