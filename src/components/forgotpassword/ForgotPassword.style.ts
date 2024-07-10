import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 49px auto;
`;

export const FormWrapper = styled.div`
  width: 625px;
  height: 434px;
  flex-shrink: 0;
  padding: 20px;
  border: 1px solid #d0d2d7;
  background: #fff;
  border-radius: 30px;
  text-align: center;
`;

export const Title = styled.div`
  text-align: center;
  margin: 30px 0px 0px 20px;
  color: var(--black, #000);
  font-family: ABeeZee;
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
`;

export const SubTitle = styled.div`
  text-align: center;
  margin: 30px 0px 0px 20px;
  color: var(--black, #000);
  font-family: ABeeZee;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
`;

export const InputForm = styled.form`
  width: 100%;
  margin-top: 40px;
`;

export const EmailWrap = styled.div`
  width: 100%;
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 15px;
  margin-top: 25px;
  margin-left: 95px;
`;

export const LabelIcon = styled.div`
  width: 9px;
  height: 9px;
  background-color: #696cea;
  border-radius: 30px;
`;

export const Label = styled.div`
  margin-left: 5px;
  font-weight: 400;
  line-height: normal;
  color: var(--black, #000);
  font-family: ABeeZee;
  font-size: 16px;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* 가운데 정렬 */
`;

export const InputBox = styled.input`
  width: 400px;
  height: 46px;
  border-radius: 11px;
  border: 1px solid #d0d2d7;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 18px;
  color: #0d0d0d;

  &::placeholder {
    color: #d0d2d7; /* placeholder 색상 설정 */
  }
`;

export const BtnContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button<{ secondary?: boolean; disabled?: boolean }>`
  width: 400px;
  height: 46px;
  padding: 10px;
  margin: 30px 0;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${({ secondary, disabled }) => 
    disabled ? '#ccc' : (secondary ? '#404146' : '#696cea')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ secondary, disabled }) => 
      disabled ? '#ccc' : (secondary ? '#555' : '#5757ce')};
  }
`;

// 에러 메시지
export const Error = styled.div`
  display: flex;
  color: #FF4A4A;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 90px;
  height: 5px;
`;