import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import * as C from './ContactBoardDetail.style'; // 기존 스타일을 유지하기 위해 임포트합니다.

function ContactBoardDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [detailBoardData, setDetailBoardData] = useState<any>({
    no: id,
    title: '공지사항 제목입니다.',
    date: '2023-04-03T19:33:00',
    name: '도형',
    views: 0,
    content: '공지사항 내용입니다.'
  });
  const [answer, setAnswer] = useState('');

  const handleDelete = () => {
    if (window.confirm('삭제하겠습니까?')) {
      // 삭제 로직을 여기에 추가
      alert('삭제되었습니다.');
      navigate('/contact-board-list');
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleAnswerSubmit = () => {
    if (answer.trim() === '') {
      alert('답변을 입력해주세요.');
      return;
    }
    // 답변 제출 로직을 여기에 추가
    alert('답변이 제출되었습니다.');
    setAnswer('');
  };

  return (
    <C.PageContainer>
      <C.SearchContainer>
        <C.Header>
          <C.Title>문의하기</C.Title>
          <C.ButtonWrapper>
            <C.ActionButton onClick={() => navigate(`/contact-board-modify/${id}`)}>수정</C.ActionButton>
            <C.ActionButton onClick={handleDelete}>삭제</C.ActionButton>
            <C.ActionButton onClick={() => navigate('/contact-board-list')}>목록</C.ActionButton>
          </C.ButtonWrapper>
        </C.Header>
        <C.DetailTable>
          <tbody>
            <C.TableRow>
              <C.TableHeader>조회</C.TableHeader>
              <C.CenterTableCell>{detailBoardData.views}</C.CenterTableCell>
              <C.TableHeader>등록일</C.TableHeader>
              <C.CenterTableCell>{dayjs(detailBoardData.date).format('YYYY-MM-DD HH:mm')}</C.CenterTableCell>
            </C.TableRow>
            <C.TableRow>
              <C.TableHeader>제목</C.TableHeader>
              <C.TableCell colSpan={3}>{detailBoardData.title}</C.TableCell>
            </C.TableRow>
            <C.ContentTableRow>
              <C.TableHeader>내용</C.TableHeader>
              <C.TableCell colSpan={3}>{detailBoardData.content}</C.TableCell>
            </C.ContentTableRow>
            <C.AnswerTableRow>
              <C.TableHeader>답변</C.TableHeader>
              <C.TableCell colSpan={3}>
                <C.AnswerTextArea value={answer} onChange={handleAnswerChange} placeholder="답변을 입력해주세요." />
                <C.SubmitButton onClick={handleAnswerSubmit}>제출</C.SubmitButton>
              </C.TableCell>
            </C.AnswerTableRow>
          </tbody>
        </C.DetailTable>
      </C.SearchContainer>
    </C.PageContainer>
  );
}

export default ContactBoardDetail;
